import React from "react";
import Styles from "./Row.module.css";

function Row({ children }: { children: React.ReactNode }) {
  return <div className={Styles.row}>{children}</div>;
}

export default Row;
