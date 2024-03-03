import react, { useEffect } from "react";
import { useGlobalContext } from "../../../context/globalContext";
import { basketAnimation } from "../Animation/Animation";
import { CloseButton } from "../Buttons/Buttons";
import Styles from "./Basket.module.css";
import { motion } from "framer-motion";

function Basket() {
  const { uiToggle, setUiToggle } = useGlobalContext();
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

  return (
    <EmptyBasket>
      <motion.div id="basket" {...basketAnimation} className={Styles.container}>
        <h2>item </h2>
        <h2>item </h2>
        <h2>item </h2>
        <h2>item </h2>
      </motion.div>
    </EmptyBasket>
  );
}

export default Basket;
