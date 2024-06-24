import { motion } from "framer-motion";
import { useGlobalContext } from "../../../context/globalContext";
import { basketAnimation } from "../Animation/Animation";
import BasketEmpty from "../BasketEmpty/BasketEmpty";
import BasketItemList from "../BasketItemList/BasketItemList";
import { ButtonPrimary, CloseButton } from "../Buttons/Buttons";
import Styles from "./Basket.module.css";

function Basket() {
  const { uiToggle, setUiToggle, basketData } = useGlobalContext();
  const { isBasketOpen } = uiToggle;

  const onCLickCLoseBasketHandler = () => {
    setUiToggle((prevData: any) => {
      return { ...prevData, isBasketOpen: false };
    });
  };

  if (basketData?.length === 0) {
    return <BasketEmpty />;
  }
  if (basketData?.length > 0) {
    return (
      <motion.div id="basket" {...basketAnimation} className={Styles.basket}>
        <BasketItemList />
        <hr />
        <div className={Styles.subTotal}>
          <h2 className={Styles.subTotal__title}>Subtotal</h2>
          <h2 className={Styles.subTotal__number}>$0.00</h2>
        </div>

        <div className={Styles.footer}>
          <ButtonPrimary style={{ width: "100%" }} disabled={false} onClick={() => console.log("checkout")}>
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
