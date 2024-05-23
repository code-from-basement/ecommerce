import { memo } from "react";
import { useLocation } from "react-router-dom";
import Row from "../../UI/Row/Row";
import SearchProductItem from "../../UI/SearchProductItem/SearchProductItem";
import Styles from "./Search.module.css";
import { motion } from "framer-motion";
import { fadeInNotFoundMessage } from "../../UI/Animation/Animation";

const Search = memo(() => {
  const location = useLocation();

  const NoItemFoundComponent = () => {
    return (
      <motion.div {...fadeInNotFoundMessage} className={Styles.NotFoundMessage}>
        <h1>No item found with the name, please try again.</h1>
      </motion.div>
    );
  };

  return (
    <div className={Styles.search}>
      <Row>
        <h1 className={Styles.search__title}>Search</h1>
        <p className={Styles.search__titleSub}>
          Search result : {location.state?.data.length} item{location.state?.data.length > 1 ? "s" : ""}
        </p>
      </Row>
      <Row>
        <div className={Styles.product__list}>
          {location.state?.data.length > 0
            ? location.state?.data.map((item: any) => {
                return <SearchProductItem key={item._id} data={item} />;
              })
            : NoItemFoundComponent()}
        </div>
      </Row>
    </div>
  );
});

export default Search;
