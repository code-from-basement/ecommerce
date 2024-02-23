import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/image/logo_web03_100x.webp";
import searchIcon from "../../../assets/icons/search-outline.svg";
import profileIcon from "../../../assets/icons/person-outline.svg";
import favoriteIcon from "../../../assets/icons/heart-outline.svg";
import basketIcon from "../../../assets/icons/basket-outline.svg";
import Styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={Styles.navbar}>
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
        <button className={Styles.searchTrigger}>
          <img src={searchIcon} alt="" />
        </button>
        <Link to="/">
          <img src={profileIcon} alt="" />
        </Link>
        <Link to="/">
          <img src={favoriteIcon} alt="" />
        </Link>
        <Link to="/">
          <img src={basketIcon} alt="" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
