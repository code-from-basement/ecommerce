import React, { useState } from "react";
import Styles from "./SideBody.module.css";
import checkIcon from "./../../../../../assets/icons/checkmark-outline.svg";
import lockIcon from "./../../../../../assets/icons/lock-closed-outline.svg";
import heartIcon from "./../../../../../assets/icons/heart-outline.svg";
import { ButtonOutline, ButtonPrimary } from "../../../../UI/Buttons/Buttons";
import InStock from "../../../../UI/InStock/InStock";
function SideBody() {
  const [color, setColor] = useState("Ionic White");
  const onChangeColorHandler = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className={Styles.sideBody}>
      <div className={Styles.colorsName}>
        <h2>Colors - </h2>
        <p>&nbsp;{color}</p>
      </div>
      <form className={Styles.sideBody__form} onChange={(e) => onChangeColorHandler(e)}>
        <input className={Styles.input} type="radio" name="group" value="Ionic White" id="input1" defaultChecked />
        <label className={Styles.inputLabel} htmlFor="input1" style={{ backgroundColor: "#e9e9e9" }}></label>
        <input className={Styles.input} type="radio" name="group" value="Basalt Black" id="input2" />
        <label className={Styles.inputLabel} htmlFor="input2" style={{ backgroundColor: "#1f1f1f" }}></label>
        <input className={Styles.input} type="radio" name="group" value="Lunar Gray" id="input3" />
        <label className={Styles.inputLabel} htmlFor="input3" style={{ backgroundColor: "#a4a4a4" }}></label>
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
          <InStock />
          <span>In stock and ships in 1-2 business days </span>
        </div>
      </div>
      <ButtonPrimary>add to basket</ButtonPrimary>
      <ButtonOutline icon={heartIcon}>add to wishlist</ButtonOutline>
    </div>
  );
}

export default SideBody;
