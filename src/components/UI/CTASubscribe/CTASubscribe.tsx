import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import { ButtonPrimary } from "../Buttons/Buttons";
import Styles from "./CTASubscribe.module.css";
import { XIcon } from "lucide-react";

export default function CTASubscribe() {
  const [cookie, setCookie] = useCookies(["_CTASub"]);
  const setCookieHandler = () => {
    setCookie("_CTASub", true, {
      expires: new Date(Date.now() + 1000 * 60),
    });
  };

  return (
    <div className={Styles.CTASubscribe}>
      <div className={Styles.container}>
        <button className={Styles.closeBtn}>
          <XIcon />
        </button>
        <div className={Styles.imageSection}></div>
        <div className={Styles.formSection}>
          <h1 className={Styles.formSection__title}>
            Join the list. <br /> Save $10 today
          </h1>
          <p className={Styles.formSection__subTitle}>Subscribe to our newsletter and get 10% off your first purchase.</p>
          <div>
            <input type="email" style={{ width: "100%", marginBottom: "1rem" }} placeholder="Enter your email" />
            <ButtonPrimary style={{ width: "100%" }} disabled={false} onClick={setCookieHandler}>
              Subscribe
            </ButtonPrimary>
          </div>
          <p className={Styles.formSection__detailText}>You can unsubscribe any time.</p>
          <Link className={Styles.formSection__noThanksBtn} to="#">
            No Thanks
          </Link>
        </div>
      </div>
    </div>
  );
}
