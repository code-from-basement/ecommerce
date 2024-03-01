import React from "react";
import Styles from "./CollapseBar.module.css";
import ArrowIcon from "./../../../assets/icons/chevron-down-outline.svg";

function CollapseBar({ data }: { data: { title: string; content: string; disable: boolean } }) {
  const { title, content, disable } = data;

  const onCLickCollapseBarHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const nextTarget = e.target.nextElementSibling;
    nextTarget?.classList.toggle(Styles.collapseBar__content__active);
    const target = e.target;
    target?.classList.toggle(Styles.collapseBar__btn__active);
  };

  return (
    <div className={Styles.collapseBar}>
      <button className={Styles.collapseBar__btn} onClick={(e) => onCLickCollapseBarHandler(e)} disabled={disable}>
        {title}
        <img src={ArrowIcon} alt="arrow icon" />
      </button>
      <div className={Styles.collapseBar__content}>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default CollapseBar;
