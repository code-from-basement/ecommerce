import { motion } from "framer-motion";
import { useGlobalContext } from "../../../context/globalContext";
import { basketAnimation } from "../Animation/Animation";
import BasketItem from "../BasketItem/BasketItem";
import { ButtonPrimary, CloseButton } from "../Buttons/Buttons";
import Styles from "./Basket.module.css";

function Basket() {
  const { uiToggle, setUiToggle, basketData } = useGlobalContext();
  const { isBasketEmpty, isBasketOpen } = uiToggle;

  const EmptyBasket = ({ children }: { children: React.ReactNode }) => {
    const onCLickCLoseBasketHandler = () => {
      setUiToggle((prevData: any) => {
        return { ...prevData, isBasketOpen: false };
      });
    };

    if (!isBasketEmpty) {
      return children;
    } else {
      return (
        <motion.div id="basket" {...basketAnimation} className={Styles.emptyBasket}>
          <h1>Basket is empty</h1>
          <CloseButton onClick={onCLickCLoseBasketHandler}></CloseButton>
        </motion.div>
      );
    }
  };
  const onCLickCLoseBasketHandler = () => {
    setUiToggle((prevData: any) => {
      return { ...prevData, isBasketOpen: false };
    });
  };

  return (
    <EmptyBasket>
      <motion.div id="basket" {...basketAnimation} className={Styles.basket}>
        <div className={Styles.listItem}>
          {basketData?.map((item: any, index: number) => {
            return <BasketItem key={index} {...item} />;
          })}
        </div>
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
    </EmptyBasket>
  );
}

export default Basket;
