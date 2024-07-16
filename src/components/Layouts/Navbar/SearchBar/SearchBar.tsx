import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import searchIcon from "../../../../assets/icons/search-outline.svg";
import { useGlobalContext } from "../../../../context/globalContext";
import { searchBarAnimation } from "../../../UI/Animation/Animation";
import closeIcon from "./../../../../assets/icons/close-outline.svg";
import Styles from "./SearchBar.module.css";

function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  // Ref for search input
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
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
    let params = searchParams.get("q");
    setSearchParams({ q: searchInputRef.current?.value });
    const searchValue = searchInputRef.current?.value;

    if (searchInputRef.current?.value) {
      setUiToggle((prevData: any) => {
        return { ...prevData, isLoadingFullViewShow: true };
      });

      try {
        const response = await fetch(`http://127.0.0.1:5555/api/search?q=${searchValue}`);
        const data = await response.json();
        navigate(`/search?q=${searchValue}`, { state: { data: data.data, pathname: location.pathname } });
      } catch (err) {
        console.log(err, "error in search button");
      } finally {
        searchInputRef.current!.value = "";
        setTimeout(() => {
          setUiToggle((prevData: any) => {
            return { ...prevData, isLoadingFullViewShow: false };
          });
        }, 1000);
      }
    }
    return;
  };

  useEffect(() => {
    searchInputRef.current?.focus();
  }, []);

  return (
    <motion.div className={Styles.searchContainer} {...searchBarAnimation}>
      <input
        className={Styles.searchInput}
        type="text"
        placeholder="Search here..."
        ref={searchInputRef}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && onClickSearchButtonHandler(e as any)}
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
