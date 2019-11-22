import React, { Component } from "react";
import Axios from "axios";

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
    Axios.get("/api/questions",{
      data:arr
    }).then((res)=>{
      if(res.data.success == "true"){
        resolve(res.data.questions);
      }
      reject(res.data.message);
    })
  })
}


class Quiz extends Component {
  constructor() {
    super();
  }
  handleSubmit = event => {
    event.preventDefault();

    const email = this.state.email;
    const password = this.state.password;
    let token = "dwajiodwakjdqwj";

    const request = {
      email: this.state.email,
      password: this.state.password
    };
    Axios.post(`/api/login`, request).then(res => {
      console.log(email);
      console.log(password);
      // check status code

      console.log(res.data.statusCode);

      // if successful re-route to profile
      if (res.data.status === "success") {
        token = res.data.token;
        this.props.setLogin({
          email:email,
          token: token,
          authenticated: true
        });
        this.props.history.push("/en/signup");
        /*
         // *** remember to set status code in backend ***
         this.props.history.push({
           pathname: "/profile",
           state: res.data
         });
         */
      } else {
        console.log(res.data);
      }
    });
  };
  async componentDidMount(){
    let x = await getQuestions(10);
    console.log(x);
  }
  render() {
    return (
       <div class="full-page darkblue justified-left aligned-center column">
        <div class="centerer fill_container cap-width-50em padded" style={{flexGrow:2}}>
          <h1 class="full-width text-left">Question 1</h1>
          <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et neque auctor, tincidunt libero sit amet, laoreet ipsum. Etiam a erat vitae est convallis sollicitudin. Aliquam erat volutpat. Aenean a maximus sem, sed cursus nulla. Donec a tristique turpis. Ut scelerisque viverra odio, quis commodo erat. Fusce risus ipsum, maximus sed neque sit amet, semper pulvinar enim. Nullam aliquam dolor ex, eu condimentum tellus blandit non. Pellentesque posuere interdum lacus, ac lacinia est placerat in. Pellentesque tincidunt auctor mauris, in ultrices velit molestie nec. Maecenas ut lectus imperdiet, malesuada augue quis, laoreet tellus. </p>
          <div class="button red">Option</div>
          <div class="button red">Option</div>
          <div class="button red">Option</div>
          <div class="button red">Option</div>
        </div>
      </div>
    );
  }
}
export default Quiz;
