import { Link, NavLink } from "react-router-dom";

import Styles from "./Navbar.module.css";
import closeIcon from "./../../../assets/icons/close-outline.svg";
import SearchBar from "./SearchBar/SearchBar";
import Navigation from "./Navigation/Navigation";
import { useState } from "react";
import { useGlobalContext } from "../../../context/globalContext";

function Navbar() {
  const { uiToggle } = useGlobalContext();
  // destructuring the isSearchOpen from the uiToggle
  const { isSearchOpen } = uiToggle;

  return <nav className={Styles.navbar}>{isSearchOpen ? <SearchBar /> : <Navigation />}</nav>;
}

export default Navbar;
