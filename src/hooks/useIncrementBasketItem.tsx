import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/authContext";
import { useGlobalContext } from "../context/globalContext";

export default function useIncrementBasketItem() {
  const { authUser } = useAuthContext();
  const { setBasketData } = useGlobalContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const incrementBasketItemHandler = async (product: any) => {
    setIsLoading(true);
    try {
      // Increment the item in the basket
      const incrementItem = await fetch(`http://127.0.0.1:5555/api/basket/increment/${authUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemObject: product }),
      });
      await incrementItem.json();

      // Get the updated basket data
      const getBasketData = await fetch(`http://127.0.0.1:5555/api/basket/${authUser._id}`);
      const basketDataResponse = await getBasketData.json();
      setTimeout(() => {
        setBasketData(basketDataResponse?.data);
      }, 1000);
    } catch (error) {
    } finally {
      setTimeout(() => {
        setIsLoading(false);
        toast.success(`You Added ${product.title} in shopping card.`);
      }, 1000);
    }
  };

  return { incrementBasketItemHandler, isLoading, error };
}
