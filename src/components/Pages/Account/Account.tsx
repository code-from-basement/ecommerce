import React from "react";
import Styles from "./Account.module.css";
import Row from "../../UI/Row/Row";

function Account() {
  return (
    <div className={Styles.account}>
      <Row>
        <h1>Account</h1>
      </Row>
    </div>
  );
}

export default Account;
