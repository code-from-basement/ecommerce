import { motion } from "framer-motion";
import searchIcon from "../../../../assets/icons/search-outline.svg";
import { useGlobalContext } from "../../../../context/globalContext";
import { searchBarAnimation } from "../../../UI/Animation/Animation";
import closeIcon from "./../../../../assets/icons/close-outline.svg";
import Styles from "./SearchBar.module.css";
function SearchBar() {
  const { setUiToggle } = useGlobalContext();

  // Close search bar logic
  const onClickSearchBarCloseHandler = () => {
    setUiToggle((prevData: any) => {
      return { ...prevData, isSearchOpen: false };
    });
  };
  return (
    <motion.div className={Styles.searchContainer} {...searchBarAnimation}>
      <input className={Styles.searchInput} type="text" placeholder="Search" />
      <button className={Styles.BtnSearch} onClick={() => console.log("click")}>
        <img src={searchIcon} alt="" />
      </button>
      <button className={Styles.BtnCLose} onClick={onClickSearchBarCloseHandler}>
        <img src={closeIcon} alt="" />
      </button>
    </motion.div>
  );
}

export default SearchBar;
