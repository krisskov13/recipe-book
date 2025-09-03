import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./reset.css";
import AuthProvider from "./components/context/Auth.jsx";
import RecipeProvider from "./components/context/Recipe.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <RecipeProvider>
          <App />
        </RecipeProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
