import { useState } from "react";
import ImageChangerPanel from "../ImageChangerPanel/ImageChangerPanel";
import styles from "./ImageViewer.module.css";

export default function ImageViewer({ data }: any) {
  const [selectedImage, setSelectedImage] = useState(data[0]);
  const onClickChangeImage = (value: string) => {
    setSelectedImage(value);
  };
  return (
    <div className={styles.container}>
      <img className={styles.selectedImage} src={`/src/assets/image/${selectedImage}`} alt={selectedImage} />
      <ImageChangerPanel data={data} onClick={onClickChangeImage} />
    </div>
  );
}
