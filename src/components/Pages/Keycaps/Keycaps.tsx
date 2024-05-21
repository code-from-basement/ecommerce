import React from "react";
import Styles from "./Keycaps.module.css";
import Row from "../../UI/Row/Row";
import ProductPageGrid from "../../UI/ProductPageGrid/ProductPageGrid";
import Filters from "../../UI/ProductPageFilter/ProductPageFilter";
import ProductPageHeader from "../../UI/ProductPageHeader/ProductPageHeader";
import ProductPageListItem from "../../UI/ProductPageListItem/ProductPageListItem";
import { useLocation } from "react-router-dom";
import useSWR from "swr";

function Keycaps() {

  const fetcher = (url:string) => fetch(url).then((res)=>res.json());

  const location = useLocation();
  const url = `${location.pathname}${location.search}`;
  const {data} = useSWR([`http://127.0.0.1:5555/api/products/${url}`], fetcher, {
    revalidateIfStale: false,
  });

  console.log(data, "data from keycaps");

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
