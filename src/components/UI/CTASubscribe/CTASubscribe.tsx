import { useEffect } from "react";
import Styles from "./CTASubscribe.module.css";
import { useCookies } from "react-cookie";

export default function CTASubscribe() {
  const [cookie, setCookie] = useCookies(["_CTASub"]);
  const setCookieHandler = () => {
    setCookie("_CTASub", true);
  };

  return (
    <div className={Styles.CTASubscribe}>
      <div className={Styles.container}>
        <section className={Styles.section}>
          <img src="#" alt="" />
          image
        </section>
        <section className={Styles.section}>
          <h1>Subscribe to our newsletter</h1>
          <p>Subscribe to our newsletter and get 10% off your first purchase</p>
          <div>
            <input type="email" placeholder="Enter your email" />
            <button onClick={setCookieHandler}>Subscribe</button>
          </div>
        </section>
      </div>
    </div>
  );
}
