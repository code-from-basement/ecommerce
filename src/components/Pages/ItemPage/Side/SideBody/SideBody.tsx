import React, { memo, useState } from "react";
import useAddToBasket from "../../../../../hooks/useAddToBasket";
import { ButtonOutline, ButtonPrimary } from "../../../../UI/Buttons/Buttons";
import InStock from "../../../../UI/InStock/InStock";
import checkIcon from "./../../../../../assets/icons/checkmark-outline.svg";

import lockIcon from "./../../../../../assets/icons/lock-closed-outline.svg";
import Styles from "./SideBody.module.css";
import { ShoppingBasket, HeartIcon, LoaderCircle, PlusIcon, DotIcon, HeartOffIcon } from "lucide-react";
import useLikeItem from "../../../../../hooks/useLikeItem";

const ColorPanelComponent = (colors: any) => {
  return (
    <>
      {colors &&
        colors?.map((item: any, i: number) => {
          return (
            <React.Fragment key={i}>
              <input className={Styles.input} type="radio" id={item.name} name="group" defaultChecked={i === 0 ? true : false} />
              <label className={Styles.inputLabel} htmlFor={item.name} style={{ backgroundColor: `${item.hex}` }}></label>
            </React.Fragment>
          );
        })}
    </>
  );
};

const SideBody = memo(({ ModifiedData }: any) => {
  const { colors, delivery_time, available, isLiked } = ModifiedData[0];
  const [color, setColor] = useState(colors[0]?.name || "");
  const { addToBasket, isLoading, error } = useAddToBasket();
  const {addItemToFavoriteHandler, likeItemLoading} = useLikeItem();

  const onChangeColorHandler = (e: any) => {
    setColor(e.target.id);
  };

  return (
    <div className={Styles.sideBody}>
      <div className={Styles.colorsName}>
        {colors.length > 0 && <h2>Colors - </h2>}
        {colors.length > 0 && <p>&nbsp;{color}</p>}
      </div>
      <form className={Styles.sideBody__form} onChange={(e) => onChangeColorHandler(e)}>
        {ColorPanelComponent(colors)}
      </form>
      <div className={Styles.sideBody__info}>
        <div className={Styles.textAndIcon}>
          <img src={checkIcon} alt="" />
          <span>1-Year Warranty</span>
        </div>
        <div className={Styles.textAndIcon}>
          <img src={lockIcon} alt="" />
          <span>Secure payments</span>
        </div>
        <div className={Styles.textAndIcon}>
          <InStock available={available} />
          <span>
            {`${available === false ? "It is not" : "It is in"}`} stock. {available === false ? "" : `and ships in ${delivery_time - 1}-${delivery_time} business days.`}
          </span>
        </div>
      </div>
      <ButtonPrimary icon={isLoading? <LoaderCircle className={Styles.spinner}/> :<ShoppingBasket />} disabled={!available} onClick={() => {addToBasket(ModifiedData[0])}}>
        {/* {isLoading ? "Add to basket ..." : "Add to basket"} */}
        add to basket
      </ButtonPrimary>
      <ButtonOutline icon={likeItemLoading ? <LoaderCircle className={Styles.spinner} /> : isLiked ? <HeartOffIcon /> : <HeartIcon />} disabled={false} onClick={() => {addItemToFavoriteHandler(ModifiedData[0])}}>
        add to wishlist
      </ButtonOutline>
    </div>
  );
});

export default SideBody;
