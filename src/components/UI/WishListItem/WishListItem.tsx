import { motion } from "framer-motion";
import { HeartIcon, HeartOffIcon, LoaderCircle, PlusIcon } from "lucide-react";
import { Link } from "react-router-dom";
import useAddToBasket from "../../../hooks/useAddToBasket";
import useLikeItem from "../../../hooks/useLikeItem";
import { fadeInAnimation } from "../Animation/Animation";
import StarsBar from "../StarsBar/StarsBar";
import Styles from "./WishListItem.module.css";

const WishListItem = ({ data }: { data: any }) => {
  const { addToBasket, error, isLoading } = useAddToBasket();
  const { addItemToFavoriteHandler, likeItemLoading, likeItemError } = useLikeItem();
  const { _id, title, price, new: isNew, rate_average, colors, description, images } = data;

  return (
    <motion.div {...fadeInAnimation} className={Styles.productItem}>
      <div className={Styles.productItem__action}>
        <button onClick={() => addToBasket(data)}>{isLoading ? <LoaderCircle className={Styles.spinner} /> : <PlusIcon />}</button>
        <button onClick={() => addItemToFavoriteHandler(data)}>{likeItemLoading ? <LoaderCircle className={Styles.spinner} /> : <HeartOffIcon />}</button>
      </div>
      <Link to={`/${title}`}>
        <div className={Styles.productItem__tag}>{isNew ? <span className={Styles.tagNew}>New</span> : ""}</div>
        {/* <span className={Styles.tagDiscontinue}>discontinued</span> */}
        <div className={Styles.productItem__header}>
          {/* {colors.length !== 0 && (
            <div className={Styles.productItem__colors}>
              {colors?.map((color: any, index: number) => {
                return <span key={index} className={Styles.colors__block} style={{ backgroundColor: `${color.hex}` }}></span>;
              })}
            </div>
          )} */}
          <img src={`/src/assets/image/${images[0]}`} alt={title} />
        </div>
        <div className={Styles.productItem__footer}>
          <h2>{title}</h2>
          <p>{description}</p>
          <StarsBar rate_average={rate_average} />
          <span>${price}</span>
        </div>
      </Link>
    </motion.div>
  );
};

export default WishListItem;
