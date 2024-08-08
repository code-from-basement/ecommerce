import { CreditCard, ShoppingBagIcon } from "lucide-react";
import { ButtonOutline, ButtonPrimary } from "../Buttons/Buttons";
import Styles from "./CheckoutCart.module.css";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { useGlobalContext } from "../../../context/globalContext";
import { useEffect, useState } from "react";

export default function CheckoutCart() {
  const navigate = useNavigate();
  const { basketData, totalPrice } = useGlobalContext();
  const [finalTotal, setFinalTotal] = useState<any>(0);

  // calculate the final total including shopping cost
  useEffect(() => {
    const finalTotalPrice = (+totalPrice + 10).toFixed(2).toString();
    setFinalTotal(finalTotalPrice);
  }, [finalTotal]);

  // handle payment with stripe
  const paymentHandler = async () => {
    const stripe = await loadStripe(
      "pk_test_51PiX6lRpmzXCZXyOqJOE3a1C8xeBO8ZgS7CVzfWfxzaH6hCbNoWWMfIVDOJ59KvfL9VKSY6KHQXlxzjNiLMyqZzV00H5RRhQ5N"
    );
    const response = await fetch("http://127.0.0.1:5555/api/basket/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(basketData),
    });
    const session = await response.json();
    const result = await stripe?.redirectToCheckout({
      sessionId: session.id,
    });
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <h1>Checkout Cart</h1>
      </div>
      <div className={Styles.body}>
        <div className={Styles.row}>
          <p>Subtotal</p>
          <p>{totalPrice}$</p>
        </div>
        <div className={Styles.row}>
          <p>Shipping cost </p>
          <p>10$</p>
        </div>
        <div className={Styles.row}>
          <h2>Total:</h2>
          <h2>
            <span>USD</span>
            {finalTotal}
          </h2>
        </div>
      </div>
      <hr />
      <div className={Styles.footer}>
        <ButtonPrimary icon={<CreditCard />} disabled={false} onClick={paymentHandler}>
          Checkout
        </ButtonPrimary>
        <ButtonOutline disabled={false} icon={<ShoppingBagIcon />} onClick={() => navigate(-1)}>
          Continue Shopping
        </ButtonOutline>
      </div>
    </div>
  );
}
