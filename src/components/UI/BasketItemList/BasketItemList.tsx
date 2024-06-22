import { useGlobalContext } from "../../../context/globalContext";
import BasketItem from "../BasketItem/BasketItem";
import Styles from "./BasketItemList.module.css";

function BasketItemList() {
  const { basketData } = useGlobalContext();
  return (
    <div className={Styles.listItem}>
      {basketData?.map((item: any, index: number) => {
        return <BasketItem key={index} {...item} />;
      })}
    </div>
  );
}

export default BasketItemList;
