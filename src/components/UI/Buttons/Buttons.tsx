import React from "react";
import Styles from "./Buttons.module.css";
import closeIcon from "./../../../assets/icons/close-outline.svg";

export function ButtonPrimary() {
  return <button>button primary</button>;
}

export function ButtonSecondary() {
  return <button>button secondary</button>;
}

export function ButtonOutline() {
  return <button>button outline</button>;
}

export function CloseButton({ onClick }) {
  return (
    <button className={Styles.closeButton} onClick={onClick}>
      <img src={closeIcon} alt="close icon svg" />
    </button>
  );
}
