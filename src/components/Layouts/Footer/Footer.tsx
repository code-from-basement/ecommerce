import Styles from "./Footer.module.css";
import FooterMenu from "./FooterMenu/FooterMenu";

function Footer() {
  const subscribeHandler = async () => {
    try {
      const subscriptionResponse = await fetch("http://127.0.0.1:5555/api/subscribe", { method: "POST" });
      await subscriptionResponse.json();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <footer className={Styles.footer}>
      <div className={Styles.footer__newsletter}>
        <h2 className={Styles.newsletter__title}>
          Join our email list to know our project updates, exclusive offers, and more.
        </h2>
        <div className={Styles.newsletter__subscription}>
          <input className={Styles.newsletter__input} type="email" placeholder="Email Address" />
          <button onClick={subscribeHandler} className={Styles.newsletter__btnSubmit}>
            subscribe
          </button>
        </div>
      </div>
      <div className={Styles.footer__menu}>
        <FooterMenu />
      </div>
      <div className={Styles.footer__base}>
        <p>© 2024 NuPhy® | Wireless Mechanical Keyboards for Mac and Windows</p>
      </div>
    </footer>
  );
}

export default Footer;
