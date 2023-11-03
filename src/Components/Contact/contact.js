import React from "react";
import "./contact.css";
import imageLayer from "./contact.jpg";

const Contact = () => {
  return (
    <div className="contact">
      <div className="">
        <div className="contactColorLayer"></div>
        <img className="contactImage" src={imageLayer} alt="LayerImage" />
      </div>
      <div>
        <div className="contactMe">
          <div className="contactMeText">Contact Details</div>
          <div className="contactLine"></div>
        </div>
        <div className="contactDetails">
          <span className="contactDetail">Email: </span>
          praveeprajapati1416@gmail.com
          <br />
          <br />
          <span className="contactDetail">Phone: </span>+91-9026930774
          <br />
          <br />
          <span className="contactDetail">Address: </span>Pakraul Azamgarh Uttar
          Pradesh 223224
        </div>
      </div>
    </div>
  );
};

export default Contact;
