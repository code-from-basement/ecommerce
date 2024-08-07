import React from "react";
import Styles from "./Account.module.css";
import Row from "../../UI/Row/Row";
import { Outlet } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

function Account() {
  return (
    <Row>
      <div className={Styles.account}>
        <Outlet />
      </div>
    </Row>
  );
}

export default Account;
