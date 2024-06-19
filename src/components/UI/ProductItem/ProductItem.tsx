import Styles from "./ProductItem.module.css";
import { Link } from "react-router-dom";
import favIconOutline from "./../../../assets/icons/heart-outline.svg";
import { PlusIcon, HeartIcon, HeartOffIcon, LoaderCircle } from "lucide-react";
import StarsBar from "../StarsBar/StarsBar";
import { motion } from "framer-motion";
import { fadeInAnimation } from "../Animation/Animation";
import useAddToBasket from "../../../hooks/useAddToBasket";

const ProductItem = ({ product }: { product: any }) => {
  const { addToBasket, error, isLoading } = useAddToBasket();
  const { _id, title, price, new: isNew, rate_average, colors, description, images } = product;

  return (
    <motion.div {...fadeInAnimation} className={Styles.productItem}>
      <div className={Styles.productItem__action}>
        <button onClick={() => addToBasket(product)}>{isLoading ? <LoaderCircle className={Styles.spinner} /> : <PlusIcon />}</button>
        <button>
          <HeartIcon />
        </button>
      </div>
      <Link to={`/${title}`}>
        <div className={Styles.productItem__tag}>{isNew ? <span className={Styles.tagNew}>New</span> : ""}</div>
        {/* <span className={Styles.tagDiscontinue}>discontinued</span> */}
        <div className={Styles.productItem__header}>
          {colors.length !== 0 && (
            <div className={Styles.productItem__colors}>
              {colors?.map((color: any, index: number) => {
                return <span key={index} className={Styles.colors__block} style={{ backgroundColor: `${color.hex}` }}></span>;
              })}
            </div>
          )}
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

export default ProductItem;
