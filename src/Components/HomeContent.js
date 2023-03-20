import React from "react";
import "./homecontent.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const HomeContent = () => {
  return (
    <div className="content">
      <div className="content-container">
        <h1>
          <span>Mr.</span>Sathish Ram...
        </h1>
        <p>A Professional Web Developer</p>
        <a
          href="https://drive.google.com/file/d/1HEg-CD2FBsTo0KP8J2orpr5sp8-idGZR/view?usp=share_link"
          target="_blank"
          rel="noreferrer"
        >
          <button>Download CV</button>
        </a>
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
    </div>
  );
};

export default HomeContent;
