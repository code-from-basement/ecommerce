import ImageViewer from "../../../UI/ImageViewer/ImageViewer";
import Styles from "./ImageGallery.module.css";

export default function ImageGallery({ data }: any) {
  const { images } = data[0];

  return (
    <div className={Styles.imageGallery}>
      <ImageViewer data={images} />
    </div>
  );
}

/* <img src={`/src/assets/image/${imageName}`} alt="" /> */
