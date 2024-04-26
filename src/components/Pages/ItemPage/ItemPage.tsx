import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useSWR from "swr";
import ImageGallery from "./ImageGallery/ImageGallery";
import Styles from "./ItemPage.module.css";
import Side from "./Side/Side";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

function ItemPage() {
  const location = useLocation();
  const url = `${location.pathname}`;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fetching through SWR
  const { data } = useSWR(`http://127.0.0.1:5555/api/products${url}`, fetcher, {});
  const result = data?.data[0];
  if (data) {
    return (
      <div className={Styles.itemPage}>
        <ImageGallery />
        <Side {...data} />
      </div>
    );
  }
}

export default ItemPage;
