import React from "react";
import "./style.views.products.css";
import Cards from "../../components/widgets/Cards/ProductCard";
import image from '../../assets/logo.png';

export default function Products() {
  return (
    <div className="products-section-wrapper">
      <div className="product-section-cards-wrapper">
        <p className="product-section-cards-title gradient-text">
          Our Products
        </p>
        <div className="product-card-first-container">
          <Cards
            productImage={image}
            title="My Card"
            startIcon="fab fa-github"
            value="Read More"
          />
          <Cards
            productImage={image}
            title="My Card"
            startIcon="fab fa-github"
            value="Read More"
          />
          <Cards
            productImage={image}
            title="My Card"
            startIcon="fab fa-github"
            value="Read More"
          />
        </div>
        <div className="product-card-second-container">
          <Cards
            productImage={image}
            title="My Card"
            startIcon="fab fa-github"
            value="Read More"
          />
          <Cards
            productImage={image}
            title="My Card"
            startIcon="fab fa-github"
            value="Read More"
          />
          <Cards
            productImage={image}
            title="My Card"
            startIcon="fab fa-github"
            value="Read More"
          />
        </div>
      </div>
    </div>
  );
}
