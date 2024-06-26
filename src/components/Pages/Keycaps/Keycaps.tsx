import { useLocation } from "react-router-dom";
import useSWR from "swr";
import Filters from "../../UI/ProductPageFilter/ProductPageFilter";
import ProductPageGrid from "../../UI/ProductPageGrid/ProductPageGrid";
import ProductPageHeader from "../../UI/ProductPageHeader/ProductPageHeader";
import ProductPageListItem from "../../UI/ProductPageListItem/ProductPageListItem";
import Styles from "./Keycaps.module.css";
import useMetaDataUpdater from "../../../hooks/useMetaDataUpdater";
import { useGlobalContext } from "../../../context/globalContext";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
function Keycaps() {
  const { favoritesListData } = useGlobalContext();

  const location = useLocation();
  const url = `${location.pathname}${location.search}`;
  const { data } = useSWR([`http://127.0.0.1:5555/api/products/${url}`], fetcher, {
    revalidateIfStale: false,
  });
  useMetaDataUpdater(url);
  const KeyCapsModifiedData = data?.data.map((keyCap: any) => {
    return {
      ...keyCap,
      isLiked: favoritesListData?.some((item: any) => item._id === keyCap._id),
    };
  });

  return (
    <div className={Styles.keycaps}>
      <ProductPageGrid>
        <Filters />
        <ProductPageHeader data={KeyCapsModifiedData} />
        <ProductPageListItem data={KeyCapsModifiedData} />
      </ProductPageGrid>
    </div>
  );
}

export default Keycaps;
