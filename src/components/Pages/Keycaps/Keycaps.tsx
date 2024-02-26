import React from "react";
import Styles from "./Keycaps.module.css";
import Row from "../../UI/Row/Row";
function Keycaps() {
  return (
    <div className={Styles.keycaps}>
      <Row>
        <h1>Keycaps</h1>
      </Row>
    </div>
  );
}

export default Keycaps;
