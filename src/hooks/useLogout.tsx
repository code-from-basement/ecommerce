import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";

export default function useLogout() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const logoutHandler = async () => {
    setIsLoading(true);
    try {
      setAuthUser(null);
      localStorage.removeItem("userData");
      navigate("/");
    } catch (err) {
      alert(err);
    } finally {
      setIsLoading(false);
    }
  };
  return { isLoading, logoutHandler };
}
