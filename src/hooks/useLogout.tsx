import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";
import { useGlobalContext } from "../context/globalContext";

export default function useLogout(currentData: any) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const { setBasketData, setFavoritesListData } = useGlobalContext();

  const logoutHandler = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:5555/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(currentData),
      });
      await response.json();
      // Clear context data
      await setAuthUser(null);
      await setBasketData([]);
      await setFavoritesListData([]);

      // Clear local storage
      localStorage.removeItem("userData");
      localStorage.removeItem("basketData");
      localStorage.removeItem("favoritesData");
      navigate("/");
    } catch (err) {
      alert(err);
    } finally {
      setIsLoading(false);
    }
  };
  return { isLoading, logoutHandler };
}
