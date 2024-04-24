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

  //fetch for first five accessories in home page
  const [fiveAccessoriesItems, setFiveAccessoriesItems] = useState([]);

  //fetch for first five accessories in home page
  const [fiveKeyboardsItems, setFiveKeyboardsItems] = useState([]);

  //fetch for first five styles in home page
  const [fiveStylesItems, setFiveStylesItems] = useState([]);

  //fetch for first five accessories in home page
  useEffect(() => {
    const fetchAccessoriesItems = async () => {
      const response = await fetch("http://127.0.0.1:5555/api/products/accessories?first=5");
      const data = await response.json();
      const accessoriesItems = await data.data;
      console.log(accessoriesItems, "accessoriesItems");
      setFiveAccessoriesItems(accessoriesItems);
    };
    fetchAccessoriesItems();
  }, []);

  // fetch for five first keyboards in home page
  useEffect(() => {
    const fetchKeyboardsItems = async () => {
      const res = await fetch("http://127.0.0.1:5555/api/products/keyboards?first=5");
      const data = await res.json();
      const keyboardsItems = await data.data;
      setFiveKeyboardsItems(keyboardsItems);
    };
    fetchKeyboardsItems();
  }, []);

    // fetch for five first styles item in home page
    useEffect(() => {
      const fetchKeyboardsItems = async () => {
        const res = await fetch("http://127.0.0.1:5555/api/products/keycaps?first=5");
        const data = await res.json();
        const stylesItems = await data.data;
        setFiveStylesItems(stylesItems);
      };
      fetchKeyboardsItems();
    }, []);


  return (
    <GlobalContext.Provider
      value={{
        uiToggle,
        fiveAccessoriesItems,
        fiveKeyboardsItems,
        fiveStylesItems,
        setUiToggle,
        setFiveAccessoriesItems,
        setFiveKeyboardsItems,
        setFiveStylesItems,
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
