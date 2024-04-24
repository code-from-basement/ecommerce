import React from "react";
import { useSearchParams } from "react-router-dom";
import { useGlobalContext } from "../../../context/globalContext";
import arrowIcon from "./../../../assets/icons/chevron-down-outline.svg";
import Styles from "./ProductPageHeader.module.css";

function ProductPageHeader() {
  const { setUiToggle } = useGlobalContext();
  const [searchParams, setSearchParams] = useSearchParams();

  const onChangeHandler = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchParams(() => {
      const sortValue = event.target.value.split("-")[0];
      const directionValue = event.target.value.split("-")[1];
      return {
        ...(sortValue && { sort: sortValue }),
        ...(directionValue && { direction: directionValue }),
      };
    });
    const url = window.location.search;
    const pathname = window.location.pathname;

    // console.log(window.location.search, "window.location.href");

    try {
      setUiToggle((prevData: any) => {
        return { ...prevData, isLoadingFullViewShow: true };
      });
      const res = await fetch(`http://127.0.0.1:5555/api/products${pathname}${url}`);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    } finally {
      setTimeout(() => {
        setUiToggle((prevData: any) => {
          return { ...prevData, isLoadingFullViewShow: false };
        });
      }, 500);
    }
  };

  return (
    <div className={Styles.productPageHeader}>
      <h1>14 Products</h1>
      <div className={Styles.sortBy}>
        <img src={arrowIcon} alt="" />
        <select name="sort" id="sort" onChange={onChangeHandler}>
          <option value="">Featured</option>
          <option value="price-asc">Price: Lower to Higher</option>
          <option value="price-desc">Price: Higher to Lower</option>
          <option value="popular-">Popularity</option>
        </select>
      </div>
    </div>
  );
}

export default ProductPageHeader;
