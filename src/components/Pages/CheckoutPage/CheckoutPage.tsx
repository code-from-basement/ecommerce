import { useGlobalContext } from "../../../context/globalContext";
import CheckoutItem from "../../UI/CheckoutItem/CheckoutItem";
import Styles from "./CheckoutPage.module.css";

export default function CheckoutPage() {
  const { basketData } = useGlobalContext();
  console.log(basketData);
  return (
    <div className={Styles.container}>
      <div className={Styles.listItemContainer}>
        <div className={Styles.listItem}>
          {basketData?.map((item: any) => {
            return <CheckoutItem key={item._id} item={item} />;
          })}
        </div>
      </div>
      <div className={Styles.checkoutContainer}>check out container</div>
    </div>
  );
}
