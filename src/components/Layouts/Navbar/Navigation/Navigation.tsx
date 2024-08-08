import { motion } from "framer-motion";
import { FolderHeartIcon, SearchIcon, ShoppingBagIcon, User } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../../assets/image/logo_web03_100x.webp";
import { useAuthContext } from "../../../../context/authContext";
import { useGlobalContext } from "../../../../context/globalContext";
import { navigationAnimation } from "../../../UI/Animation/Animation";
import Styles from "./Navigation.module.css";
import { capitalize } from "@mui/material";

function Navigation() {
  const { authUser } = useAuthContext();

  const { setUiToggle, basketData, favoritesListData } = useGlobalContext();

  //
  const BasketNumber = () => {
    return <span>{basketData?.length}</span>;
  };

  //
  const WishlistNumber = () => {
    return <span>{favoritesListData?.length}</span>;
  };

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
          <img src={logo} alt="brand of the compony" />
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
          <SearchIcon />
        </button>
        <Link to="account">
          <User color={`${authUser ? "#05d1a8" : "#1d1d1f"}`} />
          {authUser && <span>{`${capitalize(authUser?.username)}`}</span>}
        </Link>
        <Link to="wishlist" className={Styles.wishlistIcon}>
          {/* <img src={favoriteIcon} alt="" /> */}
          <FolderHeartIcon />
          {favoritesListData?.length > 0 ? <WishlistNumber /> : null}
        </Link>
        <button className={Styles.basketTrigger} onClick={onCLickBasketHandler}>
          {/* <img src={basketIcon} alt="" /> */}
          <ShoppingBagIcon />
          {basketData.length > 0 ? <BasketNumber /> : null}
        </button>
      </div>
    </motion.div>
  );
}

export default Navigation;
