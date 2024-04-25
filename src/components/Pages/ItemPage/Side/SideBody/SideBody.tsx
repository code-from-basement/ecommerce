import React, { useState } from "react";
import { ButtonOutline, ButtonPrimary } from "../../../../UI/Buttons/Buttons";
import InStock from "../../../../UI/InStock/InStock";
import checkIcon from "./../../../../../assets/icons/checkmark-outline.svg";
import heartIcon from "./../../../../../assets/icons/heart-outline.svg";
import lockIcon from "./../../../../../assets/icons/lock-closed-outline.svg";
import Styles from "./SideBody.module.css";

function SideBody({ sideBodyData }: any) {
  const { colors, delivery_time, available } = sideBodyData.data[0];
  const [color, setColor] = useState("Ionic White");

  const onChangeColorHandler = (e: any) => {
    setColor(e.target.value);
    const target = e.target;
    const parent = target.parentElement;
    const labels = parent.querySelectorAll("label");
    console.log(labels);
    // labels.forEach((label: any) => {
    //   label.classList.remove("active");
    // });
  };

  const ColorPanelComponent = () => {
    return (
      <>
        {colors?.map((item: any, i: number) => {
          return (
            <React.Fragment key={i}>
              <input className={Styles.input} type="radio" name="group" value={item.name} id={item.name} />
              <label className={Styles.inputLabel} htmlFor={item.name} style={{ backgroundColor: `${item.hex}` }}></label>
            </React.Fragment>
          );
        })}
      </>
    );
  };

  return (
    <div className={Styles.sideBody}>
      <div className={Styles.colorsName}>
        <h2>Colors - </h2>
        <p>&nbsp;{color}</p>
      </div>
      <form className={Styles.sideBody__form} onChange={(e) => onChangeColorHandler(e)}>
        <ColorPanelComponent />
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
            {`${available === false ? "It is not" : "It is in"}`} stock{" "}
            {available === false ? "" : `and ships in ${delivery_time - 1}-${delivery_time} business days.`}
          </span>
        </div>
      </div>
      <ButtonPrimary>add to basket</ButtonPrimary>
      <ButtonOutline icon={heartIcon}>add to wishlist</ButtonOutline>
    </div>
  );
}

export default SideBody;
