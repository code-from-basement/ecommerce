import Styles from "./InStock.module.css";

function InStock({ available }: { available: boolean }) {
  console.log(available);
  return (
    <div className={Styles.inStock} style={{ backgroundColor: `${available === true ? "var(--color-green)" : "var(--color-red)"}` }}>
      <div
        className={Styles.InStockLayer}
        style={{ backgroundColor: `${available === true ? "var(--color-green)" : "var(--color-red)"}` }}
      ></div>
      &nbsp;
    </div>
  );
}

export default InStock;
