import React from "react";
import Styles from "./Side.module.css";
import SideHeader from "./SideHeader/SideHeader";
import SideBody from "./SideBody/SideBody";
import SIdeFooter from "./SideFooter/SIdeFooter";
import { DividerH } from "../../../UI/Divider/Divider";

function Side() {
  return (
    <div className={Styles.side}>
      <SideHeader />
      <DividerH />
      <SideBody />
      <SIdeFooter />
    </div>
  );
}

export default Side;
