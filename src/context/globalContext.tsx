import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./authContext";

const GlobalContext = createContext<any>(null);
const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  type UiToggleState = {
    isSearchOpen: boolean;
    isBasketOpen: boolean;
    isLoadingFullViewShow: boolean;
    isModalRedirectionShow: boolean;
  };
  const { authUser, setAuthUser } = useAuthContext();

  // Basket Data
  const [basketData, setBasketData] = useState<object[]>([]);
  // Favorites list Data
  const [favoritesListData, setFavoritesListData] = useState<object[]>([]);

  const [uiToggle, setUiToggle] = useState<UiToggleState>({
    isSearchOpen: false,
    isBasketOpen: false,
    isLoadingFullViewShow: false,
    isModalRedirectionShow: false,
  });

  // get the user data , basket data and favorites data from local storage.
  useEffect(() => {
    // get the user data from local storage
    const userData: any = localStorage.getItem("userData");
    console.log(userData);
    const userDataParsed = JSON.parse(userData);
    setAuthUser(userDataParsed);

    // get the basket data from local storage
    const basketData = localStorage.getItem("basketData") ? JSON.parse(localStorage.getItem("basketData") as string) : [];
    setBasketData(basketData);

    // get the favorites data from local storage
    const favoritesData = localStorage.getItem("favoritesData") ? JSON.parse(localStorage.getItem("favoritesData") as string) : [];
    setFavoritesListData(favoritesData);
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        uiToggle,
        basketData,
        favoritesListData,
        setUiToggle,
        setBasketData,
        setFavoritesListData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

function useGlobalContext() {
  const context = useContext(GlobalContext);
  return context;
}

export { GlobalContextProvider, useGlobalContext };
