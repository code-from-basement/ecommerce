import { useLocation } from "react-router-dom";
import useSWR from "swr";
import Filters from "../../UI/ProductPageFilter/ProductPageFilter";
import ProductPageGrid from "../../UI/ProductPageGrid/ProductPageGrid";
import ProductPageHeader from "../../UI/ProductPageHeader/ProductPageHeader";
import ProductPageListItem from "../../UI/ProductPageListItem/ProductPageListItem";
import Styles from "./Keyboards.module.css";
import useMetaDataUpdater from "../../../hooks/useMetaDataUpdater";
import { useGlobalContext } from "../../../context/globalContext";
import { useEffect } from "react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function Keyboards() {
  const { favoritesListData } = useGlobalContext();
  const location = useLocation();
  const url = `${location.pathname}${location.search}`;
  const { data } = useSWR([`http://127.0.0.1:5555/api/products/${url}`], fetcher, {
    revalidateIfStale: false,
  });
  useMetaDataUpdater(url);

  const keyboardsModifiedData = data?.data.map((keyboard: any) => {
    return {
      ...keyboard,
      isLiked: favoritesListData?.some((item: any) => item._id === keyboard._id),
    };
  });

  return (
    <div className={Styles.keyboards}>
      <ProductPageGrid>
        <Filters />
        <ProductPageHeader data={keyboardsModifiedData} />
        <ProductPageListItem data={keyboardsModifiedData} />
      </ProductPageGrid>
    </div>
  );
}

export default Keyboards;
