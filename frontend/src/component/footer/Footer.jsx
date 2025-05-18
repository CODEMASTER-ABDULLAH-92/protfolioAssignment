import React from "react";
import "./Footer.css";
import { assets } from "../../assets/asset";
const Footer = () => {
  return (
    <div className="footer" id="contact">
      <div className="footer-left">
        <div className="footer-logo">
          <img src={assets.logoDark} className="footer-logo" alt="" />
        </div>
        <h2 className="footer-left-heading">
          Learn about Web accessibility, Web performance, and Database
          management.
        </h2>
      </div>
      <div className="footer-Middle">
        <h2 className="footer-links-heading">Quick Links</h2>
        <a href="">Advertise with us</a>
        <a href="">Contact Us</a>
        <a href="">About Us</a>
      </div>
      <div className="footer-right">
        <h2 className="footer-links-heading">Legal Stuff</h2>
        <li>Privacy Notice</li>
        <li>Cookie Policy</li>
        <li>Terms Of Use</li>
      </div>
    </div>
  );
};

export default Footer;
