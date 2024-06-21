import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext<any>(null);

const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  type UiToggleState = {
    isSearchOpen: boolean;
    isBasketEmpty: boolean;
    isBasketOpen: boolean;
    isLoadingFullViewShow: boolean;
  };
  const [basketData, setBasketData] = useState<object[]>([]);

  const [uiToggle, setUiToggle] = useState<UiToggleState>({
    isSearchOpen: false,
    isBasketEmpty: false,
    isBasketOpen: false,
    isLoadingFullViewShow: false,
  });

  const [favoritesListData, setFavoritesListData] = useState<object[]>([]);
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

// {
//       _id: 1,
//       title: "Nuphy Gem80",
//       description: "Nuphy AirPods Pro Case cover",
//       price: 129.99,
//       quantity: 1,
//       image: ["NuPhyGem80-CosmicMochax.webp", "NuPhyGem80-MysticIndigox.webp", "NuPhyGem80-ObsidianBlackx.webp"],
//     },
//     {
//       _id: 2,
//       title: "Nuphy Gem75",
//       description: "Nuphy AirPods Pro  lorem ver",
//       price: 99.99,
//       quantity: 1,
//       image: ["NuPhyGem80-MysticIndigox.webp", "NuPhyGem80-ObsidianBlackx.webp"],
//     },
//     {
//       _id: 3,
//       title: "Nuphy Air96 Mini",
//       description: "Nuphy AirPods Pro ",
//       price: 109.99,
//       quantity: 1,
//       image: ["NuPhyGem80-ObsidianBlackx.webp"],
//     },
