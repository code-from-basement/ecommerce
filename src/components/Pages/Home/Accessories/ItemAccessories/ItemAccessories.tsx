import React, { useState } from "react";
import Styles from "./ItemAccessories.module.css";
import { Link } from "react-router-dom";
import StarsBar from "../../../../UI/StarsBar/StarsBar";
import useAddToBasket from "../../../../../hooks/useAddToBasket";
import { motion } from "framer-motion";
import { fadeInAnimation } from "../../../../UI/Animation/Animation";
import { HeartIcon, HeartOffIcon, LoaderCircle, PlusIcon } from "lucide-react";
import useLikeItem from "../../../../../hooks/useLikeItem";

function ItemAccessories({ item }: any) {
  const { addToBasket, error, isLoading } = useAddToBasket();
  const { addItemToFavoriteHandler, likeItemLoading, likeItemError } = useLikeItem();
  const { _id, title, new: isNew, isLiked } = item;
  return (
    <motion.div {...fadeInAnimation} className={Styles.itemContainer}>
      <div className={Styles.itemContainer__action}>
        <button onClick={() => addToBasket(item)}>{isLoading ? <LoaderCircle className={Styles.spinner} /> : <PlusIcon />}</button>
        <button onClick={()=> addItemToFavoriteHandler(item)}>
          {likeItemLoading ? <LoaderCircle className={Styles.spinner}/> : isLiked ? <HeartOffIcon /> : <HeartIcon />}
        </button>
      </div>
      <Link to={`/${title}`}>
        <div className={Styles.itemContainer__tag}>{isNew ? <span className={Styles.tagNew}>New</span> : ""}</div>
        <div className={Styles.itemContainer_header}>
          <img src={`/src/assets/image/${item.images[0]}`} alt={item.title} />
          <div className={Styles.itemContainer__colors}>
            {item.colors.map((color: any, index: number) => {
              return <span key={index} className={Styles.colors__block} style={{ backgroundColor: `${color.hex}` }}></span>;
            })}
          </div>
        </div>

        <div className={Styles.itemContainer__footer}>
          <h2>{item.title}</h2>
          <StarsBar rate_average={item.rate_average} />
          <span>${item.price}</span>
        </div>
      </Link>
    </motion.div>
  );
}

export default ItemAccessories;
