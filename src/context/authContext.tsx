import { createContext, useContext, ReactNode, useState } from "react";

const AuthContext = createContext<any>(null);

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [authUser, setAuthUser] = useState(localStorage.getItem("userData") || null);
  return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>;
};

const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthContextProvider, useAuthContext };
