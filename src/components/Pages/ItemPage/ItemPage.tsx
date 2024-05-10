import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useSWR from "swr";
import { useGlobalContext } from "../../../context/globalContext";
import { fadeInItemPage } from "../../UI/Animation/Animation";
import ImageGallery from "./ImageGallery/ImageGallery";
import Styles from "./ItemPage.module.css";
import Side from "./Side/Side";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

function ItemPage() {
  const { setUiToggle } = useGlobalContext();
  const location = useLocation();
  const url = `${location.pathname}`;
  useEffect(() => {
    window.scrollTo(0, 0);
    setUiToggle((prevData: any) => {
      return { ...prevData, isSearchOpen: false };
    });
  }, []);

  // Fetching through SWR
  const { data } = useSWR(`http://127.0.0.1:5555/api/products${url}`, fetcher, {});
  const result = data?.data[0];
  if (data) {
    return (
      <motion.div {...fadeInItemPage} className={Styles.itemPage}>
        <ImageGallery {...data} />
        <Side {...data} />
      </motion.div>
    );
  }
}

export default ItemPage;
