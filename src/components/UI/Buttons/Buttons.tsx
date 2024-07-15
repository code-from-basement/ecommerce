import closeIcon from "./../../../assets/icons/close-outline.svg";
import Styles from "./Buttons.module.css";

//*Primary Button
export function ButtonPrimary({ children, icon, disabled, onClick }: { children: any; disabled: boolean; onClick: () => void; icon: JSX.Element }) {
  return (
    <button onClick={onClick || undefined} className={Styles.primaryButton} disabled={disabled}>
      {icon}
      {children}
    </button>
  );
}

// *Outline Button
export function ButtonOutline({ children, icon, onClick, disabled }: { children: string; icon: JSX.Element; onClick: () => void; disabled: boolean }) {
  return (
    <button className={Styles.outlineButton} onClick={onClick || undefined} disabled={disabled}>
      {icon}
      {children}
    </button>
  );
}

// *Close Button
export function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button className={Styles.closeButton} onClick={onClick}>
      <img src={closeIcon} alt="close icon svg" />
    </button>
  );
}

// *Button Secondary
export function ButtonSecondary() {
  return <button>button secondary</button>;
}
