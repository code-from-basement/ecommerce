import Styles from "./BasketItem.module.css";
import { PlusIcon, MinusIcon } from "lucide-react";
export default function BasketItem() {
  return (
    <div className={Styles.container}>
      <div className={Styles.imageContainer}></div>
      <div className={Styles.contentContainer}>
        <h2 className={Styles.contentContainer__title}>title</h2>
        <h3 className={Styles.contentContainer__description}>description</h3>
        <div className={Styles.counterContainer}>
          <div className={Styles.controllers}>
            <button>
              <MinusIcon />
            </button>
            <p className={Styles.controllers__num}>1</p>
            <button>
              <PlusIcon />
            </button>
          </div>
          <div className={Styles.unitPrice}>
            <p>$0.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
