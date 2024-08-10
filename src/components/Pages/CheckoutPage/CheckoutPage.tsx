import { useGlobalContext } from "../../../context/globalContext";
import CheckoutCart from "../../UI/CheckoutCart/CheckoutCart";
import CheckoutItem from "../../UI/CheckoutItem/CheckoutItem";
import Styles from "./CheckoutPage.module.css";

export default function CheckoutPage() {
  const { basketData } = useGlobalContext();

  return (
    <div className={Styles.container}>
      <div className={Styles.listItemContainer}>
        <div className={Styles.listItem}>
          {basketData?.map((item: any) => {
            return <CheckoutItem key={item._id} item={item} />;
          })}
        </div>
      </div>
      <div className={Styles.checkoutContainer}>
        <CheckoutCart />
      </div>
    </div>
  );
}
