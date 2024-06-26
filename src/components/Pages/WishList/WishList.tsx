import { useGlobalContext } from "../../../context/globalContext";
import Row from "../../UI/Row/Row";
import Styles from "./WishList.module.css";
function WishList() {
  const { favoritesListData } = useGlobalContext();
  return (
    <div className={Styles.wishlist}>
      <Row>
        <h1>You have {favoritesListData?.length} products in your wishlist:</h1>
        <em>
          ***you need to create product item for <b>each liked item</b> in favorite list with <b>unlike</b> button***
        </em>
      </Row>
    </div>
  );
}

export default WishList;
