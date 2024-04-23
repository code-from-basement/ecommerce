import { memo } from "react";
import { useLocation } from "react-router-dom";
import Row from "../../UI/Row/Row";
import Styles from "./Search.module.css";

let render = 0;

const Search = memo(() => {
  render++;
  console.log("Search", render);
  const location = useLocation();
  console.log(location.state);

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
        <h1>Search here:</h1>
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
