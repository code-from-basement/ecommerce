import { useState } from "react";
import { useAuthContext } from "../context/authContext";
import { useGlobalContext } from "../context/globalContext";

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const { setFavoritesListData, setBasketData } = useGlobalContext();

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
      const userID = data?._id;
      localStorage.setItem("userData", JSON.stringify(data));

      // fetching the basket list
      // const basketResponse = await fetch("http://127.0.0.1:5555/api/basket");
      // const basketData = await basketResponse.json();
      // console.log(basketData);

      // fetching the wishlist
      const favoritesResponse = await fetch(`http://127.0.0.1:5555/api/favorites/${userID}`);
      const favoritesData = await favoritesResponse.json();
      console.log(favoritesData);

      setTimeout(() => {
        setAuthUser(data);
        setFavoritesListData(favoritesData);
        // setBasketData(basketData);
      }, 2000);
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
