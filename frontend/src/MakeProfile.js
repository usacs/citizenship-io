import React, { Component } from "react";
import styled from "styled-components";
import CreatableSelect from "react-select/lib/Creatable";
import Axios from "axios";
import Select from "react-select";
import Cookies from "universal-cookie";
import { Link as L } from "react-router-dom";

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

/*const Link = styled.a`
  font-size: 14px;
  width: fit-content;
  color: white;
  display: block;
  margin: 0 auto;
  margin-top: 16px;
`;*/

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
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 15px;
  color: white;
  font-weight: 700;
  font-size: 48px;
  text-align: left;
`;

const Header2 = styled.div`
  padding-left: 30px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-top: 0px;
  color: white;
  font-weight: 700;
  font-size: 14px;
  text-align: left;
`;

const Bubble = styled.div`
  background-color: #d03c42;
  border-radius: 25px;
  padding-bottom: 50px;
  padding-top: 50px;
`;

const Title = styled.div`
  margin-top: 20px;
  color: white;
  border-radius: 25px;
  font-weight: 700;
  font-size: 18px;
`;

const Link = styled(L)`
  color: white;
`;

const optionsRace = [
  { value: 0, label: "Asian / Pacific Islander" },
  { value: 1, label: "Black or African American" },
  { value: 2, label: "Hispanic" },
  { value: 3, label: "American Indian or Alaskan Native" },
  { value: 4, label: "White / Caucasian" },
  { value: 5, label: "Other" }
];

const optionsGender = [
  { value: 0, label: "Male" },
  { value: 1, label: "Female" },
  { value: 2, label: "Prefer not to say" }
];

const optionsEducation = [
  { value: 0, label: "No Formal Education" },
  { value: 1, label: "High School" },
  { value: 2, label: "Associate Degree" },
  { value: 3, label: "Bachelor's Degree" },
  { value: 4, label: "Master's / Doctorate" },
  { value: 5, label: "Prefer not to say" }
];

const optionsMarital = [
  { value: 0, label: "Single" },
  { value: 1, label: "Married" },
  { value: 2, label: "Divorced" },
  { value: 3, label: "Prefer not to say" }
];

const optionsIncome = [
  { value: 0, label: "<$20,000" },
  { value: 1, label: "$20,000 - $44,999" },
  { value: 2, label: "$45,000 - $139,999	" },
  { value: 3, label: ">$140,000" }
];

const optionsJobType = [
  { value: 0, label: "Accounting" },
  { value: 1, label: "Administrative/Clerical" },
  { value: 2, label: "Arts/Entertainment/Media" },
  { value: 3, label: "Automotive" },
  { value: 4, label: "Biotechnology" },
  { value: 5, label: "Business" },
  { value: 6, label: "Construction" },
  { value: 7, label: "Customer Service" },
  { value: 8, label: "Education" },
  { value: 9, label: "Engineering" },
  { value: 10, label: "Executive" },
  { value: 11, label: "Facilities" },
  { value: 12, label: "Financial Services" },
  { value: 13, label: "Government" },
  { value: 14, label: "Healthcare" },
  { value: 15, label: "Hospitality" },
  { value: 16, label: "Human Resources" },
  { value: 17, label: "Information Technology" },
  { value: 18, label: "Insurance" },
  { value: 19, label: "Law Enforcement" },
  { value: 20, label: "Legal" },
  { value: 21, label: "Manufacturing/Production" },
  { value: 22, label: "Marketing" },
  { value: 23, label: "Real Estate" },
  { value: 24, label: "Retail/Wholesale" },
  { value: 25, label: "Sales" },
  { value: 26, label: "Science" },
  { value: 27, label: "Telecommunications" },
  { value: 28, label: "Transportation/Warehouse" }
];

class MakeProfile extends Component {
  state = {
    First_name: "",
    Last_name: "",
    Date_of_birth: "",
    Race: "",
    Gender: "",
    Education: "",
    Family_num: "",
    Child_num: "",
    Marriage_status: "",
    Income_range: "",
    Job_type: {},
    Years_in_us: ""
  };

  handleChangeFirstName = event => {
    this.setState({ First_name: event.target.value });
  };

  handleChangeLastName = event => {
    this.setState({ Last_name: event.target.value });
  };

  handleChangeDateOfBirth = event => {
    this.setState({ Date_of_birth: event.target.value });
  };

  handleChangeRace = event => {
    this.setState({ Race: event.label });
  };

  handleChangeGender = event => {
    this.setState({ Gender: event.label });
  };

  handleChangeEducation = event => {
    this.setState({ Education: event.label });
  };

  handleChangeFamilyNum = event => {
    this.setState({ Family_num: event.target.value });
  };

  handleChangeChildNum = event => {
    this.setState({ Child_num: event.target.value });
  };

  handleChangeMarriageStatus = event => {
    this.setState({ Marriage_status: event.label });
  };

  handleChangeIncomeRange = event => {
    this.setState({ Income_range: event.label });
  };

  handleChangeJobType = event => {
    var value = [];
    for (var i = 0, l = event.length; i < l; i++) {
      value.push(event[i].label);
    }
    this.setState({ Job_type: value });
  };

  handleChangeYearsInUS = event => {
    this.setState({ Years_in_us: event.target.value });
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

    console.log(this.state);
    console.log(optionsRace[this.state.Race]);

    const email = {
      email: this.state.email
    };

    const password = {
      password: this.state.password
    };

    const passwordRepeat = {
      passwordRepeat: this.state.passwordRepeat
    };

    const cookies = new Cookies();

    const body = {
      email: cookies.get("email")
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
            <Bubble>
              <Header>Profile Creation</Header>
              <Header2>Fill out the forms below to get started.</Header2>
            </Bubble>
            <form onSubmit={this.handleSubmit}>
              <Title>First Name</Title>
              <Input placeholder="" onChange={this.handleChangeFirstName} />

              <Title>Last Name</Title>
              <Input placeholder="" onChange={this.handleChangeLastName} />

              <Title>Date of Birth</Title>
              <Input
                name="dob"
                placeholder="mm/dd/yyyy"
                required=""
                id="dob"
                type="date"
                class="is-touched is-pristine av-valid form-control"
                onChange={this.handleChangeDateOfBirth}
              />

              <Title>Race</Title>
              <Select
                name=""
                options={optionsRace}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={this.handleChangeRace}
              />

              <Title>Gender</Title>
              <Select
                name=""
                options={optionsGender}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={this.handleChangeGender}
              />

              <Title>Education</Title>
              <Select
                name=""
                options={optionsEducation}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={this.handleChangeEducation}
              />
              <Title>Number of Family Members</Title>
              <Input
                type="number"
                min="0"
                max="10"
                onChange={this.handleChangeFamilyNum}
              />

              <Title>Number of Children</Title>
              <Input
                type="number"
                min="0"
                max="10"
                onChange={this.handleChangeChildNum}
              />

              <Title>Marriage Status</Title>
              <Select
                name=""
                options={optionsMarital}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={this.handleChangeMarriageStatus}
              />

              <Title>Income Range</Title>
              <Select
                name=""
                options={optionsIncome}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={this.handleChangeIncomeRange}
              />
              <Title>Job Type</Title>
              <CreatableSelect
                isMulti
                name=""
                options={optionsJobType}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={this.handleChangeJobType}
              />
              <Title>Years in the US</Title>
              <Input
                type="number"
                min="0"
                max="60"
                onChange={this.handleChangeYearsInUS}
              />
              <Link to="/homepage">
                <Button type="submit">Sign Up</Button>
              </Link>
            </form>
          </Container>
        </Main>
      </div>
    );
  }
}

export default MakeProfile;
