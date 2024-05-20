import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext<any>(null);

const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  type UiToggleState = {
    isSearchOpen: boolean;
    isBasketEmpty: boolean;
    isBasketOpen: boolean;
    isLoadingFullViewShow: boolean;
  };

  const [uiToggle, setUiToggle] = useState<UiToggleState>({
    isSearchOpen: false,
    isBasketEmpty: true,
    isBasketOpen: false,
    isLoadingFullViewShow: false,
  });

  return (
    <GlobalContext.Provider
      value={{
        uiToggle,
        setUiToggle,
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
