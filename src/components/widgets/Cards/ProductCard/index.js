import React from "react";
import "./style.cards.productCard.css";
import Buttons from "../../Buttons";

export default function Cards(__cardProperties) {
  if (!__cardProperties.description) {
    return (
      <div className="product-card-wrapper">
        <img src={__cardProperties.productImage} alt="ProductImage" />
        <p className="product-card-title ">{__cardProperties.title}</p>
        <a href="/products">
          <Buttons
            startIcon={__cardProperties.startIcon}
            value={__cardProperties.value}
          />
        </a>
      </div>
    );
  } else {
    return (
      <div className="produc-card-wrapper">
        <img src={__cardProperties.productImage} alt="ProductImage" />
        <p className="product-card-title">{__cardProperties.title}</p>
        <p className="product-card-content-description">
          {__cardProperties.description}
        </p>
      </div>
    );
  }
}
