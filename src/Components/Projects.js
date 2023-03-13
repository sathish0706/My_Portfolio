import React, { useState } from "react";
import "./project.css";

const Projects = ({ link, title, img, flink, blink, desc }) => {
  //   const [show, setShow] = useState(false);
  return (
    <div className="projects">
      <div className="body">
        <h1>{title}</h1>
        <a href={link} target="_blank">
          <img src={img} alt="Loading" className="img" />
          <p>{desc}</p>
        </a>
        <div className="links">
          <a href={link} target="_blank">
            Live
          </a>
          <a href={flink} target="_blank">
            Frontend
          </a>
          <a href={blink} target="_blank">
            Backend
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
