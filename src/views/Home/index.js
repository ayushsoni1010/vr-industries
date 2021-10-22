import React from "react";
import "./style.views.home.css";
import person from "../../assets/home-banner-rocket.png";
import Buttons from "../../components/widgets/Buttons";

export default function Home() {
  return (
    <div className="home-section-wrapper">
      <div className="home-section-content-wrapper">
        <div className="home-section-description-container">
          <p className="home-section-title">
            “VR Industries” are a Sole Proprietorship based firm
          </p>
          <p className="home-section-second-title">
            We engaged as the foremost Manufacturer of W Cut , D Cut , Box Bag ,
            Mask & Suppliers of Non Woven Fabrics.
          </p>
        </div>
        <div className="person">
          <img src={person} alt="person" />
        </div>
      </div>
      <div className="primary-button-pages-wrapper">
        <Buttons startIcon="fas fa-angle-double-right" value="Read More" />
        <Buttons startIcon="fas fa-angle-double-right" value="Contact Us" />
      </div>

      <div className="custom-wavy-shape-bottom">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="">

      </div>
    </div>
  );
}
