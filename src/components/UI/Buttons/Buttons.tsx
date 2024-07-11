import closeIcon from "./../../../assets/icons/close-outline.svg";
import Styles from "./Buttons.module.css";

//
export function ButtonPrimary({ children, icon, disabled, onClick, style }: { children: string; disabled: boolean; onClick: () => void; style: any; icon: JSX.Element }) {
  return (
    <button style={style} onClick={onClick || undefined} className={Styles.primaryButton} disabled={disabled}>
      {/* <img src={icon ?? ""} alt="button outline" /> */}
      {icon}
      {children}
    </button>
  );
}

//
export function ButtonOutline({ children, icon, onClick, style, disabled }: { children: string; icon: JSX.Element; onClick: () => void; style: any; disabled: boolean }) {
  return (
    <button style={style} className={Styles.outlineButton} onClick={onClick || undefined} disabled={disabled}>
      {/* <img src={icon ?? ""} alt="button outline" /> */}
      {icon}
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
export function ButtonSecondary() {
  return <button>button secondary</button>;
}
