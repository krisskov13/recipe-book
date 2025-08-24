import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AddRecipe from "./pages/AddRecipe";
import NavBar from "./components/NavBar/NavBar";
import RecipeDetail from "./pages/RecipeDetail/RecipeDetail";
import recipesData from "./recipes.json";
import EditRecipe from "./pages/EditRecipe/EditRecipe";
import Footer from "./components/Footer/Footer";
import Auth from "./components/context/Auth";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import MyRecipes from "./pages/MyRecipes/MyRecipes";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("recipes");

    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.length > 0) {
        setRecipes(parsed);
        return;
      }
    }

    const initialRecipes = recipesData.map((r) => ({
      ...r,
      isUserRecipe: false,
    }));
    setRecipes(initialRecipes);
    localStorage.setItem("recipes", JSON.stringify(initialRecipes));
  }, []);

  const addRecipe = (newRecipe) => {
    const recipeWithFlag = { ...newRecipe, isUserRecipe: true };
    setRecipes((prev) => {
      const updated = [...prev, recipeWithFlag];
      localStorage.setItem("recipes", JSON.stringify(updated));
      return updated;
    });
  };

  const handleUpdate = (updatedRecipe) => {
    setRecipes((prev) => {
      const updated = prev.map((r) =>
        r.id === updatedRecipe.id && r.isUserRecipe ? updatedRecipe : r
      );
      localStorage.setItem("recipes", JSON.stringify(updated));
      return updated;
    });
  };

  const handleDelete = (id) => {
    setRecipes((prev) => {
      const updated = prev.filter((r) => r.id !== id || !r.isUserRecipe);
      localStorage.setItem("recipes", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <Auth>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home recipes={recipes} />}></Route>
        <Route
          path="/recipe/:id"
          element={
            <RecipeDetail recipes={recipes} handleDelete={handleDelete} />
          }
        ></Route>
        <Route
          path="/my-recipes"
          element={<MyRecipes recipes={recipes} />}
        ></Route>
        <Route
          path="/add"
          element={<AddRecipe onAddRecipe={addRecipe} />}
        ></Route>
        <Route
          path="/edit/:id"
          element={<EditRecipe recipes={recipes} onUpdate={handleUpdate} />}
        ></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </Auth>
  );
}

export default App;
