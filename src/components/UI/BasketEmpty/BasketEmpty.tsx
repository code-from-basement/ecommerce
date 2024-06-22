import { motion } from "framer-motion";
import { useGlobalContext } from "../../../context/globalContext";
import { basketAnimation } from "../Animation/Animation";
import { CloseButton } from "../Buttons/Buttons";
import Styles from "./BasketEmpty.module.css";

function BasketEmpty() {
  const { setUiToggle } = useGlobalContext();
  const onCLickCLoseBasketHandler = () => {
    setUiToggle((prevData: any) => {
      return { ...prevData, isBasketOpen: false };
    });
  };
  return (
    <div>
      <motion.div id="basket" {...basketAnimation} className={Styles.emptyBasket}>
        <h1>Basket is empty</h1>
        <CloseButton onClick={onCLickCLoseBasketHandler}></CloseButton>
      </motion.div>
    </div>
  );
}

export default BasketEmpty;
