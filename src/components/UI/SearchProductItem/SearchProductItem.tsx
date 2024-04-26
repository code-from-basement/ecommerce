import React from "react";
import Styles from "./SearchProductItem.module.css";
import { fadeInAnimation } from "../Animation/Animation";
import favIconOutline from "./../../../assets/icons/heart-outline.svg";
import addIcon from "./../../../assets/icons/add-outline.svg";
import favIconFill from "./../../../assets/icons/heart.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import StarsBar from "../StarsBar/StarsBar";
export default function SearchProductItem({ data }: any) {
  const { _id, title, price, images, rate_average, description, new: isNew, colors } = data;

  return (
    <motion.div {...fadeInAnimation} className={Styles.productItem}>
      <Link to={`/${title}`}>
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

        {colors.length === 0 ? null : (
          <div className={Styles.productItem__colors}>
            {colors?.map((color: any, index: number) => {
              return <span key={index} className={Styles.colors__block} style={{ backgroundColor: `${color.hex}` }}></span>;
            })}
          </div>
        )}
        <div className={Styles.productItem__header}>
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
