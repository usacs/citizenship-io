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
  height: 600px;
`;

/*const Revolutionary = styled.div`
  background: url("Related_Resources/Revolutionary.jpg") no-repeat center;
  background-size: cover;
  background-attachment: fixed;
  height: 500px;
`;*/

/*const Duolingo = styled.div`
  background: url("Related_Resources/Duolingo.jpg") no-repeat center;
  background-size: cover;
  background-attachment: fixed;
  height: 500px;
`;*/

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

          <h2>
            <u>Mission</u>
          </h2>

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
            <span>Amulya</span>
            <Overlay className="overlay overlayLeft">
              <MemberRole>Amulya Leader</MemberRole>
            </Overlay>
          </Slider>

          <Slider>
            <Img src="Citizenship-io_Members/Rishab.jpg" />
            <span>Rishab</span>
            <Overlay className="overlay overlayLeft">
              <MemberRole>Rishab Leader</MemberRole>
            </Overlay>
          </Slider>

          <Slider>
            <Img src="Citizenship-io_Members/Hari.jpg" />
            <span>Hari</span>
            <Overlay className="overlay overlayLeft">
              <MemberRole>Hari</MemberRole>
            </Overlay>
          </Slider>

          <Slider>
            <Img src="Citizenship-io_Members/Srihari.jpg" />
            <span>Srihari</span>
            <Overlay className="overlay overlayLeft">
              <MemberRole>Srihari</MemberRole>
            </Overlay>
          </Slider>

          <Slider>
            <Img src="Citizenship-io_Members/Adirupa.jpg" />
            <span>Adirupa</span>
            <Overlay className="overlay overlayLeft">
              <MemberRole>Adirupa</MemberRole>
            </Overlay>
          </Slider>

          <Slider>
            <Img src="Citizenship-io_Members/Aditya.jpg" />
            <span>Aditya</span>
            <Overlay className="overlay overlayLeft">
              <MemberRole>Aditya</MemberRole>
            </Overlay>
          </Slider>

          <Slider>
            <Img src="Citizenship-io_Members/Akshay.jpg" />
            <span>Akshay</span>
            <Overlay className="overlay overlayLeft">
              <MemberRole>Akshay</MemberRole>
            </Overlay>
          </Slider>

          <Slider>
            <Img src="Citizenship-io_Members/Amber.jpg" />
            <span>Amber</span>
            <Overlay className="overlay overlayLeft">
              <MemberRole>Amber</MemberRole>
            </Overlay>
          </Slider>

          <Slider>
            <Img src="Citizenship-io_Members/Basim.jpg" />
            <span>Basim</span>
            <Overlay className="overlay overlayLeft">
              <MemberRole>Basim</MemberRole>
            </Overlay>
          </Slider>

          <Slider>
            <Img src="Citizenship-io_Members/Clarissa.jpg" />
            <span>Clarissa</span>
            <Overlay className="overlay overlayLeft">
              <MemberRole>Clarissa</MemberRole>
            </Overlay>
          </Slider>

          <Slider>
            <Img src="Citizenship-io_Members/Ethan.jpg" />
            <span>Ethan</span>
            <Overlay className="overlay overlayLeft">
              <MemberRole>Ethan</MemberRole>
            </Overlay>
          </Slider>

          <Slider>
            <Img src="Citizenship-io_Members/Johnathan.jpg" />
            <span>Johnathan</span>
            <Overlay className="overlay overlayLeft">
              <MemberRole>Johnathan</MemberRole>
            </Overlay>
          </Slider>

          <Slider>
            <Img src="Citizenship-io_Members/Kaan.jpg" />
            <span>Kaan</span>
            <Overlay className="overlay overlayLeft">
              <MemberRole>Kaan</MemberRole>
            </Overlay>
          </Slider>

          <Slider>
            <Img src="Citizenship-io_Members/Kevin.jpg" />
            <span>Kevin</span>
            <Overlay className="overlay overlayLeft">
              <MemberRole>Kevin</MemberRole>
            </Overlay>
          </Slider>

          <Slider>
            <Img src="Citizenship-io_Members/Mahwish.jpg" />
            <span>Mahwish</span>
            <Overlay className="overlay overlayLeft">
              <MemberRole>Mahwish</MemberRole>
            </Overlay>
          </Slider>

          <Slider>
            <Img src="Citizenship-io_Members/Michael.jpg" />
            <span>Michael</span>
            <Overlay className="overlay overlayLeft">
              <MemberRole>Michael</MemberRole>
            </Overlay>
          </Slider>

          <Slider>
            <Img src="Citizenship-io_Members/Sam.jpg" />
            <span>Sam</span>
            <Overlay className="overlay overlayLeft">
              <MemberRole>Sam</MemberRole>
            </Overlay>
          </Slider>

          <Slider>
            <Img src="Citizenship-io_Members/Sriya.jpg" />
            <span>Sriya</span>
            <Overlay className="overlay overlayLeft">
              <MemberRole>Sriya</MemberRole>
            </Overlay>
          </Slider>

          <Slider>
            <Img src="Citizenship-io_Members/Wingjun.jpg" />
            <span>Wingjun</span>
            <Overlay className="overlay overlayLeft">
              <MemberRole>Wingjun</MemberRole>
            </Overlay>
          </Slider>

          <Slider>
            <Img src="Citizenship-io_Members/Xiwen.jpg" />
            <span>Xiwen</span>
            <Overlay className="overlay overlayLeft">
              <MemberRole>Xiwen</MemberRole>
            </Overlay>
          </Slider>
        </Main>
      </div>
    );
  }
}

export default AboutUs;
