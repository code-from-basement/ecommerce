import { useState } from "react";
import { useAuthContext } from "../context/authContext";

export default function useSignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const { authUser, setAuthUser } = useAuthContext();

  const signUpHandler = async (userData: { username: string; password: string }) => {
    setIsLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:5555/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();

      setTimeout(async () => {
        await setAuthUser(data);
        localStorage.setItem("userData", JSON.stringify(data));
      }, 2000);
    } catch (err) {
      console.log(err);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };

  return { isLoading, signUpHandler };
}
