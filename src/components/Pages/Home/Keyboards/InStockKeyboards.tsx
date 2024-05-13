import React, { useEffect, useState } from "react";
import Styles from "./InStockKeyboards.module.css";
import StockKeyboardItems from "./InStockKeyboardItems/StockKeyboardItems";

function InStockKeyboards() {

  //fetch for first five accessories in home page
  const [fiveKeyboardsItems, setFiveKeyboardsItems] = useState([]);

  useEffect(() => {
    const fetchKeyboardsItems = async () => {
      const res = await fetch("http://127.0.0.1:5555/api/products/keyboards?first=5");
      const data = await res.json();
      const keyboardsItems = await data.data;
      console.log(keyboardsItems, "keyboardsItems");
      setFiveKeyboardsItems(keyboardsItems);
    };
    fetchKeyboardsItems();
  }, []);
  
  return (
    <div className={Styles.keyboardsContainer}>
      <h2>In Stock Keyboards</h2>
      <div className={Styles.keyboardsItems}>
        {fiveKeyboardsItems.map((item: any, index: number) => (
          <StockKeyboardItems key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default InStockKeyboards;
