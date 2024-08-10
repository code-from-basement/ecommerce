import useSWR from "swr";
import { useGlobalContext } from "../../../../context/globalContext";
import Styles from "./Style.module.css";
import StyleItems from "./StylesItems/StyleItems";

function Style() {
  const { favoritesListData } = useGlobalContext();
  //fetch for first five styles in home page

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data } = useSWR([`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/products/keycaps?first=5`], fetcher, {
    revalidateIfStale: false,
  });
  const ModifiedData = data?.data.map((eachItem: any) => {
    return {
      ...eachItem,
      isLiked: favoritesListData?.some((item: any) => item._id === eachItem._id),
    };
  });

  return (
    <div className={Styles.styleContainer}>
      <h2>Create Your Style</h2>
      <div className={Styles.styleItems}>
        {ModifiedData?.map((item: any, index: number) => (
          <StyleItems key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Style;
