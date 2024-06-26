import Styles from "./SearchProductItem.module.css";
import { fadeInSearchProductItemAnimation } from "../Animation/Animation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import StarsBar from "../StarsBar/StarsBar";
import useAddToBasket from "../../../hooks/useAddToBasket";
import { HeartIcon, LoaderCircle, PlusIcon } from "lucide-react";
export default function SearchProductItem({ data }: any) {
  const { addToBasket, error, isLoading } = useAddToBasket();
  const { _id, title, price, images, rate_average, description, new: isNew, colors } = data;

  return (
    <motion.div {...fadeInSearchProductItemAnimation} className={Styles.productItem}>
      <div className={Styles.productItem__action}>
        <button onClick={() => addToBasket(data)}>{isLoading ? <LoaderCircle className={Styles.spinner} /> : <PlusIcon />}</button>
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
}
