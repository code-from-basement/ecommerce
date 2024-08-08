import { useState } from "react";
import { useAuthContext } from "../context/authContext";
import { useGlobalContext } from "../context/globalContext";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const navigation = useNavigate();
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
      if (response.status === 200 && response.ok) {
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
        return;
      }

      if (!response.ok && response.status === 404) {
        throw new Error(
          `There is no user with this username: ${currentUserData.username}, please try again, or sign up with new account.`
        );
      }
    } catch (err) {
      navigation("/account/loginFailed", { state: { message: err } });
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };
  return { isLoading, loginHandler };
};

export default useLogin;
