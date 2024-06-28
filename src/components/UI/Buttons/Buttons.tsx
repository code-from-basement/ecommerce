import closeIcon from "./../../../assets/icons/close-outline.svg";
import Styles from "./Buttons.module.css";

export function ButtonPrimary({ children, disabled, onClick, style }: { children: string; disabled: boolean; onClick: () => void; style: any }) {
  return (
    <button style={style} onClick={onClick || undefined} className={Styles.primaryButton} disabled={disabled}>
      {children}
    </button>
  );
}

export function ButtonSecondary() {
  return <button>button secondary</button>;
}

export function ButtonOutline({ children, icon, onClick }: { children: string; icon: string | undefined, onClick: () => void }) {
  return (
    <button className={Styles.outlineButton} onClick={onClick || undefined}>
      <img src={icon} alt="button outline" />
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
