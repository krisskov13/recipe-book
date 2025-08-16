import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AddRecipe from "./pages/AddRecipe";
import NavBar from "./components/NavBar/NavBar";
import RecipeDetail from "./pages/RecipeDetail/RecipeDetail";
import recipesData from "./recipes.json";
import EditRecipe from "./pages/EditRecipe/EditRecipe";

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

    localStorage.setItem("recipes", JSON.stringify(recipesData));
    setRecipes(recipesData);
  }, []);

  const addRecipe = (newRecipe) => {
    setRecipes((prev) => [...prev, newRecipe]);
  };

  const handleUpdate = (updatedRecipe) => {
    setRecipes(
      recipes.map((r) => (r.id === updatedRecipe.id ? updatedRecipe : r))
    );
  };

  const handleDelete = (id) => {
    setRecipes((prev) => prev.filter((recipe) => recipe.id !== id));
  };

  return (
    <>
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
