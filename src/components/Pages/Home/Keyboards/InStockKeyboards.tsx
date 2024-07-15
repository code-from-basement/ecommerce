import React, { useEffect, useState } from "react";
import Styles from "./InStockKeyboards.module.css";
import StockKeyboardItems from "./InStockKeyboardItems/StockKeyboardItems";
import useSWR from "swr";
import { useGlobalContext } from "../../../../context/globalContext";

function InStockKeyboards() {
  //fetch for first five accessories in home page
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data } = useSWR(["http://127.0.0.1:5555/api/products/keyboards?first=5"], fetcher, {
    revalidateIfStale: false,
  });

  const {favoritesListData } = useGlobalContext();
  const ModifiedData = data?.data.map((eachItem: any) => {
    return {
      ...eachItem,
      isLiked: favoritesListData?.some((item: any) => item._id === eachItem._id),
    };
  });
  // console.log(ModifiedData, "ModifiedData")

  return (
    <div className={Styles.keyboardsContainer}>
      <h2>In Stock Keyboards</h2>
      <div className={Styles.keyboardsItems}>
        {ModifiedData?.map((item: any, index: number) => (
          <StockKeyboardItems key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default InStockKeyboards;
