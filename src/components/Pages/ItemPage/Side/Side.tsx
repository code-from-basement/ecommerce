import { DividerH } from "../../../UI/Divider/Divider";
import Styles from "./Side.module.css";
import SideBody from "./SideBody/SideBody";
import SideFooter from "./SideFooter/SideFooter";
import SideHeader from "./SideHeader/SideHeader";

function Side() {
  return (
    <div className={Styles.side}>
      <SideHeader />
      <DividerH />
      <SideBody />
      <SideFooter />
    </div>
  );
}

export default Side;
