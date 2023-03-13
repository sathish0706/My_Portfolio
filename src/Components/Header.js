import React from "react";
import "./header.css";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="header">
      <div className="header-1">
        <h1>
          Develo<span>per</span>
        </h1>
      </div>
      <div className="header-2">
        <Link to="home" smooth={true} duration={500}>
          <h4>Home</h4>
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          <h4>Skills</h4>
        </Link>
        <Link to="interests" smooth={true} duration={500}>
          <h4>Interests</h4>
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          <h4>Projects</h4>
        </Link>

        <Link to="contacts" smooth={true} duration={500}>
          <h4>Contact</h4>
        </Link>
      </div>
    </div>
  );
};

export default Header;
