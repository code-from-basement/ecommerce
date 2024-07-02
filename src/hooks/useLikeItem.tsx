import { useState } from "react";
import { useAuthContext } from "../context/authContext";
import { useGlobalContext } from "../context/globalContext";
import toast from "react-hot-toast";

export default function useLikeItem() {
  const { authUser } = useAuthContext();
  const { setFavoritesListData, favoritesListData, setUiToggle } = useGlobalContext();
  const [likeItemLoading, setLikeItemLoading] = useState<boolean>(false);
  const [likeItemError, setLikeItemError] = useState<any>(null);

  const addItemToFavoriteHandler = async (product: any) => {
    if (!authUser) {
      return setUiToggle((prevData: {}) => {
        return { ...prevData, isModalRedirectionShow: true };
      });
    }
    if (authUser) {
      setLikeItemLoading(true);
      try {
        // POST information about liked item
        const addItemResponse = await fetch(`http://127.0.0.1:5555/api/favorites/add/${authUser._id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        });
        await addItemResponse.json();

        // get all liked item based on user who logged in
        const getAllFavorites = await fetch(`http://127.0.0.1:5555/api/favorites/${authUser._id}`);
        const favoritesData = await getAllFavorites.json();
        setTimeout(() => {
          setFavoritesListData(favoritesData?.data);
        }, 1000);
      } catch (error) {
        setLikeItemError(error);
      } finally {
        setTimeout(() => {
          setLikeItemLoading(false);
          const val = favoritesListData?.some((item: any) => item._id === product._id);
          toast.success(`${product.title} ${!val ? "has been added to your favorite list." : "has been removed from your favorite list."}`);
        }, 1000);
      }
    }
  };
  return { addItemToFavoriteHandler, likeItemLoading, likeItemError };
}
