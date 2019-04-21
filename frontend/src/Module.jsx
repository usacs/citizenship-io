import React, { Component } from "react";
import Collapsible from 'react-collapsible';
export default class Module extends Component {
    constructor(props){
        super(props)
    }
 
    handleOnClickQuiz = evt =>{
        console.log(evt.target)
    }
    
    render() {
      return (
        <div>
            <Collapsible trigger={this.props.modulename}>
        
                <a id={this.props.moduleid} href={this.props.slide} >Lesson</a>
                <br></br>
                <a id ={this.props.moduleid} onClick = {this.handleOnClickQuiz}> Quiz </a>
            </Collapsible>
        </div>
      );
    }
  }