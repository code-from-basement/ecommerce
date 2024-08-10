import { Outlet } from "react-router-dom";
import Row from "../../UI/Row/Row";
import Styles from "./Account.module.css";

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
