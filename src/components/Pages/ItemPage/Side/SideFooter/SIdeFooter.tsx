import CollapseBar from "../../../../UI/CollapseBar/CollapseBar";
import Styles from "./SideFooter.module.css";

function SideFooter() {
  const contentDummy1 =
    "All orders will be shipped by NuPhy within 48 hours of order confirmation, tracking numbers are provided no later than a day after shipment on business days. You can check Shipping Policy for more information.";
  const contentDummy2 =
    "NuPhy offers a 1-year limited warranty for all NuPhy products. If there is any quality issue, please send relevant images or videos to service@nuphy.com for review.";
  return (
    <div className={Styles.sideFooter}>
      <CollapseBar data={{ title: "SHIPPING INFORMATION", content: contentDummy1, disable: false }} />
      <CollapseBar data={{ title: "WARRANTY POLICY", content: contentDummy2, disable: false }} />
    </div>
  );
}

export default SideFooter;
