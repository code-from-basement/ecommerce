import React from "react";
import Styles from "./ItemPage.module.css";
import ImageGallery from "./ImageGallery/ImageGallery";
import Side from "./Side/Side";

function ItemPage() {
  return (
    <div className={Styles.itemPage}>
      <ImageGallery />
      <Side />
    </div>
  );
}

export default ItemPage;
