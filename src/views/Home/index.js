import React from "react";
import "./style.views.home.css";
import person from "../../assets/home-banner-rocket.png";
import Buttons from "../../components/widgets/Buttons";
import Cards from "../../components/widgets/Cards/ProductCard";
import dCut from "../../assets/dCut.jpeg";
import maskImageSE from "../../assets/maskImageSE.jpg";
import boxBags from "../../assets/boxBags.jpg";
import service from "../../assets/service.svg";
import wCut from "../../assets/wCut.webp";
import bgTop from '../../images/bg-section-top-desktop-1.svg'
import bgBottom from '../../images/bg-section-bottom-desktop-1.svg'
import productImageUp from "../../assets/productsImageUp.svg";
import productImageDown from "../../assets/productsImageDown.svg";
import WhyChososeUsCard from "../../components/widgets/Cards/WhyChooseUsCard";
import ServiceCard from "../../components/widgets/Cards/ServiceCard";

export default function Home() {
  // const breakpoints = [
  //   { width: 1, itemsToShow: 1 },
  //   { width: 1, itemsToShow: 1 },
  //   { width: 1, itemsToShow: 1 },
  //   { width: 1, itemsToShow: 1 },
  // ];
  return (
    <div className="home-section-wrapper">
      <div className="home-section-content-wrapper">
        <p className="home-section-title">
          “VR Industries” are a Sole Proprietorship based firm
        </p>
        <p className="home-section-second-title">
          We engaged as the foremost Manufacturer of W Cut , D Cut , Box Bag ,
          Mask & Suppliers of Non Woven Fabrics.
        </p>
        <p className="home-section-second-title">
          We are physically present in Industrial Area no. 1 , Dewas Madhya
          Pradesh
        </p>
        <p className="home-section-second-title">
          Our Production house covers an area of 12000 sq. ft.
        </p>
      </div>
      <div className="primary-button-pages-wrapper">
        <a href="/about">
          <Buttons startIcon="fas fa-angle-double-right" value="Read More" />
        </a>
        <a href="/contactus">
          <Buttons startIcon="fas fa-angle-double-right" value="Contact Us" />
        </a>
      </div>
      <div className="person">
        <img src={person} alt="rocket" />
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

      <div className="product-section-cards-wrapper">
        <p className="product-section-cards-title gradient-text">
          Our Products
        </p>
        <div className="product-card-first-container">
          <Cards
            productImage={wCut}
            title="W cut"
            startIcon="fas fa-chevron-circle-down"
            value="Read More"
          />
          <Cards
            productImage={dCut}
            title="D cut"
            startIcon="fas fa-chevron-circle-down"
            value="Read More"
          />
          <img src={productImageUp} alt="ProductsImage" />
        </div>
        <div className="product-card-second-container">
          <img src={productImageDown} alt="ProductsImage" />
          <Cards
            productImage={maskImageSE}
            title="Masks"
            startIcon="fas fa-chevron-circle-down"
            value="Read More"
          />
          <Cards
            productImage={boxBags}
            title="Box Bags"
            startIcon="fas fa-chevron-circle-down"
            value="Read More"
          />
        </div>
      </div>

      <div className="why-choose-us-section-wrapper">
        <p className="why-choose-us-section-title gradient-text">
          Why Choose Us
        </p>
        <div className="why-choose-us-cards-container">
          <WhyChososeUsCard
            mainIcon="fas fa-shopping-bag"
            title="Durable Bags"
            description="When contrasted with conventional shopping bags, these are dependable and can last up to 5 years."
          />
          <WhyChososeUsCard
            mainIcon="fas fa-calendar-check"
            title="Customized Solutions"
            description="Your goal is our challenge. Our solution is your success. A customized solution is one that is designed and developed"
          />
          <WhyChososeUsCard
            mainIcon="fas fa-recycle"
            title="Eco-Friendly Bags"
            description="Non-woven bags are 100% recyclable. It helps to keep our nature clean and green. You can wash them and use again."
          />
        </div>
      </div>
      <div className="service-section-cards-wrapper">
        <div className="bg-top">
          <img src={bgTop} alt="bgTop" />
        </div>
        <div className="service-section-content-container">
          <p className="service-section-title">Check our Services</p>
          <p className="service-section-main-content">
            Pleasure rationally encounter consequences that are painful. Nor
            again is there anyone who pursues
          </p>
        </div>
        <div className="service-container">
          <div className="left-side-cards-wrapper">
            <ServiceCard
              startIcon="fas fa-chart-pie"
              title="Digital Solution"
              description="Pleasure rationally service are anyone who pursues"
            />
            <ServiceCard
              startIcon="fas fa-clipboard-check"
              title="Business Plan"
              description="Pleasure rationally service are anyone who pursues"
            />
            <ServiceCard
              startIcon="fas fa-puzzle-piece"
              title="Creative Strategy"
              description="Pleasure rationally service are anyone who pursues"
            />
          </div>
          <div className="illustration-container">
            <img src={service} alt="Illustration" />
          </div>
          <div className="right-side-card-wrapper">
            <ServiceCard
              startIcon="fas fa-chess"
              title="Branding"
              description="Pleasure rationally service are anyone who pursues"
            />
            <ServiceCard
              startIcon="fas fa-business-time"
              title="Marketing Policy"
              description="Pleasure rationally service are anyone who pursues"
            />
            <ServiceCard
              startIcon="fas fa-podcast"
              title="Campaign & PR"
              description="Pleasure rationally service are anyone who pursues"
            />
          </div>
        </div>
        <div className="bg-bottom">
          <img src={bgBottom} alt="bgBottom" />
        </div>
      </div>
    </div>
  );
}
