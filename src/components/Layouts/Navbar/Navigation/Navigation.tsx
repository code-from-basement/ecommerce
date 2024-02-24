import React from "react";
import Styles from "./Navigation.module.css";
import { Link, NavLink } from "react-router-dom";
import searchIcon from "../../../../assets/icons/search-outline.svg";
import basketIcon from "../../../../assets/icons/basket-outline.svg";
import favoriteIcon from "../../../../assets/icons/heart-outline.svg";
import profileIcon from "../../../../assets/icons/person-outline.svg";
import logo from "../../../../assets/image/logo_web03_100x.webp";
import { useGlobalContext } from "../../../../context/globalContext";

function Navigation() {
  const { uiToggle, setUiToggle } = useGlobalContext();
  const onClickSearchButtonHandler = () => {
    setUiToggle((prevData: any) => {
      return { ...prevData, isSearchOpen: true };
    });
  };
  return (
    <>
      <div className={Styles.navbar__brand}>
        <Link to="/">
          <img src={logo} alt="brand of the compony " />
        </Link>
      </div>
      <div className={Styles.navbar__links}>
        <ul className={Styles.list}>
          <li className={Styles.listItem}>
            <NavLink className={Styles.link} to="keyboards">
              Custom Keyboards
            </NavLink>
          </li>
          <li className={Styles.listItem}>
            <NavLink className={Styles.link} to="keycaps">
              Keycaps
            </NavLink>
          </li>
          <li className={Styles.listItem}>
            <NavLink className={Styles.link} to="switches">
              Switches
            </NavLink>
          </li>
          <li className={Styles.listItem}>
            <NavLink className={Styles.link} to="accessories">
              Accessories
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={Styles.navbar__siteItem}>
        <button className={Styles.searchTrigger} onClick={onClickSearchButtonHandler}>
          <img src={searchIcon} alt="" />
        </button>
        <Link to="account">
          <img src={profileIcon} alt="" />
        </Link>
        <Link to="wishlist">
          <img src={favoriteIcon} alt="" />
        </Link>
        <Link to="/">
          <img src={basketIcon} alt="" />
        </Link>
      </div>
    </>
  );
}

export default Navigation;
