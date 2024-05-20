import React from "react";
import { useSearchParams } from "react-router-dom";
import { useGlobalContext } from "../../../context/globalContext";
import arrowIcon from "./../../../assets/icons/chevron-down-outline.svg";
import Styles from "./ProductPageHeader.module.css";

function ProductPageHeader({ data }: any) {
  const [searchParams, setSearchParams] = useSearchParams();

  const onChangeHandler = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sortValue = event.target.value.split("-")[0];
    const directionValue = event.target.value.split("-")[1];
    console.log(sortValue, directionValue, "sortValue, directionValue");
    if (sortValue && directionValue) {
      console.log("1");
      searchParams.delete("sort");
      searchParams.delete("direction");
      searchParams.append("sort", sortValue);
      searchParams.append("direction", directionValue);
      return setSearchParams(searchParams);
    }
    if (sortValue && !directionValue) {
      console.log("2");
      searchParams.delete("sort");
      searchParams.delete("direction");
      searchParams.append("sort", sortValue);
      return setSearchParams(searchParams);
    }
    if (!sortValue && !directionValue) {
      console.log("3");
      searchParams.delete("sort");
      searchParams.delete("direction");
      return setSearchParams(searchParams);
    }
  };

  return (
    <div className={Styles.productPageHeader}>
      <h1>{data?.length} Products</h1>
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
