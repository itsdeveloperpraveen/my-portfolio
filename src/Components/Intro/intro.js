import React from "react";
import "./intro.css";
import image from"./image.png"

const Intro = () => {
  return (
    <div className="intro">
      <div className="textMessage">
        <span className="greeting">Hello Everyone.</span>
        <br />
        <h1 className="introduce">I'm Praveen</h1>
        <div className="MainDiv">
          <span className="content">WEB DEVELOPER</span>
          <span className="arrow">➜</span>
        </div>
      </div>
      <img className="image" src={image} />
    </div>
  );
};

export default Intro;
