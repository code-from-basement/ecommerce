import React from "react";
import Styles from "./Buttons.module.css";
import closeIcon from "./../../../assets/icons/close-outline.svg";

export function ButtonPrimary({ children }: { children: string }) {
  return <button className={Styles.primaryButton}>{children}</button>;
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
