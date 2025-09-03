import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AddRecipe from "./pages/AddRecipe";
import NavBar from "./components/NavBar/NavBar";
import RecipeDetail from "./pages/RecipeDetail/RecipeDetail";
import recipesData from "./recipes.json";
import EditRecipe from "./pages/EditRecipe/EditRecipe";
import Footer from "./components/Footer/Footer";
import Register from "./pages/Register/Register";
import MyRecipes from "./pages/MyRecipes/MyRecipes";
import Login from "./pages/login/Login";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home recipes={recipesData} />}></Route>
        <Route
          path="/recipe/:id"
          element={<RecipeDetail recipes={recipesData} />}
        ></Route>
        <Route path="/my-recipes" element={<MyRecipes />}></Route>
        <Route path="/add" element={<AddRecipe />}></Route>
        <Route path="/edit/:id" element={<EditRecipe />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
