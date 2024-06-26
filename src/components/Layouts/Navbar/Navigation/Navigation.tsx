import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import basketIcon from "../../../../assets/icons/basket-outline.svg";
import favoriteIcon from "../../../../assets/icons/heart-outline.svg";
import profileIcon from "../../../../assets/icons/person-outline.svg";
import searchIcon from "../../../../assets/icons/search-outline.svg";
import logo from "../../../../assets/image/logo_web03_100x.webp";
import { useAuthContext } from "../../../../context/authContext";
import { useGlobalContext } from "../../../../context/globalContext";
import { navigationAnimation } from "../../../UI/Animation/Animation";
import Styles from "./Navigation.module.css";

function Navigation() {
  const { authUser } = useAuthContext();
  const { setUiToggle, basketData, favoritesListData } = useGlobalContext();
  const BasketNumber = () => {
    return <span>{basketData?.length}</span>;
  };

  const WishlistNumber = () => {
    return <span>{favoritesListData?.length}</span>;
  };
  useEffect(() => {
    BasketNumber();
    WishlistNumber();
  }, [basketData, favoritesListData]);

  // Open search bar logic
  const onClickSearchButtonHandler = () => {
    setUiToggle((prevData: any) => {
      return { ...prevData, isSearchOpen: true };
    });
  };

  const onCLickBasketHandler = () => {
    setUiToggle((prevData: any) => {
      return { ...prevData, isBasketOpen: !prevData.isBasketOpen };
    });
  };
  const isActive = ({ isActive }: any) => (isActive ? `${Styles.active} ` : "");

  return (
    <motion.div {...navigationAnimation} className={Styles.navigation}>
      <div className={Styles.navbar__brand}>
        <Link to="/">
          <img src={logo} alt="brand of the compony " />
        </Link>
      </div>
      <div className={Styles.navbar__links}>
        <ul className={Styles.list}>
          <li className={Styles.listItem}>
            <NavLink className={isActive} to="keyboards">
              Custom Keyboards
            </NavLink>
          </li>
          <li className={Styles.listItem}>
            <NavLink className={isActive} to="keycaps">
              Keycaps
            </NavLink>
          </li>
          <li className={Styles.listItem}>
            <NavLink className={isActive} to="switches">
              Switches
            </NavLink>
          </li>
          <li className={Styles.listItem}>
            <NavLink className={isActive} to="accessories">
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
          {/* {authUser ? <img src={authUser.profilePicture} /> : <img src={profileIcon} alt="" />} */}
        </Link>
        <Link to="wishlist" className={Styles.wishlistIcon}>
          <img src={favoriteIcon} alt="" />
          {favoritesListData?.length > 0 ? <WishlistNumber /> : null}
        </Link>
        <button className={Styles.basketTrigger} onClick={onCLickBasketHandler}>
          <img src={basketIcon} alt="" />
          {basketData.length > 0 ? <BasketNumber /> : null}
        </button>
      </div>
    </motion.div>
  );
}

export default Navigation;
