import { useState } from "react";
import styles from "./ImageChangerPanel.module.css";

export default function ImageChangerPanel({ data, onClick }: any) {
  const [indexNum, setIndexNum] = useState(0);
  const onClickSendValueToParent = (value: string, index: any) => {
    onClick(value);
    setIndexNum(index);
  };

  return (
    <div className={styles.container}>
      {data?.map((item: string, index: number) => {
        return (
          <button
            key={index}
            className={index === indexNum ? `${styles.btn} ${styles.active}` : `${styles.btn}`}
            onClick={() => onClickSendValueToParent(item, index)}
          >
            <img src={`/src/assets/image/${item}`} alt="" />
          </button>
        );
      })}
    </div>
  );
}
