import React from "react";
import Styles from "./ProductItem.module.css";
import { Link } from "react-router-dom";
import favIconOutline from "./../../../assets/icons/heart-outline.svg";
import favIconFill from "./../../../assets/icons/heart.svg";
import addIcon from "./../../../assets/icons/add-outline.svg";
import StarsBar from "../StarsBar/StarsBar";
import { motion } from "framer-motion";
import { fadeInAnimation, fadeInImage } from "../Animation/Animation";

function ProductItem({ product }: { product: any }) {
  const { _id, title, price, new: isNew, rate_average, colors, description, images } = product;

  return (
    <motion.div {...fadeInAnimation} className={Styles.productItem}>
      <Link to="#">
        <div className={Styles.productItem__action}>
          <button id={_id}>
            <img src={favIconOutline} alt="" />
          </button>
          <button id={_id}>
            <img src={addIcon} alt="" />
          </button>
        </div>

        <div className={Styles.productItem__tag}>{isNew ? <span className={Styles.tagNew}>New</span> : ""}</div>
        {/* <span className={Styles.tagDiscontinue}>discontinued</span> */}
        <div className={Styles.productItem__colors}>
          {colors?.map((color: any, index: number) => {
            return <span key={index} className={Styles.colors__block} style={{ backgroundColor: `${color.hex}` }}></span>;
          })}
        </div>
        <div className={Styles.productItem__header}>
          <motion.img {...fadeInImage} src={`/src/assets/image/${images[0]}`} alt={title} />
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

export default ProductItem;
