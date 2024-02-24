import { useContext, createContext, useEffect, useState } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [uiToggle, setUiToggle] = useState({
    isSearchOpen: false,
  });
  return <GlobalContext.Provider value={{ uiToggle, setUiToggle }}>{children}</GlobalContext.Provider>;
};

function useGlobalContext() {
  const context = useContext(GlobalContext);
  return context;
}

export { GlobalContextProvider, useGlobalContext };
