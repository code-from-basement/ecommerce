import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/authContext";
import { useGlobalContext } from "../context/globalContext";

const useAddToBasket = () => {
  const { setBasketData, setUiToggle } = useGlobalContext();

  const { authUser } = useAuthContext();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const addToBasket = async (product: any) => {
    if (!authUser) {
      return setUiToggle((prevData: {}) => {
        return { ...prevData, isModalRedirectionShow: true };
      });
    }
    if (authUser) {
      setIsLoading(true);
      try {
        const addNewItem = await fetch(`http://127.0.0.1:5555/api/basket/increment/${authUser._id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ itemObject: product }),
        });
        await addNewItem.json();

        const getBasketData = await fetch(`http://127.0.0.1:5555/api/basket/${authUser._id}`);
        const basketDataResponse = await getBasketData.json();

        setTimeout(async () => {
          localStorage.setItem("basketData", JSON.stringify(basketDataResponse?.data));
          await setBasketData(basketDataResponse?.data);
        }, 1000);
      } catch (error) {
        setError(error);
      }
      setTimeout(() => {
        setIsLoading(false);
        toast.success(`${product.title} added to basket.`);
      }, 1000);
    }
  };

  return { addToBasket, isLoading, error };
};

export default useAddToBasket;
