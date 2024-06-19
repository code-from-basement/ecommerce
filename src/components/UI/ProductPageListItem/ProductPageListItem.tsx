import ProductItem from "../ProductItem/ProductItem";
import Styles from "./ProductPageListItem.module.css";

function ProductPageListItem({ data }: any) {
  return (
    <section className={Styles.productPageListItem}>
      {data?.map((product: any) => (
        <ProductItem key={product._id} product={product} />
      ))}
    </section>
  );
}

export default ProductPageListItem;
