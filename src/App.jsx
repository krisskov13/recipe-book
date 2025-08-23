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

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("recipes");
    if (saved) {
      setRecipes(JSON.parse(saved));
    } else {
      setRecipes(recipesData);
      localStorage.setItem("recipes", JSON.stringify(recipesData));
    }
  }, []);

  useEffect(() => {
    if (recipes.length > 0) {
      localStorage.setItem("recipes", JSON.stringify(recipes));
    }
  }, [recipes]);

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
