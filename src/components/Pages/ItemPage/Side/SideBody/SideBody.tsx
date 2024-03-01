import React from "react";
import Styles from "./SideBody.module.css";
import { ButtonOutline, ButtonPrimary } from "../../../../UI/Buttons/Buttons";
function SideBody() {
  return (
    <div className={Styles.sideBody}>
      <form className={Styles.sideBody__form}>
        <label htmlFor="color1">
          label 1
          <input type="radio" id="color1" />
        </label>
        <label htmlFor="color2">
          label 2
          <input type="radio" id="color2" />
        </label>
        <label htmlFor="color3">
          label 3
          <input type="radio" id="color3" />
        </label>
      </form>
      <div></div>
      <div></div>
      <ButtonPrimary>add to basket</ButtonPrimary>
      <ButtonOutline>add to wishlist</ButtonOutline>
    </div>
  );
}

export default SideBody;
