import React from "react";
import Styles from "./Accessories.module.css";
import Row from "../../UI/Row/Row";
import ProductPageGrid from "../../UI/ProductPageGrid/ProductPageGrid";
import Filters from "../../UI/ProductPageFilter/ProductPageFilter";
import ProductPageHeader from "../../UI/ProductPageHeader/ProductPageHeader";
import ProductPageListItem from "../../UI/ProductPageListItem/ProductPageListItem";
import { useLocation } from "react-router-dom";
import useSWR from "swr";
import { useGlobalContext } from "../../../context/globalContext";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
function Accessories() {
  const { favoritesListData } = useGlobalContext();
  const location = useLocation();
  const url = `${location.pathname}${location.search}`;
  const { data } = useSWR([`http://127.0.0.1:5555/api/products/${url}`], fetcher, {
    revalidateIfStale: false,
  });

  const accessoriesModifiedData = data?.data.map((accessory: any) => {
    return {
      ...accessory,
      isLiked: favoritesListData?.some((item: any) => item._id === accessory._id),
    };
  });

  return (
    <div className={Styles.accessories}>
      <ProductPageGrid>
        <Filters />
        <ProductPageHeader data={accessoriesModifiedData} />
        <ProductPageListItem data={accessoriesModifiedData} />
      </ProductPageGrid>
    </div>
  );
}

export default Accessories;
