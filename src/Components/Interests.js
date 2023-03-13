import React from "react";
import { Element } from "react-scroll";
import "./interests.css";

function Interests() {
  return (
    <Element name="interests" className="interests-container">
      <p className="interest-content">
        <h1 className="interests">Interests </h1>
        <br />
        Apart from being a web developer, I enjoy most of my time being
        outdoors. I am an cricketer. During the warmer months here in Colorado,
        I enjoy reading books, i enjoy in traveling, and etc.
      </p>
      <p className="interest-content1">
        When forced indoors, I follow a number of sci-fi and fantasy genre
        movies and television shows, I am an aspiring in cooking, and I spend a
        large amount of my free time exploring the latest technology
        advancements in the front-end web development world.
      </p>
    </Element>
  );
}
export default Interests;
