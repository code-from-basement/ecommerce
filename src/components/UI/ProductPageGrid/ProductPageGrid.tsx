import React from "react";
import Styles from "./ProductPageGrid.module.css";

function ProductPageGrid({ children }) {
  return <div className={Styles.productPageGrid}>{children}</div>;
}

export default ProductPageGrid;
