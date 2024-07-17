import { useState } from "react";
import { useAuthContext } from "../context/authContext";
import { useGlobalContext } from "../context/globalContext";
import { set } from "react-hook-form";

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { authUser, setAuthUser } = useAuthContext();
  const { setFavoritesListData, setBasketData, favoritesListData } = useGlobalContext();

  const loginHandler = async (currentUserData: { username: string; password: string }) => {
    setIsLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:5555/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(currentUserData),
      });
      const data = await response.json();
      await setAuthUser(data);
      localStorage.setItem("userData", JSON.stringify(data));

      // fetching the basket list
      const getBasketData = await fetch(`http://127.0.0.1:5555/api/basket/${data?._id}`);
      const basketDataResponse = await getBasketData.json();
      await setBasketData(basketDataResponse?.data);
      localStorage.setItem("basketData", JSON.stringify(basketDataResponse?.data));

      // fetching Favorite list data
      const getFavoritesResponse = await fetch(`http://127.0.0.1:5555/api/favorites/${data?._id}`);
      const getFavoritesData = await getFavoritesResponse.json();
      await setFavoritesListData(getFavoritesData?.data);
      localStorage.setItem("favoritesData", JSON.stringify(getFavoritesData?.data));
    } catch (err) {
      alert(err);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };
  return { isLoading, loginHandler };
};

export default useLogin;
