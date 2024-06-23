import { MinusIcon, PlusIcon, Trash2Icon } from "lucide-react";
import useDeleteBasketItem from "../../../hooks/useDeleteBasketItem";
import Styles from "./BasketItem.module.css";
import { Loader2 } from "lucide-react";
import useIncrementBasketItem from "../../../hooks/useIncrementBasketItem";
import { motion } from "framer-motion";
import { basketItemAnimation } from "../Animation/Animation";
import useDecrementBasketItem from "../../../hooks/useDecrementBasketItem";

export default function BasketItem(item: any) {
  const { deleteBasketItemHandler, isLoading: deleteLoading, error: deleteError } = useDeleteBasketItem();
  const { incrementBasketItemHandler, incrementLoading, incrementError } = useIncrementBasketItem();
  const { decrementBasketItemHandler, decrementLoading, decrementError } = useDecrementBasketItem();

  const LoadingLayout = () => {
    return (
      <motion.div {...basketItemAnimation} className={Styles.loadingLayout}>
        <Loader2 />
      </motion.div>
    );
  };

  return (
    <div className={Styles.container}>
      {deleteLoading && <LoadingLayout />}
      {incrementLoading && <LoadingLayout />}
      {decrementLoading && <LoadingLayout />}
      <button className={Styles.btn__delete} onClick={() => deleteBasketItemHandler(item?._id)}>
        <Trash2Icon />
      </button>
      <div className={Styles.imageContainer}>
        <img src={`src/assets/image/${item?.images[0]}`} alt="image of the added product" />
      </div>
      <div className={Styles.contentContainer}>
        <h2 className={Styles.contentContainer__title}>{item?.title}</h2>
        <h3 className={Styles.contentContainer__description}>{item?.description}</h3>
        <div className={Styles.counterContainer}>
          <div className={Styles.controllers}>
            <button disabled={item?.quantity === 1 ? true : false} onClick={() => decrementBasketItemHandler(item)}>
              <MinusIcon />
            </button>
            <p className={Styles.controllers__num}>{item?.quantity}</p>
            <button onClick={() => incrementBasketItemHandler(item)}>
              <PlusIcon />
            </button>
          </div>
          <div className={Styles.unitPrice}>
            <p>${item?.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
