import React from "react";
import { Element } from "react-scroll";
import HomeContent from "./HomeContent";
import "./home.css";

const Home = () => {
  return (
    <Element name="home" className="home-container">
      <HomeContent />
    </Element>
  );
};

export default Home;
