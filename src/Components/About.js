import React from "react";
import { Element } from "react-scroll";
import "./about.css";
// import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import InstagramIcon from "@mui/icons-material/Instagram";

const About = () => {
  return (
    <Element name="contacts" className="container">
      <div className="txt-container">
        <h1 className="typed">Iam Sathish</h1>
        <br />
        <div className="about-details">
          <div>Address :</div>
          <div className="typed">
            2/101, North street, Melamathur,
            <div>
              Keelamathur post, Sirkali Tk,
              <div>Mayiladudurai Dt, 609116</div>
            </div>
          </div>
          <br />
          <div className="typed">Phone No: </div>
          <div className="typed">6380819767</div>
          <br />
          <div className="typed">Email :</div>
          <div className="typed">Sathishramalingam06@gmail.com</div>
          <br />
        </div>

        <div className="icons">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/sathish0706"
          >
            <GitHubIcon
              className="icon2"
              sx={{ fontSize: 62, marginLeft: 4, color: "black" }}
            />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/sathish-r-679a1a222/"
          >
            <LinkedInIcon
              className="icon3"
              sx={{ fontSize: 62, marginLeft: 4 }}
            />
          </a>
        </div>
      </div>
    </Element>
  );
};

export default About;
