import useSWR from "swr";
import { fadeInAnimation } from "../Animation/Animation";
import { DividerH } from "../Divider/Divider";
import arrowIcon from "./../../../assets/icons/chevron-down-outline.svg";
import Styles from "./ProductPageFilter.module.css";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
function Filters() {
  const location = useLocation();
  const url = `${location.pathname}`;
  const { data } = useSWR([`http://127.0.0.1:5555/api/filters/${url}`], fetcher, {
    revalidateIfStale: false,
  });
  const result = data?.data[0];
  console.log(result?.filters);

  const onClickCollapseTrigger = (e: any) => {
    e.preventDefault();
    e.target.nextElementSibling.classList.toggle(Styles.collapseBoxActive);
    e.target.classList.toggle(Styles.filterItemActive);
  };

  return (
    <div className={Styles.filters}>
      <motion.form {...fadeInAnimation} className={Styles.form}>
        <h2 className={Styles.filters__title}>Keyboards</h2>
        <DividerH />
        {result?.filters.map((filter: any, i: number) => {
          return (
            <div className={Styles.filterItem} key={i}>
              <button onClick={(e) => onClickCollapseTrigger(e)}>
                {filter?.title}
                <img src={arrowIcon} alt="" />
              </button>
              {filter?.options.map((option: any, i: number) => {
                return (
                  <div className={Styles.collapseBox}>
                    <ul>
                      <li>
                        <label className={Styles.itemLabel} htmlFor={option}>
                          <input className={Styles.itemInput} type="checkbox" id={option} />
                          <span className={Styles.itemTitle}>
                            {option}
                            {`(6)`}
                          </span>
                        </label>
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div>
          );
        })}

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
      </motion.form>
    </div>
  );
}

export default Filters;
