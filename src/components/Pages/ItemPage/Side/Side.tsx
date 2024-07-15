import { DividerH } from "../../../UI/Divider/Divider";
import Styles from "./Side.module.css";
import SideBody from "./SideBody/SideBody";
import SideFooter from "./SideFooter/SideFooter";
import SideHeader from "./SideHeader/SideHeader";

function Side(ModifiedData: any) {
  return (
    <div className={Styles.side}>
      <SideHeader {...ModifiedData} />
      <DividerH />
      <SideBody {...ModifiedData} />
      <SideFooter />
    </div>
  );
}

export default Side;
