import React from "react";
import "./navbar.css";
import EmailPhoto from "./mail.png";
import CallPhoto from "./callIcon.png";
import logo from "./logo.png";

function sendEmail() {
  window.open(
    "https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsmFRQHZGrNBtDWmXSndWbnFrMWRHQvhDLBdJCSmmpvrNNHNKcwxqzlKPkRnGMhDWCXKpJLG"
  );
}
function makeCall() {
  alert("Phone Number: +91-9026930774");
}

const Navbar = () => {
  return (
    <nav className="navbar ">
      <ul>
        <li>
          <a href="#">
            <img className="logoImage" src={logo} />
          </a>
        </li>
      </ul>
      <ul className="nav">
        <li>
          <span className="Home">HOME</span>
        </li>
        <li>
          <span className="About">ABOUT</span>
        </li>
        <li>
          <span className="Projects">PROJECTS</span>
        </li>
      </ul>
      <ul className="Contacts">
        <li>
          <span>CONTACT ME</span>
        </li>
        <li>
          <img
            className="img"
            onClick={sendEmail}
            src={EmailPhoto}
            alt="Email"
          />
        </li>
        <li>
          <img className="img" onClick={makeCall} src={CallPhoto} alt="Call" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
