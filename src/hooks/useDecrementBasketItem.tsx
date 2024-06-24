import { useState } from "react";
import { useAuthContext } from "../context/authContext";
import { useGlobalContext } from "../context/globalContext";
import toast from "react-hot-toast";

export default function useDecrementBasketItem() {
  const { authUser } = useAuthContext();
  const { setBasketData } = useGlobalContext();
  const [decrementLoading, setDecrementLoading] = useState<boolean>(false);
  const [decrementError, setDecrementError] = useState<any>(null);

  const decrementBasketItemHandler = async (product: any) => {
    setDecrementLoading(true);
    try {
      // Increment the item in the basket
      const decrementItem = await fetch(`http://127.0.0.1:5555/api/basket/decrement/${authUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemObject: product }),
      });
      await decrementItem.json();

      // Get the updated basket data
      const getBasketData = await fetch(`http://127.0.0.1:5555/api/basket/${authUser._id}`);
      const basketDataResponse = await getBasketData.json();

      setTimeout(() => {
        setBasketData(basketDataResponse?.data);
      }, 1000);
    } catch (error) {
      setDecrementError(error);
    } finally {
      setTimeout(async () => {
        setDecrementLoading(false);
        toast.success(`You decrease ${product.title} from shopping card.`);
      }, 1000);
    }
  };
  return { decrementBasketItemHandler, decrementLoading, decrementError };
}
