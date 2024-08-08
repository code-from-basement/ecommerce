import { useLocation } from "react-router-dom";
import Styles from "./Error.module.css";

export default function AccountError() {
  const location = useLocation();

  if (location.state.message) {
    return (
      <div className={Styles.container}>
        <div className={Styles.content}>
          <h1 className={Styles.contentTitle}>404</h1>
          {location.state.message ? <h2>{`${location?.state.message}`}</h2> : ""}
          <br />
          <h3>Soothing went wrong, you can choose what direction you want to go:</h3>
        </div>
        <br />
        <div className={Styles.links}>
          <a href="/" className={Styles.link}>
            Home
          </a>
          <a href="/account" className={Styles.link}>
            Account
          </a>
        </div>
      </div>
    );
  }
  return null;
}
