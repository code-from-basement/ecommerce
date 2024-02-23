import Styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.footer__newsletter}>newsletter</div>
      <div className={Styles.footer__menu}>footer menu</div>
      <div className={Styles.footer__base}>footer base</div>
    </footer>
  );
}

export default Footer;
