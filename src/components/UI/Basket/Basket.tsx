import { motion } from "framer-motion";
import { ShoppingBasketIcon } from "lucide-react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useClickAway } from "react-use";
import { useGlobalContext } from "../../../context/globalContext";
import { basketAnimation } from "../Animation/Animation";
import BasketEmpty from "../BasketEmpty/BasketEmpty";
import BasketItemList from "../BasketItemList/BasketItemList";
import { ButtonPrimary, CloseButton } from "../Buttons/Buttons";
import Styles from "./Basket.module.css";

function Basket() {
  const navigate = useNavigate();

  const { setUiToggle, basketData, totalPrice } = useGlobalContext();
  const [total] = totalPrice;

  const ref = useRef(null);

  useClickAway(ref, () => {
    setUiToggle((prevData: any) => {
      return { ...prevData, isBasketOpen: false };
    });
  });

  const onCLickCLoseBasketHandler = () => {
    setUiToggle((prevData: any) => {
      return { ...prevData, isBasketOpen: false };
    });
  };

  // Checkout Button Handler to checkout page.
  const onClickCheckoutHandler = async () => {
    navigate("checkout");

    return await setUiToggle((prevData: any) => {
      return { ...prevData, isBasketOpen: false };
    });
  };

  if (basketData?.length === 0) {
    return <BasketEmpty />;
  }
  if (basketData?.length > 0) {
    return (
      <motion.div id="basket" {...basketAnimation} className={Styles.basket} ref={ref}>
        <BasketItemList />
        <hr />
        <div className={Styles.subTotal}>
          <h2 className={Styles.subTotal__title}>Subtotal</h2>
          <h2 className={Styles.subTotal__number}>${total}</h2>
        </div>

        <div className={Styles.footer}>
          <ButtonPrimary
            style={undefined}
            disabled={false}
            onClick={onClickCheckoutHandler}
            icon={<ShoppingBasketIcon />}
          >
            Checkout
          </ButtonPrimary>
        </div>
        <div className={Styles.subFooter}>
          <p>Shipping, taxes, and discount codes calculated at checkout.</p>
        </div>
        <CloseButton onClick={onCLickCLoseBasketHandler}></CloseButton>
      </motion.div>
    );
  }
}

export default Basket;
