import React, { Component } from "react";
import styled from "styled-components";
import CreatableSelect from "react-select/lib/Creatable";
import Axios from "axios";
import Select from "react-select";

const Logo = styled.img`
  width: 100%;
  margin-bottom: 24px;
  margin-top: 24px;
`;

const Main = styled.div`
  background-color: #334c7b;
  width: 100vw;
  height: 100vh;
  padding-top: 100px;
  padding-bottom: 1000px;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 24rem;
`;

const Link = styled.a`
  font-size: 14px;
  width: fit-content;
  color: white;
  display: block;
  margin: 0 auto;
  margin-top: 16px;
`;

const Input = styled.input`
  color: white;
  font-size: 14px;
  font-family: sans-serif;
  width: 100%;
  border: none;
  border-bottom: 2px solid white;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 8px;
  appearance: none;
  background-color: transparent;
  margin-bottom: 16px;
`;

const SignUpBar = styled.div`
  color: white;
  width: fit-content;
  font-size: 14px;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 15px;
  display: block;
`;

const Button = styled.button`
  font-weight: 700;
  color: white;
  appearance: none;
  border: none;
  font-size: 16px;
  width: 100%;
  height: 40px;
  border-radius: 20px;
  background-color: #d03c42;
`;

const Header = styled.div`
  margin: 10px;
  padding: 15px;
  color: white;
  background-color: #d03c42;
  border-radius: 25px;
  font-weight: 700;
  font-size: 36px;
  text-align: center;
`;

const Title = styled.div`
  margin-top: 20px;
  color: white;
  border-radius: 25px;
  font-weight: 700;
  font-size: 18px;
`;

const optionsColors = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

const optionsRace = [
  { value: "api", label: "Asian / Pacific Islander" },
  { value: "baa", label: "Black or African American" },
  { value: "h", label: "Hispanic" },
  { value: "aian", label: "American Indian or Alaskan Native" },
  { value: "wc", label: "White / Caucasian" },
  { value: "o", label: "Other" }
];

const optionsGender = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "preferNot", label: "Prefer not to say" }
];

const optionsEducation = [
  { value: "noFormal", label: "No Formal Education" },
  { value: "highScool", label: "High School" },
  { value: "associate", label: "Associate Degree" },
  { value: "bachelors", label: "Bachelor's Degree" },
  { value: "masters", label: "Master's / Doctorate" },
  { value: "preferNot", label: "Prefer not to say" }
];

const optionsMarital = [
  { value: "api", label: "Single" },
  { value: "baa", label: "Married" },
  { value: "h", label: "Divorced" },
  { value: "preferNot", label: "Prefer not to say" }
];

const optionsIncome = [
  { value: "a", label: "<$20,000" },
  { value: "b", label: "$20,000 - $44,999" },
  { value: "c", label: "$45,000 - $139,999	" },
  { value: "d", label: ">$140,000" }
];

const optionsJobType = [
  { value: "a", label: "Accounting" },
  { value: "a", label: "Administrative/Clerical" },
  { value: "a", label: "Arts/Entertainment/Media" },
  { value: "a", label: "Automotive" },
  { value: "a", label: "Biotechnology" },
  { value: "a", label: "Business" },
  { value: "a", label: "Construction" },
  { value: "a", label: "Customer Service" },
  { value: "a", label: "Education" },
  { value: "a", label: "Engineering" },
  { value: "a", label: "Executive" },
  { value: "a", label: "Facilities" },
  { value: "a", label: "Financial Services" },
  { value: "a", label: "Government" },
  { value: "a", label: "Healthcare" },
  { value: "a", label: "Hospitality" },
  { value: "a", label: "Human Resources" },
  { value: "a", label: "Information Technology" },
  { value: "a", label: "Insurance" },
  { value: "a", label: "Law Enforcement" },
  { value: "a", label: "Legal" },
  { value: "a", label: "Manufacturing/Production" },
  { value: "a", label: "Marketing" },
  { value: "a", label: "Real Estate" },
  { value: "a", label: "Retail/Wholesale" },
  { value: "a", label: "Sales" },
  { value: "a", label: "Science" },
  { value: "a", label: "Telecommunications" },
  { value: "a", label: "Transportation/Warehouse" }
];

class MakeProfile extends Component {
  state = {
    email: "",
    password: "",
    passwordRepeat: ""
  };

  handleChangeEmail = event => {
    this.setState({ email: event.target.value });
  };

  handleChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  handleChangePasswordRepeat = event => {
    this.setState({ passwordRepeat: event.target.value });
  };

  /*handleSubmit = event => {
    event.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
      passwordRepeat: this.state.passwordRepeat
    };

    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };*/

  handleSubmit = event => {
    event.preventDefault();

    const email = {
      email: this.state.email
    };

    const password = {
      password: this.state.password
    };

    const passwordRepeat = {
      passwordRepeat: this.state.passwordRepeat
    };

    if (this.state.password != this.state.passwordRepeat) {
      alert("Passwords do not match");
      console.error(
        "An error occured while making the request: Passwords do not match"
      );
      //console.log(password);
      //console.log(passwordRepeat);
    } else {
      Axios.post(`/signup`, { email, password })
        .then(res => {
          console.log(email);
          console.log(password);
          // check status code

          res = { statusCode: 200 };

          // if successful re-route to profile
          if (res.data.statusCode === 200) {
            // *** remember to set status code in backend ***
            const parsedData = JSON.parse(res.data.body);
            this.props.history.push({
              pathname: "/profile",
              state: { data: parsedData }
            });
          } else {
            // if not successful, return alert
            alert("Validation error occurred. " + res.data.body);
            console.log("Error " + res.data.statusCode);
          }
        })
        .catch(err => {
          console.error("An error occured while making the request");
        });
    }
  };

  render() {
    return (
      <div>
        <Main>
          <Container>
            <Header>Profile Creation</Header>
            <form onSubmit={this.handleSubmit}>
              <Title>First Name</Title>
              <Input placeholder="" />

              <Title>Last Name</Title>
              <Input placeholder="" />

              <Title>Date of Birth</Title>
              <Input
                name="dob"
                placeholder="mm/dd/yyyy"
                required=""
                id="dob"
                type="date"
                class="is-touched is-pristine av-valid form-control"
              />

              <Title>Race</Title>
              <Select
                name=""
                options={optionsRace}
                className="basic-multi-select"
                classNamePrefix="select"
              />

              <Title>Gender</Title>
              <Select
                name=""
                options={optionsGender}
                className="basic-multi-select"
                classNamePrefix="select"
              />

              <Title>Education</Title>
              <Select
                name=""
                options={optionsEducation}
                className="basic-multi-select"
                classNamePrefix="select"
              />
              <Title>Number of Family Members</Title>
              <Input type="number" min="0" max="10" />

              <Title>Number of Children</Title>
              <Input type="number" min="0" max="10" />

              <Title>Marriage Status</Title>
              <Select
                name=""
                options={optionsMarital}
                className="basic-multi-select"
                classNamePrefix="select"
              />

              <Title>Income Range</Title>
              <Select
                name=""
                options={optionsIncome}
                className="basic-multi-select"
                classNamePrefix="select"
              />
              <Title>Job Type</Title>
              <CreatableSelect
                isMulti
                name=""
                options={optionsJobType}
                className="basic-multi-select"
                classNamePrefix="select"
              />
              <Title>Years in the US</Title>
              <Input type="number" min="0" max="60" />

              <Button type="submit">Sign Up</Button>
            </form>
          </Container>
        </Main>
      </div>
    );
  }
}

export default MakeProfile;
