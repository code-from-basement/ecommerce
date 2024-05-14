import React, { useEffect, useState } from "react";
import Styles from "./Style.module.css";
import StyleItems from "./StylesItems/StyleItems";

function Style() {
  //fetch for first five styles in home page
  const [fiveStylesItems, setFiveStylesItems] = useState([]);

  useEffect(() => {
    const fetchKeyboardsItems = async () => {
      const res = await fetch("http://127.0.0.1:5555/api/products/keycaps?first=5");
      const data = await res.json();
      const stylesItems = await data.data;
      setFiveStylesItems(stylesItems);
    };
    fetchKeyboardsItems();
  }, []);

  return (
    <div className={Styles.styleContainer}>
      <h2>Create Your Style</h2>
      <div className={Styles.styleItems}>
        {fiveStylesItems.map((item: any, index: number) => (
          <StyleItems key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Style;
