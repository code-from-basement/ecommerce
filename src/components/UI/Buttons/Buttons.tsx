import React from "react";
import Styles from "./Buttons.module.css";
import closeIcon from "./../../../assets/icons/close-outline.svg";

export function ButtonPrimary({
  children,
  disabled,
  onClick,
}: {
  children: string;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button onClick={onClick} className={Styles.primaryButton} disabled={disabled}>
      {children}
    </button>
  );
}

export function ButtonSecondary() {
  return <button>button secondary</button>;
}

export function ButtonOutline({ children, icon }: { children: string; icon: string | undefined }) {
  return (
    <button className={Styles.outlineButton}>
      <img src={icon} alt="" />
      {children}
    </button>
  );
}

export function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button className={Styles.closeButton} onClick={onClick}>
      <img src={closeIcon} alt="close icon svg" />
    </button>
  );
}
