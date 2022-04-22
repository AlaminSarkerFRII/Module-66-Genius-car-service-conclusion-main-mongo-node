import React from "react";
import "./Footer.css";
import facebookLogo from "../../../imgs/facebook.png";
import whatsAppLogo from "../../../imgs/whatsApp.png";
import linkdinLogo from "../../../imgs/linkedIn_PNG38.png";

const Footer = () => {
  return (
    <footer className="d-flex justify-content-center align-items-center bg-dark py-4 text-white text-center">
      <div className="d-flex">
        <h2>
          All Reserved by <span className="text-info">Genius Car Service</span>
        </h2>
      </div>
      <div id="img-container" className="d-flex px-5">
        <img src={facebookLogo} alt="" />
        <img src={whatsAppLogo} alt="" />
        <img src={linkdinLogo} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
