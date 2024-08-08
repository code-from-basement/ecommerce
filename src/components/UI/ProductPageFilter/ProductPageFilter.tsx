import { motion } from "framer-motion";
import { useLocation, useSearchParams } from "react-router-dom";
import useSWR from "swr";
import { fadeInAnimation } from "../Animation/Animation";
import { DividerH } from "../Divider/Divider";
import arrowIcon from "./../../../assets/icons/chevron-down-outline.svg";
import Styles from "./ProductPageFilter.module.css";
import { FaLessThanEqual } from "react-icons/fa";
import { CloudLightning } from "lucide-react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function Filters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const url = `${location.pathname}`;
  const { data } = useSWR([`http://127.0.0.1:5555/api/filters/${url}`], fetcher, {
    revalidateIfStale: false,
  });
  const result = data?.data;
  const pageCategory = `${location.pathname.slice(1)}`;

  const onClickCollapseTrigger = (e: any) => {
    e.preventDefault();
    e.target.nextElementSibling.classList.toggle(Styles.collapseBoxActive);
    e.target.classList.toggle(Styles.filterItemActive);
  };

  const onChangeInputCheckBoxHandler = (e: React.ChangeEvent<HTMLInputElement>, filterValue: string) => {
    const checkFilterProperty = searchParams.get("filterProperty") || false;
    const checkValue = searchParams.get("value") || false;
    const checkFilter = searchParams.get("filter") || false;
    const hasQuery = checkFilterProperty && checkValue && checkFilter;
    //
    const value = e.target.value;
    const filterProperty = filterValue;
    // choose first filter option
    if (!hasQuery) {
      searchParams.append("filterProperty", filterProperty);
      searchParams.append("value", value);
      searchParams.append("filter", "true");
      setSearchParams(searchParams);
    }
    if (hasQuery && !e.target.checked) {
      // Logic for filtering section
      const filterPropertyArray = Array.from(searchParams.entries());
      for (let i = 0; i < filterPropertyArray.length; i++) {
        if (
          searchParams.getAll("filterProperty")?.length > 1 &&
          searchParams.getAll("filterProperty")[i] === searchParams.getAll("filterProperty")[i + 1]
        ) {
          searchParams.delete("filterProperty", filterProperty);
          searchParams.delete("value", value);
          searchParams.append("filterProperty", filterProperty);
          return setSearchParams(searchParams);
        }

        if (
          searchParams.getAll("filterProperty")?.length > 1 &&
          searchParams.getAll("filterProperty")[i] !== searchParams.getAll("filterProperty")[i + 1]
        ) {
          searchParams.delete("filterProperty", filterProperty);
          searchParams.delete("value", value);
          return setSearchParams(searchParams);
        }

        if (searchParams.getAll("filterProperty").length === 1) {
          searchParams.delete("filterProperty", filterProperty);
          searchParams.delete("value", value);
          searchParams.delete("filter");
          return setSearchParams(searchParams);
        }
      }
    }

    // choose second filter option
    if (hasQuery) {
      searchParams.append("filterProperty", filterProperty);
      searchParams.append("value", value);
      // searchParams.append("filter", "true");
      return setSearchParams(searchParams);
    }
  };

  return (
    <div className={Styles.filters}>
      <motion.form {...fadeInAnimation} className={Styles.form}>
        <h2 className={Styles.filters__title}>{pageCategory}</h2>
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
                            disabled={false}
                          />
                          <span className={Styles.itemTitle}>
                            {filter.title === "size"
                              ? `${option?.title}%`
                              : filter.title === "series" && pageCategory === "keycaps"
                              ? `${option.title}`.toUpperCase()
                              : option.title}
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
