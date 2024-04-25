import { DividerH } from "../../../UI/Divider/Divider";
import Styles from "./Side.module.css";
import SideBody from "./SideBody/SideBody";
import SideFooter from "./SideFooter/SideFooter";
import SideHeader from "./SideHeader/SideHeader";

function Side(data: any) {
  return (
    <div className={Styles.side}>
      <SideHeader {...data} />
      <DividerH />
      <SideBody sideBodyData={data} />
      <SideFooter />
    </div>
  );
}

export default Side;
