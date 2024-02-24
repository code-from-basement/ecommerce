import { AnimatePresence } from "framer-motion";
import { useGlobalContext } from "../../../context/globalContext";
import Styles from "./Navbar.module.css";
import Navigation from "./Navigation/Navigation";
import SearchBar from "./SearchBar/SearchBar";

function Navbar() {
  const { uiToggle } = useGlobalContext();
  // destructuring the isSearchOpen from the uiToggle
  const { isSearchOpen } = uiToggle;

  return (
    <AnimatePresence>
      <nav className={Styles.navbar}>{isSearchOpen ? <SearchBar /> : <Navigation />}</nav>;
    </AnimatePresence>
  );
}

export default Navbar;
