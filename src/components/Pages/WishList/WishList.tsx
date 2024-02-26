import React from "react";
import Styles from "./WishList.module.css";
import Row from "../../UI/Row/Row";
function WishList() {
  return (
    <div className={Styles.wishlist}>
      <Row>
        <h1>Your wishlist is empty</h1>
      </Row>
    </div>
  );
}

export default WishList;
