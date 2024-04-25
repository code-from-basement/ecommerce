import Styles from "./ProductPageGrid.module.css";

function ProductPageGrid({ children }: any) {
  return <div className={Styles.productPageGrid}>{children}</div>;
}

export default ProductPageGrid;
