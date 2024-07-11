import { createContext, useContext, useState } from "react";

const GlobalContext = createContext<any>(null);
const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  type UiToggleState = {
    isSearchOpen: boolean;
    isBasketOpen: boolean;
    isLoadingFullViewShow: boolean;
    isModalRedirectionShow: boolean;
  };

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
