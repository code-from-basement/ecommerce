import useSWR from "swr";
import ImageGallery from "./ImageGallery/ImageGallery";
import Styles from "./ItemPage.module.css";
import Side from "./Side/Side";
import { useLocation } from "react-router-dom";
const fetcher = (url: string) => fetch(url).then((res) => res.json());
function ItemPage() {
  const location = useLocation();
  const url = `${location.pathname}`;

  const { data } = useSWR(`http://127.0.0.1:5555/api/products${url}`, fetcher, {});
  console.log(data, "data");

  return (
    <div className={Styles.itemPage}>
      <ImageGallery />
      <Side />
    </div>
  );
}

export default ItemPage;
