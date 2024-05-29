import { useLocation } from "react-router-dom";
import useSWR from "swr";
import Filters from "../../UI/ProductPageFilter/ProductPageFilter";
import ProductPageGrid from "../../UI/ProductPageGrid/ProductPageGrid";
import ProductPageHeader from "../../UI/ProductPageHeader/ProductPageHeader";
import ProductPageListItem from "../../UI/ProductPageListItem/ProductPageListItem";
import Styles from "./Keycaps.module.css";
import useMetaDataUpdater from "../../../hooks/useMetaDataUpdater";

function Keycaps() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const location = useLocation();
  const url = `${location.pathname}${location.search}`;
  const { data } = useSWR([`http://127.0.0.1:5555/api/products/${url}`], fetcher, {
    revalidateIfStale: false,
  });
  useMetaDataUpdater(url);

  return (
    <div className={Styles.keycaps}>
      <ProductPageGrid>
        <Filters />
        <ProductPageHeader {...data} />
        <ProductPageListItem {...data} />
      </ProductPageGrid>
    </div>
  );
}

export default Keycaps;
