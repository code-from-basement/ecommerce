import { useState } from "react";
import toast from "react-hot-toast";

const useAddToBasket = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const addToBasket = (product: any) => {
    setIsLoading(true);
    try {
      console.log(product);
    } catch (error) {
      setError(error);
    }
    setTimeout(() => {
      toast.success(`${product.title} added to basket`);
      setIsLoading(false);
    }, 1000);
  };

  return { addToBasket, isLoading, error };
};

export default useAddToBasket;
