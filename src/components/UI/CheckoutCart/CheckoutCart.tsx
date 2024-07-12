import { ButtonOutline, ButtonPrimary } from "../Buttons/Buttons";
import Styles from "./CheckoutCart.module.css";
import { ShoppingBagIcon, CreditCard } from "lucide-react";
export default function CheckoutCart() {
  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <h1>Checkout Cart</h1>
      </div>
      <div className={Styles.body}>
        <div className={Styles.row}>
          <p>Subtotal</p>
          <p>265$</p>
        </div>
        <div className={Styles.row}>
          <p>Shipping cost </p>
          <p>10$</p>
        </div>
        <div className={Styles.row}>
          <h2>Total:</h2>
          <h2>
            <span>USD</span> 325$
          </h2>
        </div>
      </div>
      <hr />
      <div className={Styles.footer}>
        <ButtonPrimary icon={<CreditCard />} style={{ width: "100%" }} disabled={false} onClick={() => {}}>
          Checkout
        </ButtonPrimary>
        <ButtonOutline disabled={false} style={{ width: "100%" }} icon={<ShoppingBagIcon />} onClick={() => {}}>
          Continue Shopping.
        </ButtonOutline>
      </div>
    </div>
  );
}
