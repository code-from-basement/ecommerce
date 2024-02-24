import searchIcon from "../../../../assets/icons/search-outline.svg";
import { useGlobalContext } from "../../../../context/globalContext";
import closeIcon from "./../../../../assets/icons/close-outline.svg";
import Styles from "./SearchBar.module.css";
import { motion } from "framer-motion";
function SearchBar() {
  const { setUiToggle } = useGlobalContext();

  // Close search bar logic
  const onClickSearchBarCloseHandler = () => {
    setUiToggle((prevData: any) => {
      return { ...prevData, isSearchOpen: false };
    });
  };
  return (
    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className={Styles.searchContainer}>
      <input className={Styles.searchInput} type="text" placeholder="Search" />
      <button className={Styles.BtnSearch}>
        <img src={searchIcon} alt="" />
      </button>
      <button className={Styles.BtnCLose} onClick={onClickSearchBarCloseHandler}>
        <img src={closeIcon} alt="" />
      </button>
    </motion.div>
  );
}

export default SearchBar;
