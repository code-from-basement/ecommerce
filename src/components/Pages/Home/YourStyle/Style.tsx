import React, { useEffect, useState } from "react";
import Styles from "./Style.module.css";
import StyleItems from "./StylesItems/StyleItems";
import useSWR from "swr";

function Style() {
  //fetch for first five styles in home page
  
  const fetcher = (url: string) => fetch(url).then((res)=>res.json());
  const {data} = useSWR(['http://127.0.0.1:5555/api/products/keycaps?first=5'], fetcher, {
    revalidateIfStale: false
  });

  return (
    <div className={Styles.styleContainer}>
      <h2>Create Your Style</h2>
      <div className={Styles.styleItems}>
        {data?.data.map((item: any, index: number) => (
          <StyleItems key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Style;
