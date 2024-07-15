import React, { useEffect, useState } from "react";
import Styles from "./Style.module.css";
import StyleItems from "./StylesItems/StyleItems";
import useSWR from "swr";
import { useGlobalContext } from "../../../../context/globalContext";

function Style() {
  const {favoritesListData } = useGlobalContext();
  //fetch for first five styles in home page
  
  const fetcher = (url: string) => fetch(url).then((res)=>res.json());
  const {data} = useSWR(['http://127.0.0.1:5555/api/products/keycaps?first=5'], fetcher, {
    revalidateIfStale: false
  });
  const ModifiedData = data?.data.map((eachItem: any) => {
    return {
      ...eachItem,
      isLiked: favoritesListData?.some((item: any) => item._id === eachItem._id),
    };
  });

  return (
    <div className={Styles.styleContainer}>
      <h2>Create Your Style</h2>
      <div className={Styles.styleItems}>
        {ModifiedData?.map((item: any, index: number) => (
          <StyleItems key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Style;
