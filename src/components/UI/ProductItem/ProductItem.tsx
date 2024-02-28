import React from "react";
import Styles from "./ProductItem.module.css";
import { Link } from "react-router-dom";
import favIconOutline from "./../../../assets/icons/heart-outline.svg";
import favIconFill from "./../../../assets/icons/heart.svg";
import addIcon from "./../../../assets/icons/add-outline.svg";
import productImageTest from "./../../../assets/image/keyboards/NuPhy Gem80-MysticIndigox.webp";
import StarsBar from "../StarsBar/StarsBar";

function ProductItem() {
  return (
    <div className={Styles.productItem}>
      <Link to="#">
        <div className={Styles.productItem__action}>
          <button>
            <img src={favIconOutline} alt="" />
          </button>
          <button>
            <img src={addIcon} alt="" />
          </button>
        </div>
        <div className={Styles.productItem__colors}>
          <span className={Styles.colors__block} style={{ backgroundColor: "#edae00" }}></span>
          <span className={Styles.colors__block} style={{ backgroundColor: "#00deb0" }}></span>
          <span className={Styles.colors__block} style={{ backgroundColor: "#fa5838" }}></span>
        </div>
        <div className={Styles.productItem__header}>
          <img src={productImageTest} alt="" />
        </div>
        <div className={Styles.productItem__footer}>
          <h2>Product Name</h2>
          <p>QMK/VIA Wireless Custom Mechanical Keyboard</p>
          <StarsBar />
          <span>$100.95</span>
        </div>
      </Link>
    </div>
  );
}

export default ProductItem;
