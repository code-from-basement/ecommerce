import { useEffect, useState } from "react";
import Styles from "./Accessories.module.css";
import ItemAccessories from "./ItemAccessories/ItemAccessories";
import useSWR from "swr";

function Accessories() {
  //fetch for first five accessories in home page

  const fetcher = (url: string) => fetch(url).then((res)=>res.json());
  const {data} = useSWR(['http://127.0.0.1:5555/api/products/accessories?first=5'], fetcher, {
    revalidateIfStale: false
  });

  return (
    <div className={Styles.accessoriesContainer}>
      <h2>Accessories</h2>
      <div className={Styles.accessoriesItems}>
        {data?.data.map((item: any, index: number) => (
          <ItemAccessories key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Accessories;
