import React from "react";
import Styles from "./ProductPageListItem.module.css";
import ProductItem from "../ProductItem/ProductItem";

function ProductPageListItem() {
  return (
    <section className={Styles.productPageListItem}>
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </section>
  );
}

export default ProductPageListItem;
