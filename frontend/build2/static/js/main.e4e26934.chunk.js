(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(12),o=t.n(l),i=(t(65),t(6)),c=t(7),u=t(9),s=t(8),m=t(10),p=t(3),h=t(117),d=t(2),b=t(33),f=t.n(b),g=t(15),v=t.n(g);function E(){var e=Object(p.a)(["\n  color: white;\n"]);return E=function(){return e},e}function w(){var e=Object(p.a)(["\n  font-weight: 700;\n  color: white;\n  appearance: none;\n  border: none;\n  font-size: 16px;\n  width: 100%;\n  height: 40px;\n  border-radius: 20px;\n  background-color: #d03c42;\n"]);return w=function(){return e},e}function x(){var e=Object(p.a)(["\n  color: white;\n  width: fit-content;\n  font-size: 14px;\n  margin: 0 auto;\n  margin-top: 80px;\n  margin-bottom: 15px;\n  display: block;\n"]);return x=function(){return e},e}function y(){var e=Object(p.a)(["\n  color: white;\n  font-size: 14px;\n  font-family: sans-serif;\n  width: 100%;\n  border: none;\n  border-bottom: 2px solid white;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-left: 8px;\n  appearance: none;\n  background-color: transparent;\n  margin-bottom: 16px;\n"]);return y=function(){return e},e}function j(){var e=Object(p.a)(["\n  font-size: 14px;\n  width: fit-content;\n  color: white;\n  display: block;\n  margin: 0 auto;\n  margin-top: 16px;\n"]);return j=function(){return e},e}function O(){var e=Object(p.a)(["\n  margin: 0 auto;\n  width: 24rem;\n"]);return O=function(){return e},e}function C(){var e=Object(p.a)(["\n  background-color: #334c7b;\n  width: 100vw;\n  height: 100vh;\n  padding-top: 100px;\n"]);return C=function(){return e},e}function k(){var e=Object(p.a)(["\n  width: 100%;\n  margin-bottom: 24px;\n  margin-top: 24px;\n"]);return k=function(){return e},e}var S=d.a.img(k()),N=d.a.div(C()),z=d.a.div(O()),_=d.a.a(j()),R=d.a.input(y()),M=d.a.a(x()),A=d.a.button(w()),P=Object(d.a)(h.a)(E()),L=function(e){function n(){var e,t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(t=Object(u.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(r)))).state={email:"",password:"",passwordRepeat:""},t.handleChangeEmail=function(e){t.setState({email:e.target.value})},t.handleChangePassword=function(e){t.setState({password:e.target.value})},t.handleSubmit=function(e){e.preventDefault();var n=t.state.email,a=t.state.password,r={email:t.state.email,password:t.state.password};v.a.post("/login",r).then(function(e){console.log(n),console.log(a),console.log(e.data.statusCode),200===e.data.statusCode?t.props.history.push({pathname:"/profile",state:e.data}):(alert("Validation error occurred. "+e.data),console.log("Error "+e.data.statusCode))})},t}return Object(m.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(N,null,r.a.createElement(z,null,r.a.createElement(S,{src:"/logo.png"}),r.a.createElement(R,{placeholder:"Email"}),r.a.createElement(R,{placeholder:"Password",type:"password"}),r.a.createElement(P,{to:"/homepage"},r.a.createElement(A,null,"Login")),r.a.createElement(_,null,"Forgot your password?"),r.a.createElement(M,null,"New here? ",r.a.createElement(P,{to:"/signup"},"Sign up.")))))}}]),n}(a.Component),I=t(22);function F(){var e=Object(p.a)(["\n  color: white;\n"]);return F=function(){return e},e}function D(){var e=Object(p.a)(["\n  margin: 10px;\n  color: white;\n  font-weight: 700;\n  font-size: 24px;\n"]);return D=function(){return e},e}function B(){var e=Object(p.a)(["\n  font-weight: 700;\n  color: white;\n  appearance: none;\n  border: none;\n  font-size: 16px;\n  width: 100%;\n  height: 40px;\n  border-radius: 20px;\n  background-color: #d03c42;\n"]);return B=function(){return e},e}function W(){var e=Object(p.a)(["\n  color: white;\n  width: fit-content;\n  font-size: 14px;\n  margin: 0 auto;\n  margin-top: 80px;\n  margin-bottom: 15px;\n  display: block;\n"]);return W=function(){return e},e}function J(){var e=Object(p.a)(["\n  color: white;\n  font-size: 14px;\n  font-family: sans-serif;\n  width: 100%;\n  border: none;\n  border-bottom: 2px solid white;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-left: 8px;\n  appearance: none;\n  background-color: transparent;\n  margin-bottom: 16px;\n"]);return J=function(){return e},e}function G(){var e=Object(p.a)(["\n  margin: 0 auto;\n  width: 24rem;\n"]);return G=function(){return e},e}function T(){var e=Object(p.a)(["\n  background-color: #334c7b;\n  width: 100vw;\n  height: 100vh;\n  padding-top: 100px;\n"]);return T=function(){return e},e}function U(){var e=Object(p.a)(["\n  width: 100%;\n  margin-bottom: 24px;\n  margin-top: 24px;\n"]);return U=function(){return e},e}var H=d.a.img(U()),$=d.a.div(T()),q=d.a.div(G()),Y=d.a.input(J()),V=(d.a.div(W()),d.a.button(B())),K=d.a.div(D()),X=(Object(d.a)(h.a)(F()),function(e){function n(){var e,t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(t=Object(u.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(r)))).state={email:"",password:"",passwordRepeat:""},t.handleChangeEmail=function(e){t.setState({email:e.target.value})},t.handleChangePassword=function(e){t.setState({password:e.target.value})},t.handleChangePasswordRepeat=function(e){t.setState({passwordRepeat:e.target.value})},t.handleSubmit=function(e){e.preventDefault();var n=t.state.email,a=t.state.password;t.state.passwordRepeat;t.state.password!=t.state.passwordRepeat?(alert("Passwords do not match"),console.error("An error occured while making the request: Passwords do not match")):v.a.post("/signup",{email:n,password:a}).then(function(e){(console.log(n),console.log(a),200===e.data.statusCode)?((new I.a).set("email",t.state.email,{path:"/"}),t.props.history.push({pathname:"/makeprofile"})):(alert("Validation error occurred. "+e.data.body),console.log("Error "+e.data.statusCode))}).catch(function(e){console.error("An error occured while making the request")})},t}return Object(m.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement($,null,r.a.createElement(q,null,r.a.createElement(H,{src:f.a}),r.a.createElement(K,null,"Sign Up"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(Y,{placeholder:"Email",onChange:this.handleChangeEmail}),r.a.createElement(Y,{placeholder:"Enter a password",type:"password",onChange:this.handleChangePassword}),r.a.createElement(Y,{placeholder:"Reenter your Password",type:"password",onChange:this.handleChangePasswordRepeat}),r.a.createElement(V,{type:"submit"},"Sign Up")))))}}]),n}(a.Component)),Q=t(56),Z=t.n(Q),ee=t(17);function ne(){var e=Object(p.a)(["\n  color: white;\n"]);return ne=function(){return e},e}function te(){var e=Object(p.a)(["\n  margin-top: 20px;\n  color: white;\n  border-radius: 25px;\n  font-weight: 700;\n  font-size: 18px;\n"]);return te=function(){return e},e}function ae(){var e=Object(p.a)(["\n  background-color: #d03c42;\n  border-radius: 25px;\n  padding-bottom: 50px;\n  padding-top: 50px;\n"]);return ae=function(){return e},e}function re(){var e=Object(p.a)(["\n  padding-left: 30px;\n  padding-right: 20px;\n  padding-bottom: 20px;\n  padding-top: 0px;\n  color: white;\n  font-weight: 700;\n  font-size: 14px;\n  text-align: left;\n"]);return re=function(){return e},e}function le(){var e=Object(p.a)(["\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-bottom: 15px;\n  color: white;\n  font-weight: 700;\n  font-size: 48px;\n  text-align: left;\n"]);return le=function(){return e},e}function oe(){var e=Object(p.a)(["\n  font-weight: 700;\n  color: white;\n  appearance: none;\n  border: none;\n  font-size: 16px;\n  width: 100%;\n  height: 40px;\n  border-radius: 20px;\n  background-color: #d03c42;\n"]);return oe=function(){return e},e}function ie(){var e=Object(p.a)(["\n  color: white;\n  width: fit-content;\n  font-size: 14px;\n  margin: 0 auto;\n  margin-top: 80px;\n  margin-bottom: 15px;\n  display: block;\n"]);return ie=function(){return e},e}function ce(){var e=Object(p.a)(["\n  color: white;\n  font-size: 14px;\n  font-family: sans-serif;\n  width: 100%;\n  border: none;\n  border-bottom: 2px solid white;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-left: 8px;\n  appearance: none;\n  background-color: transparent;\n  margin-bottom: 16px;\n"]);return ce=function(){return e},e}function ue(){var e=Object(p.a)(["\n  margin: 0 auto;\n  width: 24rem;\n"]);return ue=function(){return e},e}function se(){var e=Object(p.a)(["\n  background-color: #334c7b;\n  width: 100vw;\n  height: 100vh;\n  padding-top: 100px;\n  padding-bottom: 1000px;\n"]);return se=function(){return e},e}function me(){var e=Object(p.a)(["\n  width: 100%;\n  margin-bottom: 24px;\n  margin-top: 24px;\n"]);return me=function(){return e},e}d.a.img(me());var pe=d.a.div(se()),he=d.a.div(ue()),de=d.a.input(ce()),be=(d.a.div(ie()),d.a.button(oe())),fe=d.a.div(le()),ge=d.a.div(re()),ve=d.a.div(ae()),Ee=d.a.div(te()),we=Object(d.a)(h.a)(ne()),xe=[{value:0,label:"Asian / Pacific Islander"},{value:1,label:"Black or African American"},{value:2,label:"Hispanic"},{value:3,label:"American Indian or Alaskan Native"},{value:4,label:"White / Caucasian"},{value:5,label:"Other"}],ye=[{value:0,label:"Male"},{value:1,label:"Female"},{value:2,label:"Prefer not to say"}],je=[{value:0,label:"No Formal Education"},{value:1,label:"High School"},{value:2,label:"Associate Degree"},{value:3,label:"Bachelor's Degree"},{value:4,label:"Master's / Doctorate"},{value:5,label:"Prefer not to say"}],Oe=[{value:0,label:"Single"},{value:1,label:"Married"},{value:2,label:"Divorced"},{value:3,label:"Prefer not to say"}],Ce=[{value:0,label:"<$20,000"},{value:1,label:"$20,000 - $44,999"},{value:2,label:"$45,000 - $139,999\t"},{value:3,label:">$140,000"}],ke=[{value:0,label:"Accounting"},{value:1,label:"Administrative/Clerical"},{value:2,label:"Arts/Entertainment/Media"},{value:3,label:"Automotive"},{value:4,label:"Biotechnology"},{value:5,label:"Business"},{value:6,label:"Construction"},{value:7,label:"Customer Service"},{value:8,label:"Education"},{value:9,label:"Engineering"},{value:10,label:"Executive"},{value:11,label:"Facilities"},{value:12,label:"Financial Services"},{value:13,label:"Government"},{value:14,label:"Healthcare"},{value:15,label:"Hospitality"},{value:16,label:"Human Resources"},{value:17,label:"Information Technology"},{value:18,label:"Insurance"},{value:19,label:"Law Enforcement"},{value:20,label:"Legal"},{value:21,label:"Manufacturing/Production"},{value:22,label:"Marketing"},{value:23,label:"Real Estate"},{value:24,label:"Retail/Wholesale"},{value:25,label:"Sales"},{value:26,label:"Science"},{value:27,label:"Telecommunications"},{value:28,label:"Transportation/Warehouse"}],Se=function(e){function n(){var e,t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(t=Object(u.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(r)))).state={First_name:"",Last_name:"",Date_of_birth:"",Race:"",Gender:"",Education:"",Family_num:"",Child_num:"",Marriage_status:"",Income_range:"",Job_type:{},Years_in_us:""},t.handleChangeFirstName=function(e){t.setState({First_name:e.target.value})},t.handleChangeLastName=function(e){t.setState({Last_name:e.target.value})},t.handleChangeDateOfBirth=function(e){t.setState({Date_of_birth:e.target.value})},t.handleChangeRace=function(e){t.setState({Race:e.label})},t.handleChangeGender=function(e){t.setState({Gender:e.label})},t.handleChangeEducation=function(e){t.setState({Education:e.label})},t.handleChangeFamilyNum=function(e){t.setState({Family_num:e.target.value})},t.handleChangeChildNum=function(e){t.setState({Child_num:e.target.value})},t.handleChangeMarriageStatus=function(e){t.setState({Marriage_status:e.label})},t.handleChangeIncomeRange=function(e){t.setState({Income_range:e.label})},t.handleChangeJobType=function(e){for(var n=[],a=0,r=e.length;a<r;a++)n.push(e[a].label);t.setState({Job_type:n})},t.handleChangeYearsInUS=function(e){t.setState({Years_in_us:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),console.log(t.state),console.log(xe[t.state.Race]);var n={email:t.state.email},a={password:t.state.password};t.state.passwordRepeat,(new I.a).get("email");t.state.password!=t.state.passwordRepeat?(alert("Passwords do not match"),console.error("An error occured while making the request: Passwords do not match")):v.a.post("/signup",{email:n,password:a}).then(function(e){if(console.log(n),console.log(a),200===(e={statusCode:200}).data.statusCode){var r=JSON.parse(e.data.body);t.props.history.push({pathname:"/profile",state:{data:r}})}else alert("Validation error occurred. "+e.data.body),console.log("Error "+e.data.statusCode)}).catch(function(e){console.error("An error occured while making the request")})},t}return Object(m.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(pe,null,r.a.createElement(he,null,r.a.createElement(ve,null,r.a.createElement(fe,null,"Profile Creation"),r.a.createElement(ge,null,"Fill out the forms below to get started.")),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(Ee,null,"First Name"),r.a.createElement(de,{placeholder:"",onChange:this.handleChangeFirstName}),r.a.createElement(Ee,null,"Last Name"),r.a.createElement(de,{placeholder:"",onChange:this.handleChangeLastName}),r.a.createElement(Ee,null,"Date of Birth"),r.a.createElement(de,{name:"dob",placeholder:"mm/dd/yyyy",required:"",id:"dob",type:"date",class:"is-touched is-pristine av-valid form-control",onChange:this.handleChangeDateOfBirth}),r.a.createElement(Ee,null,"Race"),r.a.createElement(ee.a,{name:"",options:xe,className:"basic-multi-select",classNamePrefix:"select",onChange:this.handleChangeRace}),r.a.createElement(Ee,null,"Gender"),r.a.createElement(ee.a,{name:"",options:ye,className:"basic-multi-select",classNamePrefix:"select",onChange:this.handleChangeGender}),r.a.createElement(Ee,null,"Education"),r.a.createElement(ee.a,{name:"",options:je,className:"basic-multi-select",classNamePrefix:"select",onChange:this.handleChangeEducation}),r.a.createElement(Ee,null,"Number of Family Members"),r.a.createElement(de,{type:"number",min:"0",max:"10",onChange:this.handleChangeFamilyNum}),r.a.createElement(Ee,null,"Number of Children"),r.a.createElement(de,{type:"number",min:"0",max:"10",onChange:this.handleChangeChildNum}),r.a.createElement(Ee,null,"Marriage Status"),r.a.createElement(ee.a,{name:"",options:Oe,className:"basic-multi-select",classNamePrefix:"select",onChange:this.handleChangeMarriageStatus}),r.a.createElement(Ee,null,"Income Range"),r.a.createElement(ee.a,{name:"",options:Ce,className:"basic-multi-select",classNamePrefix:"select",onChange:this.handleChangeIncomeRange}),r.a.createElement(Ee,null,"Job Type"),r.a.createElement(Z.a,{isMulti:!0,name:"",options:ke,className:"basic-multi-select",classNamePrefix:"select",onChange:this.handleChangeJobType}),r.a.createElement(Ee,null,"Years in the US"),r.a.createElement(de,{type:"number",min:"0",max:"60",onChange:this.handleChangeYearsInUS}),r.a.createElement(we,{to:"/homepage"},r.a.createElement(be,{type:"submit"},"Sign Up"))))))}}]),n}(a.Component);function Ne(){var e=Object(p.a)(["\n  color: white;\n"]);return Ne=function(){return e},e}function ze(){var e=Object(p.a)(["\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-bottom: 15px;\n  color: white;\n  font-weight: 700;\n  font-size: 48px;\n  text-align: left;\n"]);return ze=function(){return e},e}function _e(){var e=Object(p.a)(["\n  font-weight: 700;\n  color: white;\n  appearance: none;\n  border: none;\n  font-size: 16px;\n  width: 100%;\n  height: 40px;\n  border-radius: 20px;\n  background-color: #d03c42;\n"]);return _e=function(){return e},e}function Re(){var e=Object(p.a)(["\n  color: white;\n  width: fit-content;\n  font-size: 14px;\n  margin: 0 auto;\n  margin-top: 80px;\n  margin-bottom: 15px;\n  display: block;\n"]);return Re=function(){return e},e}function Me(){var e=Object(p.a)(["\n  color: white;\n  font-size: 14px;\n  font-family: sans-serif;\n  width: 100%;\n  border: none;\n  border-bottom: 2px solid white;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  padding-left: 8px;\n  appearance: none;\n  background-color: transparent;\n  margin-bottom: 16px;\n"]);return Me=function(){return e},e}function Ae(){var e=Object(p.a)(["\n  font-size: 14px;\n  width: fit-content;\n  color: white;\n  display: block;\n  margin: 0 auto;\n  margin-top: 16px;\n"]);return Ae=function(){return e},e}function Pe(){var e=Object(p.a)(["\n  margin: 0 auto;\n  width: 24rem;\n"]);return Pe=function(){return e},e}function Le(){var e=Object(p.a)(["\n  background-color: #334c7b;\n  width: 100vw;\n  height: 100vh;\n  padding-top: 100px;\n"]);return Le=function(){return e},e}function Ie(){var e=Object(p.a)(["\n  width: 100%;\n  margin-bottom: 24px;\n  margin-top: 24px;\n"]);return Ie=function(){return e},e}d.a.img(Ie());var Fe=d.a.div(Le()),De=(d.a.div(Pe()),d.a.a(Ae()),d.a.input(Me()),d.a.a(Re()),d.a.button(_e()),d.a.div(ze())),Be=(Object(d.a)(h.a)(Ne()),function(e){function n(){return Object(i.a)(this,n),Object(u.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Fe,null,r.a.createElement(De,null,"Welcome to The Citizenship Project!"),r.a.createElement(De,null,"Lets Get Started.")))}}]),n}(a.Component));function We(){var e=Object(p.a)(["\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  bottom: 0;\n  left: 0;\n"]);return We=function(){return e},e}function Je(){var e=Object(p.a)(["\n  color: white;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 20px;\n"]);return Je=function(){return e},e}function Ge(){var e=Object(p.a)(["\n  position: relative;\n  width: 200px;\n  height 200px;\n  margin: 30px;\n  display: inline-block;\n  &:hover{\n    .overlay{\n      opacity:1;\n    }\n  }\n  &:hover{\n    .overlayLeft{\n      width:100%;\n    }\n  }\n\n"]);return Ge=function(){return e},e}function Te(){var e=Object(p.a)(["\n  position: absolute;\n  transition: all 0.3s ease;\n  opacity: 0;\n  background-color: #8b0000;\n  height: 100%;\n  width: 0;\n  top: 0;\n  left: 0;\n  border-radius: 50%;\n  &:.overlayleft {\n    height: 100%;\n    width: 0;\n    top: 0;\n    left: 0;\n  }\n"]);return Te=function(){return e},e}function Ue(){var e=Object(p.a)(["\n  height: 200px;\n  width: 200px;\n  border-radius: 50%;\n  display: block;\n"]);return Ue=function(){return e},e}function He(){var e=Object(p.a)(["\n  height: 400px;\n  border-radius: 50px;\n"]);return He=function(){return e},e}function $e(){var e=Object(p.a)(["\n  height: 400px;\n  width: 1000px;\n  border-radius: 50px;\n"]);return $e=function(){return e},e}function qe(){var e=Object(p.a)(['\n  background: url("Related_Resources/Banner.png") no-repeat center;\n  background-size: cover;\n  background-attachment: fixed;\n  height: 700px;\n']);return qe=function(){return e},e}function Ye(){var e=Object(p.a)(["\n  background: linear-gradient(to right, #0575e6, #021b79);\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  color: white;\n  font-size: 34px;\n"]);return Ye=function(){return e},e}var Ve=d.a.div(Ye()),Ke=d.a.div(qe()),Xe=d.a.img($e()),Qe=d.a.img(He()),Ze=d.a.img(Ue()),en=d.a.div(Te()),nn=d.a.div(Ge()),tn=d.a.div(Je()),an=(d.a.div(We()),function(e){function n(){return Object(i.a)(this,n),Object(u.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Ve,null,r.a.createElement(Ke,null),r.a.createElement("h1",null,r.a.createElement("u",null,"What is Citizenship.io?")),r.a.createElement("p",null,"Citizenship.io is a tool that people of the New ",r.a.createElement("br",null),"Brunswick population can use to prepare",r.a.createElement("br",null),"for the citizenship test. (A bunch of other stuff)."),r.a.createElement("h1",null,r.a.createElement("u",null,"Mission")),r.a.createElement("p",null,"Increase the passing rate of the Hispanic",r.a.createElement("br",null),"population in New Brunswick by creating",r.a.createElement("br",null)," a virtual application"),r.a.createElement("h1",null,r.a.createElement("u",null,"Who we are")),r.a.createElement(nn,null,r.a.createElement(Ze,{src:"Citizenship-io_Members/Amulya.jpg"}),r.a.createElement("span",null,"Amulya Mummaneni"),r.a.createElement(en,{className:"overlay overlayLeft"},r.a.createElement("a",{href:"https://www.linkedin.com/in/amulyamummaneni/"},r.a.createElement(tn,null,"https://www.linkedin",r.a.createElement("br",null),".com/in/",r.a.createElement("br",null),"amulyamummaneni/")))),r.a.createElement(nn,null,r.a.createElement(Ze,{src:"Citizenship-io_Members/Rishab.jpg"}),r.a.createElement("span",null,"Rishab Chawla"),r.a.createElement(en,{className:"overlay overlayLeft"},r.a.createElement("a",{href:"https://www.linkedin.com/in/rishab-chawla/"},r.a.createElement(tn,null,"https://www.linkedin",r.a.createElement("br",null),".com/in/",r.a.createElement("br",null),"rishab-chawla/")))),r.a.createElement(nn,null,r.a.createElement(Ze,{src:"Citizenship-io_Members/Srihari.jpg"}),r.a.createElement("span",null,"Srihari Shankar"),r.a.createElement(en,{className:"overlay overlayLeft"},r.a.createElement("a",{href:"https://www.linkedin.com/in/srihari-shankar-a45029134/"},r.a.createElement(tn,null,"https://www.linkedin",r.a.createElement("br",null),".com/in/",r.a.createElement("br",null),"srihari-shankar-a45029134/")))),r.a.createElement(nn,null,r.a.createElement(Ze,{src:"Citizenship-io_Members/Akshay.jpg"}),r.a.createElement("span",null,"Akshay Sapra"),r.a.createElement(en,{className:"overlay overlayLeft"},r.a.createElement(tn,null,"Akshay"))),r.a.createElement(nn,null,r.a.createElement(Ze,{src:"Citizenship-io_Members/Amber.jpg"}),r.a.createElement("span",null,"Amber Rawson"),r.a.createElement(en,{className:"overlay overlayLeft"},r.a.createElement("a",{href:"https://www.linkedin.com/in/amberrawson/"},r.a.createElement(tn,null,"https://www.linkedin",r.a.createElement("br",null),".com/in/",r.a.createElement("br",null),"amberrawson/")))),r.a.createElement(nn,null,r.a.createElement(Ze,{src:"Citizenship-io_Members/Basim.jpg"}),r.a.createElement("span",null,"Basim ",r.a.createElement("br",null),"Jaffer"),r.a.createElement(en,{className:"overlay overlayLeft"},r.a.createElement("a",{href:"https://www.linkedin.com/in/basim-j-372728b1/"},r.a.createElement(tn,null,"https://www.linkedin",r.a.createElement("br",null),".com/in/",r.a.createElement("br",null),"basim-j-372728b1/")))),r.a.createElement(nn,null,r.a.createElement(Ze,{src:"Citizenship-io_Members/Ethan.jpg"}),r.a.createElement("span",null,"Ethan Febinger"),r.a.createElement(en,{className:"overlay overlayLeft"},r.a.createElement("a",{href:"https://www.linkedin.com/in/ethan-febinger-400a27176/"},r.a.createElement(tn,null,"https://www.linkedin",r.a.createElement("br",null),".com/in/",r.a.createElement("br",null),"ethan-febinger-400a27176/")))),r.a.createElement(nn,null,r.a.createElement(Ze,{src:"Citizenship-io_Members/Kevin.jpg"}),r.a.createElement("span",null,"Kevin ",r.a.createElement("br",null),"Wu"),r.a.createElement(en,{className:"overlay overlayLeft"},r.a.createElement(tn,null,"Kevin"))),r.a.createElement(nn,null,r.a.createElement(Ze,{src:"Citizenship-io_Members/Michael.jpg"}),r.a.createElement("span",null,"Michael ",r.a.createElement("br",null),"Seo"),r.a.createElement(en,{className:"overlay overlayLeft"},r.a.createElement("a",{href:"https://www.linkedin.com/in/michael-seo-635753172/"},r.a.createElement(tn,null,"https://www.linkedin",r.a.createElement("br",null),".com/in/",r.a.createElement("br",null),"michael-seo-635753172/")))),r.a.createElement(nn,null,r.a.createElement(Ze,{src:"Citizenship-io_Members/Sam.jpg"}),r.a.createElement("span",null,"Sam",r.a.createElement("br",null),"Olagun"),r.a.createElement(en,{className:"overlay overlayLeft"},r.a.createElement("a",{href:"https://www.linkedin.com/in/sam-olagun/"},r.a.createElement(tn,null,"https://www.linkedin",r.a.createElement("br",null),".com/in/",r.a.createElement("br",null),"sam-olagun/")))),r.a.createElement(nn,null,r.a.createElement(Ze,{src:"Citizenship-io_Members/Wingjun.jpg"}),r.a.createElement("span",null,"Wingjun Chan"),r.a.createElement(en,{className:"overlay overlayLeft"},r.a.createElement(tn,null,"Wingjun"))),r.a.createElement(nn,null,r.a.createElement(Ze,{src:"Citizenship-io_Members/Xiwen.jpg"}),r.a.createElement("span",null,"Xiwen",r.a.createElement("br",null),"Shen"),r.a.createElement(en,{className:"overlay overlayLeft"},r.a.createElement(tn,null,"Xiwen"))),r.a.createElement("h1",null,"Related Resources"),r.a.createElement("a",{href:"https://www.duolingo.com/"},r.a.createElement(Qe,{src:"Related_Resources/Duolingo.jpg"})),r.a.createElement("a",{href:"http://eagleton.rutgers.edu/?fbclid=IwAR36HcV58Gf1QfiIpCEUImrtM1hwh_vSdnWSOf9gDT9Ni-OvdvNNxS5s5sI"},r.a.createElement(Xe,{src:"Related_Resources/Revolutionary.jpg"}))))}}]),n}(a.Component));function rn(){var e=Object(p.a)(["\ndisplay:inline-block;\ncolor:\t#ADD8E6;\npadding:10px;\n"]);return rn=function(){return e},e}function ln(){var e=Object(p.a)(["\n  font-weight: 700;\n  color: white;\n  font-size: 12px;\n  height: 40px;\n  display:inline-block;\n  width: 100%;\n"]);return ln=function(){return e},e}var on=d.a.div(ln()),cn=d.a.a(rn()),un=function(e){function n(){return Object(i.a)(this,n),Object(u.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(on,null,r.a.createElement(cn,{href:"//"},"Profie"),r.a.createElement(cn,{href:"//"},"Study"),r.a.createElement(cn,{href:"//"},"Naturaization"),r.a.createElement(cn,{href:"//"},"Incentives"),r.a.createElement(cn,{href:"//"},"About Us")))}}]),n}(a.Component),sn=t(119),mn=t(118),pn=function(e){function n(){return Object(i.a)(this,n),Object(u.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement(sn.a,null,r.a.createElement("div",null,r.a.createElement(un,null),r.a.createElement(mn.a,{path:"/aboutus",component:an}),r.a.createElement(mn.a,{exact:!0,path:"/",component:L}),r.a.createElement(mn.a,{path:"/signup",component:X}),r.a.createElement(mn.a,{path:"/makeprofile",component:Se}),r.a.createElement(mn.a,{path:"/homepage",component:Be})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(sn.a,null,r.a.createElement(pn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},33:function(e,n,t){e.exports=t.p+"static/media/logo.0c1d81b6.png"},60:function(e,n,t){e.exports=t(116)},65:function(e,n,t){}},[[60,2,1]]]);
//# sourceMappingURL=main.e4e26934.chunk.js.map