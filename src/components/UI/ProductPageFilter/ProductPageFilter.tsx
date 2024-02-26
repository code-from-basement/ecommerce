import { DividerH } from "../Divider/Divider";
import arrowIcon from "./../../../assets/icons/chevron-down-outline.svg";
import Styles from "./ProductPageFilter.module.css";

function Filters() {
  const onClickCollapseTrigger = (e) => {
    e.preventDefault();
    e.target.nextElementSibling.classList.toggle(Styles.collapseBoxActive);
    e.target.classList.toggle(Styles.filterItemActive);
  };

  return (
    <div className={Styles.filters}>
      <form className={Styles.form}>
        <h2 className={Styles.filters__title}>Keyboards</h2>
        <DividerH />
        <div className={Styles.filterItem}>
          <button onClick={(e) => onClickCollapseTrigger(e)}>
            keyboards profile
            <img src={arrowIcon} alt="" />
          </button>
          <div className={Styles.collapseBox}>
            <ul>
              <li>
                <label className={Styles.itemLabel} htmlFor="#1">
                  <input className={Styles.itemInput} type="checkbox" id="#1" />
                  <span className={Styles.itemTitle}>low-profile {`(6)`}</span>
                </label>
              </li>
              <li>
                <label className={Styles.itemLabel} htmlFor="#2">
                  <input className={Styles.itemInput} type="checkbox" id="#2" />
                  <span className={Styles.itemTitle}>normal-profile {`(6)`}</span>
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div className={Styles.filterItem}>
          <button onClick={(e) => onClickCollapseTrigger(e)}>
            Series
            <img src={arrowIcon} alt="" />
          </button>
          <div className={Styles.collapseBox}>
            <ul>
              <li>
                <label className={Styles.itemLabel} htmlFor="#3">
                  <input className={Styles.itemInput} type="checkbox" id="#3" />
                  <span className={Styles.itemTitle}>Gem series {`(6)`}</span>
                </label>
              </li>
              <li>
                <label className={Styles.itemLabel} htmlFor="#4">
                  <input className={Styles.itemInput} type="checkbox" id="#4" />
                  <span className={Styles.itemTitle}>Air series {`(2)`}</span>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Filters;
