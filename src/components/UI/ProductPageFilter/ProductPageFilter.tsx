import { motion } from "framer-motion";
import { useLocation, useSearchParams } from "react-router-dom";
import useSWR from "swr";
import { fadeInAnimation } from "../Animation/Animation";
import { DividerH } from "../Divider/Divider";
import arrowIcon from "./../../../assets/icons/chevron-down-outline.svg";
import Styles from "./ProductPageFilter.module.css";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function Filters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const url = `${location.pathname}`;
  const { data } = useSWR([`http://127.0.0.1:5555/api/filters/${url}`], fetcher, {
    revalidateIfStale: false,
  });
  const result = data?.data;

  const onClickCollapseTrigger = (e: any) => {
    e.preventDefault();
    e.target.nextElementSibling.classList.toggle(Styles.collapseBoxActive);
    e.target.classList.toggle(Styles.filterItemActive);
  };

  const onChangeInputCheckBoxHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    filterValue: string
  ) => {
    const value = e.target.value;
    const filterProperty = filterValue;
    if (e.target.checked) {
      setSearchParams((prev) => {
        const prevData = new URLSearchParams(prev);
        return { ...prevData, filter: "true", filterProperty: filterProperty, value: value };
      });
    } else {
      setSearchParams(window.location.pathname);
    }
  };

  return (
    <div className={Styles.filters}>
      <motion.form {...fadeInAnimation} className={Styles.form}>
        <h2 className={Styles.filters__title}>Keyboards</h2>
        <DividerH />
        {result?.map((filter: any, i: number) => {
          return (
            <div className={Styles.filterItem} key={i}>
              <button onClick={(e) => onClickCollapseTrigger(e)}>
                {filter?.title}
                <img src={arrowIcon} alt="" />
              </button>
              <div key={i} className={Styles.collapseBox}>
                <ul key={result.title}>
                  {filter?.options.map((option: { title: string; number: number }, i: number) => {
                    return (
                      <li key={i}>
                        <label className={Styles.itemLabel} htmlFor={option.title}>
                          <input
                            className={Styles.itemInput}
                            type="checkbox"
                            id={option.title}
                            value={option?.title}
                            onChange={(e) => onChangeInputCheckBoxHandler(e, filter?.title)}
                          />
                          <span className={Styles.itemTitle}>
                            {filter.title === "size" ? `${option?.title}%` : option?.title}
                            {` (${option?.number})`}
                          </span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </motion.form>
    </div>
  );
}

export default Filters;
