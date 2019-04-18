import React from "react";
import { Component } from "react";
import styled from "styled-components";

const Main = styled.div`
  background: linear-gradient(to right, #0575e6, #021b79);
  width: 100%;
  height: 100%;
  text-align: center;
  color: white;
  font-size: 34px;
`;

const LogoBackground = styled.div`
  background: url("Related_Resources/Banner.png") no-repeat center;
  background-size: cover;
  background-attachment: fixed;
  height: 700px;
`;

const Revolutionary = styled.img`
  height: 400px;
  width: 1000px;
  border-radius: 50px;
`;

const Duolingo = styled.img`
  height: 400px;
  border-radius: 50px;
`;

const Img = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  display: block;
`;

const Overlay = styled.div`
  position: absolute;
  transition: all 0.3s ease;
  opacity: 0;
  background-color: #8b0000;
  height: 100%;
  width: 0;
  top: 0;
  left: 0;
  border-radius: 50%;
  &:.overlayleft {
    height: 100%;
    width: 0;
    top: 0;
    left: 0;
  }
`;

const Slider = styled.div`
  position: relative;
  width: 200px;
  height 200px;
  margin: 30px;
  display: inline-block;
  &:hover{
    .overlay{
      opacity:1;
    }
  }
  &:hover{
    .overlayLeft{
      width:100%;
    }
  }

`;

const MemberRole = styled.div`
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
`;

const Heading = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 0;
  left: 0;
`;
export class AboutUs extends Component {
  render() {
    return (
      <div>
        <Main>
          <LogoBackground />

          <h1>
            <u>What is Citizenship.io?</u>
          </h1>

          <p>
            Citizenship.io is a tool that people of the New <br />
            Brunswick population can use to prepare
            <br />
            for the citizenship test. (A bunch of other stuff).
          </p>

          <h1>
            <u>Mission</u>
          </h1>

          <p>
            Increase the passing rate of the Hispanic
            <br />
            population in New Brunswick by creating
            <br /> a virtual application
          </p>

          <h1>
            <u>Who we are</u>
          </h1>

          <Slider>
            <Img src="Citizenship-io_Members/Amulya.jpg" />
            <span>Amulya Mummaneni</span>
            <Overlay className="overlay overlayLeft">
              <a href="https://www.linkedin.com/in/amulyamummaneni/">
                <MemberRole>
                  https://www.linkedin
                  <br />
                  .com/in/
                  <br />
                  amulyamummaneni/
                </MemberRole>
              </a>
            </Overlay>
          </Slider>

          <Slider>
            <Img src="Citizenship-io_Members/Rishab.jpg" />
            <span>Rishab Chawla</span>
            <Overlay className="overlay overlayLeft">
              <a href="https://www.linkedin.com/in/rishab-chawla/">
                <MemberRole>
                  https://www.linkedin
                  <br />
                  .com/in/
                  <br />
                  rishab-chawla/
                </MemberRole>
              </a>
            </Overlay>
          </Slider>

          <Slider>
            <Img src="Citizenship-io_Members/Srihari.jpg" />
            <span>Srihari Shankar</span>
            <Overlay className="overlay overlayLeft">
              <a href="https://www.linkedin.com/in/srihari-shankar-a45029134/">
                <MemberRole>
                  https://www.linkedin
                  <br />
                  .com/in/
                  <br />
                  srihari-shankar-a45029134/
                </MemberRole>
              </a>
            </Overlay>
          </Slider>

          <Slider>
            <Img src="Citizenship-io_Members/Akshay.jpg" />
            <span>Akshay Sapra</span>
            <Overlay className="overlay overlayLeft">
              <MemberRole>Akshay</MemberRole>
            </Overlay>
          </Slider>

          <Slider>
            <Img src="Citizenship-io_Members/Amber.jpg" />
            <span>Amber Rawson</span>
            <Overlay className="overlay overlayLeft">
              <a href="https://www.linkedin.com/in/amberrawson/">
                <MemberRole>
                  https://www.linkedin
                  <br />
                  .com/in/
                  <br />
                  amberrawson/
                </MemberRole>
              </a>
            </Overlay>
          </Slider>

          <Slider>
            <Img src="Citizenship-io_Members/Basim.jpg" />
            <span>
              Basim <br />
              Jaffer
            </span>
            <Overlay className="overlay overlayLeft">
              <a href="https://www.linkedin.com/in/basim-j-372728b1/">
                <MemberRole>
                  https://www.linkedin
                  <br />
                  .com/in/
                  <br />
                  basim-j-372728b1/
                </MemberRole>
              </a>
            </Overlay>
          </Slider>

          <Slider>
            <Img src="Citizenship-io_Members/Ethan.jpg" />
            <span>Ethan Febinger</span>
            <Overlay className="overlay overlayLeft">
              <a href="https://www.linkedin.com/in/ethan-febinger-400a27176/">
                <MemberRole>
                  https://www.linkedin
                  <br />
                  .com/in/
                  <br />
                  ethan-febinger-400a27176/
                </MemberRole>
              </a>
            </Overlay>
          </Slider>

          <Slider>
            <Img src="Citizenship-io_Members/Kevin.jpg" />
            <span>
              Kevin <br />
              Wu
            </span>
            <Overlay className="overlay overlayLeft">
              <MemberRole>Kevin</MemberRole>
            </Overlay>
          </Slider>

          <Slider>
            <Img src="Citizenship-io_Members/Michael.jpg" />
            <span>
              Michael <br />
              Seo
            </span>
            <Overlay className="overlay overlayLeft">
              <a href="https://www.linkedin.com/in/michael-seo-635753172/">
                <MemberRole>
                  https://www.linkedin
                  <br />
                  .com/in/
                  <br />
                  michael-seo-635753172/
                </MemberRole>
              </a>
            </Overlay>
          </Slider>

          <Slider>
            <Img src="Citizenship-io_Members/Sam.jpg" />
            <span>
              Sam
              <br />
              Olagun
            </span>
            <Overlay className="overlay overlayLeft">
              <a href="https://www.linkedin.com/in/sam-olagun/">
                <MemberRole>
                  https://www.linkedin
                  <br />
                  .com/in/
                  <br />
                  sam-olagun/
                </MemberRole>
              </a>
            </Overlay>
          </Slider>

          <Slider>
            <Img src="Citizenship-io_Members/Wingjun.jpg" />
            <span>Wingjun Chan</span>
            <Overlay className="overlay overlayLeft">
              <MemberRole>Wingjun</MemberRole>
            </Overlay>
          </Slider>

          <Slider>
            <Img src="Citizenship-io_Members/Xiwen.jpg" />
            <span>
              Xiwen
              <br />
              Shen
            </span>
            <Overlay className="overlay overlayLeft">
              <MemberRole>Xiwen</MemberRole>
            </Overlay>
          </Slider>

          <h1>Related Resources</h1>

          <a href="https://www.duolingo.com/">
            <Duolingo src="Related_Resources/Duolingo.jpg" />
          </a>

          <a href="http://eagleton.rutgers.edu/?fbclid=IwAR36HcV58Gf1QfiIpCEUImrtM1hwh_vSdnWSOf9gDT9Ni-OvdvNNxS5s5sI">
            <Revolutionary src="Related_Resources/Revolutionary.jpg" />
          </a>
        </Main>
      </div>
    );
  }
}

export default AboutUs;
