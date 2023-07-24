import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/authContext"; // Cambio realizado aquí
import { DarkModeContextProvider } from "./context/darkModeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <AuthContextProvider> {/* Cambio realizado aquí */}
        <App />
      </AuthContextProvider> {/* Cambio realizado aquí */}
    </DarkModeContextProvider>
  </React.StrictMode>
);
