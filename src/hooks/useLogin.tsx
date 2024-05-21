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
      setAuthUser(data);
    } catch (err) {
      alert(err);
    } finally {
      setIsLoading(false);
    }
  };
  return { isLoading, loginHandler };
}
