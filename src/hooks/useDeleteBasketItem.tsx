import { useState } from "react";
import { useGlobalContext } from "../context/globalContext";
import { useAuthContext } from "../context/authContext";
import toast from "react-hot-toast";

export default function useDeleteBasketItem() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const { setBasketData } = useGlobalContext();
  const { authUser } = useAuthContext();

  const deleteBasketItemHandler = async (itemID: string) => {
    setIsLoading(true);

    try {
      const deleteItemResponse = await fetch(`http://127.0.0.1:5555/api/basket/del/${authUser?._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemID }),
      });
      await deleteItemResponse.json();

      const getBasketData = await fetch(`http://127.0.0.1:5555/api/basket/${authUser?._id}`);
      const basketDataResponse = await getBasketData.json();
      setTimeout(async () => {
        await setBasketData(basketDataResponse?.data);
      }, 1000);
    } catch (error) {
      console.log("error from delete basket item custom hook ", error);
      setError(error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
        toast.success("The item has been deleted from basket.", {
          icon: "🗑️",
        });
      }, 1000);
    }
  };

  return { deleteBasketItemHandler, isLoading, error };
}
