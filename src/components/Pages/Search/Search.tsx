import { memo } from "react";
import { useLocation } from "react-router-dom";
import Row from "../../UI/Row/Row";
import Styles from "./Search.module.css";

const Search = memo(() => {
  const location = useLocation();

  const NoItemFoundComponent = () => {
    return (
      <div>
        <h1>No item found with the name, please try again.</h1>
      </div>
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
        {location.state?.data.length === 0 ? (
          <NoItemFoundComponent />
        ) : (
          <ul>
            {location.state?.data.map((item: any, index: number) => {
              return (
                <div key={index}>
                  <li>{item.title}</li>
                </div>
              );
            })}
          </ul>
        )}
      </Row>
    </div>
  );
});

export default Search;
