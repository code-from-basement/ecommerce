import ProductPageGrid from "../../UI/ProductPageGrid/ProductPageGrid";
import ProductPageHeader from "../../UI/ProductPageHeader/ProductPageHeader";
import ProductPageListItem from "../../UI/ProductPageListItem/ProductPageListItem";
import Filters from "../../UI/ProductPageFilter/ProductPageFilter";
import Styles from "./Keyboards.module.css";

function Keyboards() {
  return (
    <div className={Styles.keyboards}>
      <ProductPageGrid>
        <Filters />
        <ProductPageHeader />
        <ProductPageListItem />
      </ProductPageGrid>
    </div>
  );
}

export default Keyboards;
