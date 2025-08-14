import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AddRecipe from "./pages/AddRecipe";
import NavBar from "./components/NavBar/NavBar";
import RecipeDetail from "./pages/RecipeDetail/RecipeDetail";
import recipesData from "./recipes.json";
import EditRecipe from "./pages/EditRecipe/EditRecipe";

function App() {
  const [recipes, setRecipes] = useState(() => {
    const saved = localStorage.getItem("recipes");
    const savedRecipes = saved ? JSON.parse(saved) : [];
    return [...recipesData, ...savedRecipes];
  });

  const addRecipe = (newRecipe) => {
    setRecipes((prev) => [...prev, newRecipe]);
  };

  useEffect(() => {
    const userRecipes = recipes.filter(
      (r) =>
        !recipesData.some((defaultR) => String(defaultR.id) === String(r.id))
    );
    localStorage.setItem("recipes", JSON.stringify(userRecipes));
  }, [recipes]);

  const handleUpdate = (updatedRecipe) => {
    setRecipes(
      recipes.map((r) => (r.id === updatedRecipe.id ? updatedRecipe : r))
    );
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home recipes={recipes} />}></Route>
        <Route
          path="/recipe/:id"
          element={<RecipeDetail recipes={recipes} />}
        ></Route>
        <Route
          path="/add"
          element={<AddRecipe onAddRecipe={addRecipe} />}
        ></Route>
        <Route
          path="/edit/:id"
          element={<EditRecipe recipes={recipes} onUpdate={handleUpdate} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
