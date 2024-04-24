import { useGlobalContext } from "../../../../context/globalContext";
import Styles from "./Accessories.module.css";
import ItemAccessories from "./ItemAccessories/ItemAccessories";

function Accessories() {
  const { fiveAccessoriesItems } = useGlobalContext();
  return (
    <div className={Styles.accessoriesContainer}>
      <h2>Accessories</h2>
      <div className={Styles.accessoriesItems}>
        {fiveAccessoriesItems.map((item: any, index: number) => (
          <ItemAccessories key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Accessories;
