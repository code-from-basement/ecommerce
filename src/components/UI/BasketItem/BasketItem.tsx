import Styles from "./BasketItem.module.css";
import { PlusIcon, MinusIcon, Trash2Icon } from "lucide-react";
export default function BasketItem(item: any) {
  return (
    <div className={Styles.container}>
      <button className={Styles.btn__delete}>
        <Trash2Icon />
      </button>
      <div className={Styles.imageContainer}>
        <img src={`src/assets/image/${item.images[0]}`} alt="image of the added product" />
      </div>
      <div className={Styles.contentContainer}>
        <h2 className={Styles.contentContainer__title}>{item.title}</h2>
        <h3 className={Styles.contentContainer__description}>{item.description}</h3>
        <div className={Styles.counterContainer}>
          <div className={Styles.controllers}>
            <button disabled={item.quantity === 1 ? true : false}>
              <MinusIcon />
            </button>
            <p className={Styles.controllers__num}>{item.quantity}</p>
            <button>
              <PlusIcon />
            </button>
          </div>
          <div className={Styles.unitPrice}>
            <p>{item.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
