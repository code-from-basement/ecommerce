import Styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.footer__newsletter}>
        <h2 className={Styles.newsletter__title}>Join our email list to know our project updates, exclusive offers, and more.</h2>
        <div className={Styles.newsletter__subscription}>
          <input className={Styles.newsletter__input} type="email" placeholder="Email Address" />
          <button className={Styles.newsletter__btnSubmit}>subscribe</button>
        </div>
      </div>
      <div className={Styles.footer__menu}>footer menu</div>
      <div className={Styles.footer__base}>
        <p>© 2024 NuPhy® | Wireless Mechanical Keyboards for Mac and Windows</p>
      </div>
    </footer>
  );
}

export default Footer;
