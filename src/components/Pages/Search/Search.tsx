import React from "react";
import Styles from "./Search.module.css";
import Row from "../../UI/Row/Row";
function Search() {
  return (
    <div className={Styles.search}>
      <Row>
        <h1>Search here:</h1>
      </Row>
    </div>
  );
}

export default Search;
