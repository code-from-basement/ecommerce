import React from "react";
import Styles from "./Side.module.css";
import SideHeader from "./SideHeader/SideHeader";
import SideBody from "./SideBody/SideBody";
import SIdeFooter from "./SideFooter/SIdeFooter";

function Side() {
  return (
    <div className={Styles.side}>
      <SideHeader />
      <SideBody />
      <SIdeFooter />
    </div>
  );
}

export default Side;
