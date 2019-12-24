import React, { Component } from "react";
import {Redirect} from "react-router-dom";
import Axios from "axios";

import {If} from "../js/helpers";

const MAX_QUESTIONS = 10;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

let getQuestions = (x) =>{
  return new Promise((resolve,reject)=>{
    let arr = [];
    for(let a = 0;a < x; a++){
      arr.push(getRandomInt(1,101));
    }
    console.log("test1")
    Axios.get("/api/questions",{
      params:JSON.stringify(arr)
    }).then((res)=>{
      console.log(res);
      if(res.data.status = "success"){
        resolve(res.data.questions);
      }
      reject(res.data.message);
    })
  })
}


class QuestionButton extends Component{
  constructor(){
    super();
    this.getButtonClass = this.getButtonClass.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  getButtonClass(){
    switch(this.props.correct){
      case 1: return "wrong";
      case 2: return "correct";
      default: return "";
    }
  }
  handleClick(){
    if(this.props.correct != 1 && this.props.correct != 2){
      this.props.answerFunc(this.props.id);
    }
  }
  render(){
    return (<div onClick={()=>{this.handleClick()}} className={"button red " + this.getButtonClass()}>{this.props.text}</div>)
  }
}

class Prompt extends Component{
  constructor(){
    super();
    this.state = {
      buttons:[0,0,0,0],
      correct:false,
      selected_incorrect:false
    };
    this.submitAnswer = this.submitAnswer.bind(this);
    this.handleNextQuestion = this.handleNextQuestion.bind(this);
  }
  handleNextQuestion(){
    this.props.setQuestion(this.props.number + 1);
    this.setState({
      buttons:[0,0,0,0],
      correct:false,
      selected_incorrect:false
    })
  }
  submitAnswer(x){
    let headers = {};
    headers["auth-token"] = this.props.login_state.token;
    //ANSWER IS from 1-4 while button ids are from 0-3, offset by one to adjust
    Axios({method:"post", url: "/api/response",data:{
      question_id:this.props.question.question_id,
      answer:(x+1)
    },headers:headers}).then((res)=>{
      let new_arr = [...this.state.buttons];
      if(res.data.status == "success" && res.data.correct == false){
        new_arr[x] = 1;
        this.setState({
          buttons:new_arr,
          selected_incorrect:true
        })
      } 
      else if(res.data.status == "success" && res.data.correct == true){
        new_arr = new_arr.map((a,index)=>{
          if(index != x) return 1;
          return 2;
        })
        this.setState({
          buttons:new_arr,
          correct:true
        });
        if(!this.state.selected_incorrect){
          this.props.incrementCorrect();
        }
      } 
      else{
        console.log("ERROR");
      }
    })
  }
  render(){   
    return(
      <div className="centerer fill_container cap-width-50em padded" style={{flexGrow:2}}>
        <div className="grid-responsive full-width">
          <div className="row">
            <div className="col-6-12-mobile">
              <h1 className="full-width text-left">Question {this.props.number}</h1>
            </div>
            <div className="col-6-12-mobile">
              <If condition={this.state.correct == true}>
                <div onClick={()=>{this.handleNextQuestion()}} className="button yellow">
                  Next Question
                </div>
              </If>
            </div>
          </div>
        </div>
        <p className="text">{this.props.question.value} </p>
        {this.props.question.answers.map((x,index)=>(<QuestionButton correct={this.state.buttons[index]} answerFunc={this.submitAnswer} id={index} text={x} />))}
      </div>)
  }
}

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      questions: [{value:"test",answers:[]}],
      current_question: 0,
      currently_testing:0,
      correct_arr:[]
    }
    this.setQuestion = this.setQuestion.bind(this);
    this.createQuiz = this.createQuiz.bind(this);
    this.incrementCorrect = this.incrementCorrect.bind(this);
  }
  async componentDidMount(){
    await this.createQuiz();
  }
  async createQuiz(){
    let x = await getQuestions(MAX_QUESTIONS + 1);
    let arr = [];
    this.setState({
      questions:x,
      current_question:1,
      currently_testing:1,
      correct_arr:[]     
    });
  }
  setQuestion(a){
    if(a > MAX_QUESTIONS){
      this.setState({
        currently_testing:0,
      })
    }
    else {
      this.setState({
        current_question: a,
        correct: false
      });
    }
  }
  incrementCorrect(){
    let new_val = [...this.state.correct_arr];
    new_val.push(this.state.current_question);
    console.log(new_val);
    this.setState({
      correct_arr:new_val
    });
  }
  render() {
    let correct_percentage = this.state.correct_arr.length/MAX_QUESTIONS * 100;
    if (this.props.login_state.authenticated) {
      if (this.state.currently_testing) {
        let number = this.state.current_question;
        let question = this.state.questions[number];
        return (
          <div className="full-page darkblue justified-left aligned-center column">
            <Prompt login_state={this.props.login_state} number={number} question={question} setQuestion={this.setQuestion} incrementCorrect={this.incrementCorrect}/>
          </div>
        );
      }
      else {
        let arr = [];
        for(let a = 1;a < MAX_QUESTIONS;a++){
          arr.push(<div className="display-wrong"></div>);
        }
        this.state.correct_arr.forEach((x)=>{
          arr[x] = (<div className="display-correct"></div>);
        })
        return (
          <div className="full-page darkblue justified-left aligned-center column">
            <div className="centerer fill_container cap-width-50em padded" style={{ flexGrow: 2 }}>
              <div className="end-display justified-center aligned-center">
                {arr}
              </div>
              <h1>{correct_percentage}% correct.</h1>
              <div onClick={() => { this.createQuiz() }} className="button yellow">
                Try another quiz!
              </div>
            </div>
          </div>
        )
      }
    }
    return (<Redirect to="/en/login" />)
  }
}
export default Quiz;
