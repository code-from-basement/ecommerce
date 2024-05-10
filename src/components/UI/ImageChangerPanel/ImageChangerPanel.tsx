import styles from "./ImageChangerPanel.module.css";

export default function ImageChangerPanel({ data, onClick }: any) {
  let selectedImageIndex = 0;
  const onClickSendValueToParent = (value: string, index: any) => {
    onClick(value);
  };

  return (
    <div className={styles.container}>
      {data?.map((item: string, index: number) => {
        return (
          <button key={index} className={styles.btn} onClick={() => onClickSendValueToParent(item, index)}>
            <img src={`/src/assets/image/${item}`} alt="" />
          </button>
        );
      })}
    </div>
  );
}
