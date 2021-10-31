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
        <div className="product-card-first-wrapper">
          <Cards
            productImage={wCut}
            title="W cut"
            description="Pleasure rationally encounter are extremely painful anyone who loves or pursuesPleasure rationally encounter are extremely painful anyone who loves or pursuesPleasure rationally encounter are extremely painful anyone who loves or pursuesPleasure rationally encounter are extremely painful anyone who loves or pursues"
            key1="Sizes :"
            key2="Material :"
            key3="Style :"
            key4="Thickness :"
            key5="Color :"
            point1=""
            point2=""
            point3=""
            point4=""
            point5=""
          />
          <Cards
            productImage={dCut}
            title="D cut"
            description="Pleasure rationally encounter are extremely painful anyone who loves or pursuesPleasure rationally encounter are extremely painful anyone who loves or pursuesPleasure rationally encounter are extremely painful anyone who loves or pursuesPleasure rationally encounter are extremely painful anyone who loves or pursues"
            key1="Sizes :"
            key2="Material :"
            key3="Style :"
            key4="Thickness :"
            key5="Color :"
            point1=""
            point2=""
            point3=""
            point4=""
            point5=""
          />
          <Cards
            productImage={maskImage}
            title="Masks"
            description="Pleasure rationally encounter are extremely painful anyone who loves or pursuesPleasure rationally encounter are extremely painful anyone who loves or pursuesPleasure rationally encounter are extremely painful anyone who loves or pursuesPleasure rationally encounter are extremely painful anyone who loves or pursues"
            key1="Sizes :"
            key2="Material :"
            key3="Style :"
            key4="Thickness :"
            key5="Color :"
            point1=""
            point2=""
            point3=""
            point4=""
            point5=""
          />
          <Cards
            productImage={boxBags}
            title="Box Bags"
            description="Pleasure rationally encounter are extremely painful anyone who loves or pursuesPleasure rationally encounter are extremely painful anyone who loves or pursuesPleasure rationally encounter are extremely painful anyone who loves or pursuesPleasure rationally encounter are extremely painful anyone who loves or pursues"
            key1="Sizes :"
            key2="Material :"
            key3="Style :"
            key4="Thickness :"
            key5="Color :"
            point1=""
            point2=""
            point3=""
            point4=""
            point5=""
          />
          <Cards
            productImage={boxBags}
            title="Box Bags"
            description="Pleasure rationally encounter are extremely painful anyone who loves or pursuesPleasure rationally encounter are extremely painful anyone who loves or pursuesPleasure rationally encounter are extremely painful anyone who loves or pursuesPleasure rationally encounter are extremely painful anyone who loves or pursues"
            key1="Sizes :"
            key2="Material :"
            key3="Style :"
            key4="Thickness :"
            key5="Color :"
            point1=""
            point2=""
            point3=""
            point4=""
            point5=""
          />
        </div>
      </div>
    </div>
  );
}
