import React from "react";
import Styles from "./FooterMenu.module.css";
import instaIcon from "./../../../../assets/icons/logo-instagram.svg";
import facebookIcon from "./../../../../assets/icons/logo-facebook.svg";
import twitterIcon from "./../../../../assets/icons/logo-twitter.svg";
import youtubeIcon from "./../../../../assets/icons/logo-youtube.svg";

function FooterMenu() {
  return (
    <div className={Styles.footerMenu}>
      <div className={Styles.col}>
        <ul className={Styles.col__list}>
          <h2 className={Styles.col__title}>NuPhy Studio</h2>
          <li className={Styles.col__link}>About Us</li>
          <li className={Styles.col__link}>Contact Us</li>
          <li className={Styles.col__link}>Journal</li>
          <li className={Styles.col__link}>Reviews</li>
        </ul>
      </div>
      <div className={Styles.col}>
        <ul className={Styles.col__list}>
          <h2 className={Styles.col__title}>Support</h2>
          <li className={Styles.col__link}>User Manual</li>
          <li className={Styles.col__link}>Console</li>
          <li className={Styles.col__link}>Firmware</li>
          <li className={Styles.col__link}>FAQ</li>
          <li className={Styles.col__link}>Order Tracking</li>
          <li className={Styles.col__link}>Shipping Policy</li>
          <li className={Styles.col__link}>Return Policy</li>
          <li className={Styles.col__link}>Terms & Conditions</li>
        </ul>
      </div>
      <div className={Styles.col}>
        <ul className={Styles.col__list}>
          <h2 className={Styles.col__title}>Get in touch</h2>
          <div className={Styles.socialMediaRow}>
            <li className={Styles.col__link}>
              <img src={instaIcon} alt="Instagram" />
            </li>
            <li className={Styles.col__link}>
              <img src={facebookIcon} alt="facebookIcon" />
            </li>
            <li className={Styles.col__link}>
              <img src={twitterIcon} alt="twitterIcon" />
            </li>
            <li className={Styles.col__link}>
              <img src={youtubeIcon} alt="youtubeIcon" />
            </li>
          </div>
        </ul>
      </div>
      <div className={Styles.col}>
        <ul className={Styles.col__list}>
          <h2 className={Styles.col__title}>We accept</h2>
          <p>
            banks may use text messages to help protect accounts and provide convenient messages to customers. The
            utilization of text messaging varies from bank to bank, so it's important to understand how yours might
            reach out to you once you agree to receive texts from them.
          </p>
        </ul>
      </div>
    </div>
  );
}

export default FooterMenu;
