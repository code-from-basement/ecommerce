import React from "react";
import Styles from "./ProductPageHeader.module.css";
import arrowIcon from "./../../../assets/icons/chevron-down-outline.svg";

function ProductPageHeader() {
  return (
    <div className={Styles.productPageHeader}>
      <h1>14 Products</h1>
      <div className={Styles.sortBy}>
        <img src={arrowIcon} alt="" />
        <select name="sort" id="sort">
          <option value="featured">Featured</option>
          <option value="newest">Newest</option>
          <option value="price">Price: Lower to Higher</option>
          <option value="price">Price: Higher to Lower</option>
          <option value="popularity">Popularity</option>
        </select>
      </div>
    </div>
  );
}

export default ProductPageHeader;
