import { motion } from "framer-motion";
import { Loader2, MinusIcon, PlusIcon, Trash2Icon } from "lucide-react";
import useDecrementBasketItem from "../../../hooks/useDecrementBasketItem";
import useDeleteBasketItem from "../../../hooks/useDeleteBasketItem";
import useIncrementBasketItem from "../../../hooks/useIncrementBasketItem";
import { basketItemAnimation } from "../Animation/Animation";
import Styles from "./CheckoutItem.module.css";
export default function CheckoutItem({ item }: { item: any }) {
  const { deleteBasketItemHandler, deleteLoading, deleteError } = useDeleteBasketItem();
  const { incrementBasketItemHandler, incrementLoading, incrementError } = useIncrementBasketItem();
  const { decrementBasketItemHandler, decrementLoading, decrementError } = useDecrementBasketItem();

  const LoadingLayout = () => {
    return (
      <motion.div {...basketItemAnimation} className={Styles.loadingLayout}>
        <Loader2 size={36} />
      </motion.div>
    );
  };

  return (
    <div className={Styles.container}>
      {deleteLoading && <LoadingLayout />}
      {incrementLoading && <LoadingLayout />}
      {decrementLoading && <LoadingLayout />}
      <div className={Styles.imageContainer}>
        <img src={`src/assets/image/${item?.images[0]}`} alt="image of the added product" />
      </div>
      <div className={Styles.contentContainer}>
        <h2 className={Styles.contentContainer__title}>{item?.title}</h2>
        <h3 className={Styles.contentContainer__description}>{item?.description}</h3>
      </div>
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
      <div className={Styles.deleteContainer}>
        <button className={Styles.btn__delete} onClick={() => deleteBasketItemHandler(item?._id)}>
          <Trash2Icon />
        </button>
      </div>
    </div>
  );
}
