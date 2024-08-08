import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { AuthContextProvider } from "./context/authContext.tsx";
import { GlobalContextProvider } from "./context/globalContext.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <GlobalContextProvider>
          <App />
        </GlobalContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
