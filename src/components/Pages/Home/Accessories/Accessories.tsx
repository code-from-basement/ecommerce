import { useEffect, useState } from "react";
import Styles from "./Accessories.module.css";
import ItemAccessories from "./ItemAccessories/ItemAccessories";

function Accessories() {
  //fetch for first five accessories in home page
  const [fiveAccessoriesItems, setFiveAccessoriesItems] = useState([]);

  useEffect(() => {
    const fetchAccessoriesItems = async () => {
      const response = await fetch("http://127.0.0.1:5555/api/products/accessories?first=5");
      const data = await response.json();
      const accessoriesItems = await data.data;
      console.log(accessoriesItems, "accessoriesItems");
      setFiveAccessoriesItems(accessoriesItems);
    };
    fetchAccessoriesItems();
  }, []);

  return (
    <div className={Styles.accessoriesContainer}>
      <h2>Accessories</h2>
      <div className={Styles.accessoriesItems}>
        {fiveAccessoriesItems?.map((item: any, index: number) => (
          <ItemAccessories key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Accessories;
