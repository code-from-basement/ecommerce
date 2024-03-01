import React from "react";
import Styles from "./SideHeader.module.css";
import StarsBar from "../../../../UI/StarsBar/StarsBar";

function SideHeader() {
  return (
    <div>
      <p>NuPhy®</p>
      <h1>NuPhy Gem80</h1>
      <p>QMK/VIA Wireless Custom Mechanical Keyboard</p>
      <StarsBar />
      <span>$149.95</span>
    </div>
  );
}

export default SideHeader;
