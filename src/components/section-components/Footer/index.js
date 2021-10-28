import React, { useState } from "react";
import "./style.footer.css";
import logo from "../../../assets/logo.png";
import footerOptions from "./__footerOptions.json";
import footerSocialDetails from "./__footerLinksDetails.json";

export default function Footer() {
  const [footerDetails] = useState(footerOptions);
  const [footerSocialLinks] = useState(footerSocialDetails);
  return (
    <div className="footer-section-wrapper">
      <div className="footer-section-container">
        <div className="footer-section-logo-wrapper">
          <a href="/">
            <img
              src={logo}
              alt="CompanyLogo"
              className="footer-section-company-logo"
            />
          </a>
        </div>
        <div className="footer-section-useful-links-wrapper">
          <p className="footer-section-title">Useful Links</p>
          {footerDetails.map((data, index) => (
            <li
              className="footer-section-useful-links-footer-options"
              key={index}
            >
              <a href={data.link}>{data.title}</a>
            </li>
          ))}
        </div>
        <div className="footer-section-connect-with-us">
          <p className="footer-section-title">Connect with us</p>
          <p className="footer-connect-with-us-description">
            If you have any questions. Don't miss out your problem. Stay get in
            touch.
          </p>
          <div className="footer-section-email-service">
            <input type="text" placeholder="Enter your message" />
            <button type="submit" className="submit-btn-footer">
              <i className="fab fa-telegram-plane"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="footer-downward-section-wrapper">
        <div className="footer-section-social-links-wrapper">
          {footerSocialLinks.map((data, index) => (
            <a href={data.link} target="_blank" rel="noreferrer" key={index}>
              <button>
                <i className={data.startIcon}></i>
              </button>
            </a>
          ))}
        </div>
        <div className="copyright-section-wrapper">
          <p className="copyright-description">
            {"Copyright @"+ new Date().getFullYear()}
          </p>
          <p>| All Rights Reserved</p>
        </div>
        <div className="privacy-terms-and-conditions-wrapper">
          <p>Privacy</p>
          <p>Terms and Condtions</p>
        </div>
      </div>
    </div>
  );
}
