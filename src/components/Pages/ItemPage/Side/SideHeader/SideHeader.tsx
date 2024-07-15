import StarsBar from "../../../../UI/StarsBar/StarsBar";
import Styles from "./SideHeader.module.css";

function SideHeader({ ModifiedData }: any) {
  const { title, price, rate_average, description } = ModifiedData[0];
  return (
    <div className={Styles.sideHeader}>
      <p>NuPhy®</p>
      <h1>{title}</h1>
      <p>{description}</p>
      <StarsBar rate_average={rate_average} />
      <span>${price}</span>
    </div>
  );
}

export default SideHeader;
