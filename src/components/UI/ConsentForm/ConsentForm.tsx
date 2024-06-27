import { ButtonPrimary } from "../Buttons/Buttons";
import Styles from "./ConsentForm.module.css";

export default function ConsentForm() {
  return (
    <section className={Styles.container}>
      <div className={Styles.content}>
        <h1 className={Styles.title}>Cookie Consent:</h1>
        <p className={Styles.text}>We are using cookies to enhance your user experience by using outr website, you agreeto our of cookies, </p>
      </div>
      <ButtonPrimary onClick={() => {}}>Accept</ButtonPrimary>
    </section>
  );
}
