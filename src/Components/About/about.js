import React from "react";
import "./about.css";
import imageLayer from "./imageLayer.png";
import Resume from "./Portfolio.pdf";

const downloadCv = () => {
  window.location.href = { Resume };
};
export const About = () => {
  return (
    <div className="about">
      <div className="bgLayer">
        <div className="colorLayer"></div>
        <img className="imageLayer" src={imageLayer} alt="LayerImage" />
      </div>
      <div>
        <div className="aboutMe">
          <div className="aboutMeText">About Me</div>
          <div className="line"></div>
        </div>
        <p className="aboutText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum
          leo tellus, eget blandit urna consequat sit amet. Aenean tincidunt
          lacus eget purus dictum, congue imperdiet neque eleifend. Duis nulla
          mauris, volutpat ut placerat in, ornare quis lacus. In suscipit nunc
          dui, id aliquam turpis pharetra ve
        </p>
        <div className="button">
          <button className="hireMe">Hire Me</button>
          <button onClick={downloadCv} className="downloadCv">
            <a className="downloadcv" href={Resume} download="Resume.pdf">
              Download CV
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
