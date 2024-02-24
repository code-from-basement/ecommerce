import React from "react";
import Styles from "./SearchBar.module.css";
import searchIcon from "../../../../assets/icons/search-outline.svg";
import closeIcon from "./../../../../assets/icons/close-outline.svg";
import { useGlobalContext } from "../../../../context/globalContext";

function SearchBar() {
  const { setUiToggle } = useGlobalContext();

  const onClickSearchBarCloseHandler = () => {
    setUiToggle((prevData: any) => {
      return { ...prevData, isSearchOpen: false };
    });
  };
  return (
    <div className={Styles.searchContainer}>
      <input className={Styles.searchInput} type="text" placeholder="Search" />
      <button className={Styles.BtnSearch}>
        <img src={searchIcon} alt="" />
      </button>
      <button className={Styles.BtnCLose} onClick={onClickSearchBarCloseHandler}>
        <img src={closeIcon} alt="" />
      </button>
    </div>
  );
}

export default SearchBar;
