import React from "react";
import "./style.views.products.css";
import Cards from "../../components/widgets/Cards/ProductCard";
import dCut from "../../assets/dCut.jpeg";
import maskImage from "../../assets/maskImage.jpg";
import fabricRolls from "../../assets/fabricRolls.jpg";
import loop from "../../assets/loop.jpg";
import boxBags from "../../assets/boxBags.jpg";
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
            description="As the name suggests, W cut bags are the bags where the handle is cut in the form of W/U . Such bags can be produced on W cut non woven bag making machine which can produce only a gusset which can be further cut to make desired W/U cut non woven bags."
            mainTitle=" PRODUCT SPECIFICATIONS :"
            key1="• Sizes :"
            key2="• Material :"
            key3="• Style :"
            key4="• Thickness :"
            key5="• Color :"
            point1=" 8*10 , 9*12 , 11*14 , 13*16 , 16*20 ,  20*26 , 20*20 , 16*16 "
            point2=" Non Woven PP"
            point3=" W Cut"
            point4=" 16GSM - 55GSM and can be customized"
            point5=" Customized"
          />
          <Cards
            productImage={dCut}
            title="D cut"
            description="D cut bags are the bags where a D shaped hole is made in the middle top of the bag to hold the bag . Such bags can be produced on D Cut Non woven bag making machine which can produce both D cut and W cut type of Non woven bags. D cut bag is always produced in a single line. W cut bag gusset can be produced in 2 or 3 lines together at same time thereby increasing the production rate to 2x and 3x respectively."
            mainTitle=" PRODUCT SPECIFICATIONS :"
            key1="• Sizes :"
            key2="• Material :"
            key3="• Style :"
            key4="• Thickness :"
            key5="• Color :"
            point1=" 9*12 , 10*14 , 12*16 , 14*19 , 16*21"
            point2=" Non Woven PP"
            point3=" D Cut"
            point4=" 40GSM - 60GSM and can be customized"
            point5=" Customized"
          />
          <Cards
            productImage={loop}
            title="Loop Handle"
            description="Loop handle bags are bags in which the loop is stuck on top to hold the bag easily . Such bags are made on D cut bag Making Machine (without D cut punch) and then the loop is ultrasonic sealed on top with the help of Loop Making."
            mainTitle=" PRODUCT SPECIFICATIONS :"
            key1="• Sizes :"
            key2="• Material :"
            key3="• Style :"
            key4="• Thickness :"
            key5="• Color :"
            point1=" 10*14 , 12*18 , 13*18 , 14*20 , 16*22"
            point2=" Non Woven PP"
            point3=" Loop Handle"
            point4=" 40GSM - 60GSM and can be customized"
            point5=" Customized"
          />

          <Cards
            productImage={boxBags}
            title="Box Bags"
            description="Box shaped non woven bags are a great alternative of paper bags. Box shaped non woven bags are a great alternative of paper bags. Paper bags have less life and get damaged due to water. "
            mainTitle=" PRODUCT SPECIFICATIONS :"
            key1="• Sizes :"
            key2="• Material :"
            key3="• Style :"
            key4="• Thickness :"
            key5="• Color :"
            point1=" Customized"
            point2=" Non Woven PP"
            point3=" Box Bags"
            point4=" 50GSM to 120GSM and can be customized"
            point5=" Customized"
          />
          <Cards
            productImage={maskImage}
            title="Masks"
            description="Masks can be made from a variety of fabrics and many types of cloth masks are available. Disposable face masks are widely available. They are sometimes referred to as surgical masks or medical procedure masks. A proper fit over your nose and mouth to prevent leaks."
          />
          <Cards
            productImage={fabricRolls}
            title="Fabric Rolls"
            description="Well known for its remarkable features, this non woven roll is extensively used for making disposable bags. Non woven roll is made from the best in class fibers. Application of Non-woven fabric:  Medical disposable, Health & Hygiene, Packaging, Mattress & Furniture, Agriculture, Filtration, Protective Clothing, and Construction"
            mainTitle=" PRODUCT SPECIFICATIONS :"
            key1="• Sizes :"
            key2="• Material :"
            key3="• Style :"
            key4="• Thickness :"
            key5="• Color :"
            point1=" 19” , 23” , 27” , 33” , 34” , 37” , 42” ,  44” , 48” , 63” & Customized"
            point2=" Non Woven PP  Fabric"
            point3=" Fabric Rolls"
            point4=" Upto 126 Metres"
            point5=" Customized"
          />
        </div>
      </div>
    </div>
  );
}
