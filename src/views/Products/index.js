import React from "react";
import "./style.views.products.css";
import Cards from "../../components/widgets/Cards/ProductCard";
import dCut from "../../assets/dCut.jpeg";
import maskImage from "../../assets/maskImage.png";
import boxBags from "../../assets/boxBags.png";
import wCut from "../../assets/wCut.webp";

export default function Products() {
  return (
    <div className="products-section-wrapper">
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
          <Cards
            productImage={dCut}
            title="My Card"
            startIcon="fab fa-github"
            value="Read More"
          />
        </div>
        <div className="product-card-second-container">
          <Cards
            productImage={maskImage}
            title="Fabric Rolls"
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
    </div>
  );
}
