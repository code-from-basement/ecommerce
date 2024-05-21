import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { GlobalContextProvider } from "./context/globalContext.tsx";
import "./index.css";
import { AuthContextProvider } from "./context/authContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </GlobalContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
