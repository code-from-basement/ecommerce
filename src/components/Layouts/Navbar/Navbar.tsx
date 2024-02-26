import { AnimatePresence } from "framer-motion";
import { useGlobalContext } from "../../../context/globalContext";
import Styles from "./Navbar.module.css";
import Navigation from "./Navigation/Navigation";
import SearchBar from "./SearchBar/SearchBar";
import Basket from "../../UI/Basket/Basket";

function Navbar() {
  const { uiToggle } = useGlobalContext();
  // destructuring the isSearchOpen from the uiToggle
  const { isSearchOpen, isBasketOpen } = uiToggle;

  return (
    <nav className={Styles.navbar}>
      <AnimatePresence>{isSearchOpen ? <SearchBar /> : <Navigation />}</AnimatePresence>
      <AnimatePresence>{isBasketOpen && <Basket />}</AnimatePresence>
    </nav>
  );
}

export default Navbar;
