import { useGlobalContext } from "../../../context/globalContext";
import WishListItem from "../../UI/WishListItem/WishListItem";
import Styles from "./WishList.module.css";
function WishList() {
  const { favoritesListData } = useGlobalContext();

  const EmptyWishList = () => {
    return (
      <div>
        <h1>You haven't add any product in your wish list.</h1>
      </div>
    );
  };

  return (
    <div className={Styles.wishlist}>
      {favoritesListData.length === 0 && <EmptyWishList />}
      {favoritesListData.length !== 0 && <h1>You have {favoritesListData?.length} products in your wishlist:</h1>}

      <div className={Styles.gridList}>
        {favoritesListData?.map((item: any, index: number) => {
          return <WishListItem key={index} data={item} />;
        })}
      </div>
    </div>
  );
}

export default WishList;
