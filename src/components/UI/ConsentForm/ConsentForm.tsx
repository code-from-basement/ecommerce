import { useCookies } from "react-cookie";
import { ButtonSecondary } from "../Buttons/Buttons";
import Styles from "./ConsentForm.module.css";

export default function ConsentForm() {
  const [cookie, setCookie] = useCookies(["_CTAConsent"]);
  const setCookieHandler = () => {
    setCookie("_CTAConsent", true, {
      expires: new Date(Date.now() + 1000 * 60 * 60),
    });
  };
  return (
    <section className={Styles.container}>
      <div className={Styles.content}>
        <h1 className={Styles.title}>We value your pricey:</h1>
        <p className={Styles.text}>
          We are using cookies and other technologies to enhance your user experience by using outer website, you agree
          to our of cookies,{" "}
        </p>
      </div>
      <ButtonSecondary disabled={false} onClick={setCookieHandler} icon={undefined}>
        Accept
      </ButtonSecondary>
    </section>
  );
}
