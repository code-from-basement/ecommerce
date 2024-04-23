import { motion } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import searchIcon from "../../../../assets/icons/search-outline.svg";
import { useGlobalContext } from "../../../../context/globalContext";
import { searchBarAnimation } from "../../../UI/Animation/Animation";
import closeIcon from "./../../../../assets/icons/close-outline.svg";
import Styles from "./SearchBar.module.css";

function SearchBar() {
  // Ref for search input
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { setUiToggle } = useGlobalContext();

  // Close search bar logic
  const onClickSearchBarCloseHandler = () => {
    setUiToggle((prevData: any) => {
      return { ...prevData, isSearchOpen: false };
    });
  };

  // Search button logic
  const onClickSearchButtonHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (searchInputRef.current?.value) {
      setUiToggle((prevData: any) => {
        return { ...prevData, isLoadingFullViewShow: true };
      });
      try {
        const searchValue = searchInputRef.current?.value;
        const response = await fetch(`http://127.0.0.1:5555/api/search?q=${searchValue}`);
        const data = await response.json();
        console.log(data);
      } catch (err) {
        console.log(err, "error in search button");
      } finally {
        searchInputRef.current!.value = "";
        setTimeout(() => {
          setUiToggle((prevData: any) => {
            return { ...prevData, isLoadingFullViewShow: false };
          });
        }, 2000);
        navigate("search");
      }
    }
    return;
  };

  return (
    <motion.div className={Styles.searchContainer} {...searchBarAnimation}>
      <input
        className={Styles.searchInput}
        type="text"
        placeholder="Search here..."
        ref={searchInputRef}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && onClickSearchButtonHandler(e)}
      />
      <button className={Styles.BtnSearch} onClick={onClickSearchButtonHandler}>
        <img src={searchIcon} alt="" />
      </button>
      <button className={Styles.BtnCLose} onClick={onClickSearchBarCloseHandler}>
        <img src={closeIcon} alt="" />
      </button>
    </motion.div>
  );
}

export default SearchBar;
