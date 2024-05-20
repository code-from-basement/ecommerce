import React, { useEffect, useState } from "react";
import Styles from "./InStockKeyboards.module.css";
import StockKeyboardItems from "./InStockKeyboardItems/StockKeyboardItems";
import useSWR from "swr";

function InStockKeyboards() {

  //fetch for first five accessories in home page
  const fetcher = (url: string) => fetch(url).then((res)=>res.json());
  const {data} = useSWR(['http://127.0.0.1:5555/api/products/keyboards?first=5'], fetcher, {
    revalidateIfStale: false
  });

  console.log(data?.data, "from SWRConfig");
  return (
    <div className={Styles.keyboardsContainer}>
      <h2>In Stock Keyboards</h2>
      <div className={Styles.keyboardsItems}>
        {data?.data.map((item: any, index: number) => (
          <StockKeyboardItems key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default InStockKeyboards;
