import { useState } from "react";
import { useAuthContext } from "../context/authContext";

export default function () {
  const [isLoading, setIsLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const loginHandler = async (currentUserData: { username: string; password: string }) => {
    setIsLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:5555/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentUserData),
      });
      const data = await response.json();
      localStorage.setItem("userData", JSON.stringify(data));
      setTimeout(() => {
        setAuthUser(data);
      }, 2000);
    } catch (err) {
      alert(err);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };
  return { isLoading, loginHandler };
}
