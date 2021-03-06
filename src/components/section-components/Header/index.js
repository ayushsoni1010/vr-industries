import React, { useState } from "react";
import "./style.header.css";
import logo from "../../../assets/logo.png";
import headerDetails from "./__headerOptions.json";

export default function Header() {
  const [headerOption] = useState(headerDetails);
  return (
    <header className="header-section-wrapper">
      <a href="/" className="logo-wrapper">
        <img src={logo} alt="VR-Industries Logo" className="header-logo-image"/>
        {/* <p className="">VR Industries</p> */}
      </a>
      <div className="header-options-wrapper">
        {headerOption.map((data, index) => (
          <li key={index} className="header-options-link">
            <a href={data.path}>{data.title}</a>
          </li>
        ))}
      </div>
    </header>
  );
}

// Home
// About
// Services
// Contact

// vrinddewas@gmail.com
// +91 70494 93600
// +91 91656 90656

// rgb(237,47,89)
