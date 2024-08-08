import closeIcon from "./../../../assets/icons/close-outline.svg";
import Styles from "./Buttons.module.css";

//*Primary Button
export function ButtonPrimary({
  children,
  icon,
  disabled,
  onClick,
  style,
}: {
  children: any;
  disabled: boolean | undefined;
  onClick: () => void;
  icon: JSX.Element | undefined;
  style: any;
}) {
  return (
    <button style={style} onClick={onClick || undefined} className={Styles.primaryButton} disabled={disabled}>
      {icon}
      {children}
    </button>
  );
}

// *Outline Button
export function ButtonOutline({
  children,
  icon,
  onClick,
  disabled,
}: {
  children: string;
  icon: JSX.Element;
  onClick: () => void;
  disabled: boolean;
}) {
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
export function ButtonSecondary({
  children,
  icon,
  onClick,
  disabled,
}: {
  children: String;
  onClick: () => void;
  disabled: boolean;
  icon: JSX.Element | undefined;
}) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {icon}
      {children}
    </button>
  );
}
