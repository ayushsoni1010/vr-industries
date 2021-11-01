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
      <div className="product-card-specifications-wrapper">
        <div className="product-images-wrapper">
          <img src={__cardProperties.productImage} alt="ProductImage" />
        </div>
        <div className="product-card-content-wrapper">
          <div className="product-description-wrapper">
            <h1>PRODUCT DESCRIPTION :</h1>
            <p className="product-card-title">{__cardProperties.title}</p>
            <p className="product-card-content-description">
              {__cardProperties.description}
            </p>
          </div>
          <div className="product-description-wrapper">
            <h1>{__cardProperties.mainTitle}</h1>

            <ul>
              <li>
                <span>{__cardProperties.key1}</span> {__cardProperties.point1}
              </li>
              <li>
                <span>{__cardProperties.key2}</span>
                {__cardProperties.point2}
              </li>
              <li>
                <span>{__cardProperties.key3}</span>
                {__cardProperties.point3}
              </li>
              <li>
                <span>{__cardProperties.key4}</span>
                {__cardProperties.point4}
              </li>
              <li>
                <span>{__cardProperties.key5}</span>
                {__cardProperties.point5}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
