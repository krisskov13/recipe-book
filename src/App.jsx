import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AddRecipe from "./pages/AddRecipe";
import NavBar from "./components/NavBar/NavBar";
import RecipeDetail from "./pages/RecipeDetail/RecipeDetail";
import recipesData from "./recipes.json";
import EditRecipe from "./pages/EditRecipe/EditRecipe";
import Footer from "./components/Footer/Footer";
import { useAuth } from "./components/context/Auth";
import Register from "./pages/Register/Register";
import MyRecipes from "./pages/MyRecipes/MyRecipes";
import Login from "./pages/login/Login";

function App() {
  const { user } = useAuth();
  const [userRecipes, setUserRecipes] = useState([]);

  useEffect(() => {
    if (user) {
      const savedUserRecipes = localStorage.getItem(`recipes_${user.username}`);
      setUserRecipes(savedUserRecipes ? JSON.parse(savedUserRecipes) : []);
    }
  }, [user]);

  const addRecipe = (newRecipe) => {
    if (!user) return;
    const recipeWithFlag = { ...newRecipe, isUserRecipe: true };
    const updated = [...userRecipes, recipeWithFlag];
    setUserRecipes(updated);
    localStorage.setItem(`recipes_${user.username}`, JSON.stringify(updated));
  };

  const handleUpdate = (updatedRecipe) => {
    if (!user) return;
    const updated = userRecipes.map((r) =>
      r.id === updatedRecipe.id ? updatedRecipe : r
    );
    setUserRecipes(updated);
    localStorage.setItem(`recipes_${user.username}`, JSON.stringify(updated));
  };

  const handleDelete = (id) => {
    if (!user) return;
    const updated = userRecipes.filter((r) => r.id !== id);
    setUserRecipes(updated);
    localStorage.setItem(`recipes_${user.username}`, JSON.stringify(updated));
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home recipes={recipesData} />}></Route>
        <Route
          path="/recipe/:id"
          element={
            <RecipeDetail
              recipes={[...recipesData, ...userRecipes]}
              handleDelete={handleDelete}
              userRecipes={userRecipes}
            />
          }
        ></Route>
        <Route
          path="/my-recipes"
          element={<MyRecipes recipes={userRecipes} />}
        ></Route>
        <Route
          path="/add"
          element={<AddRecipe onAddRecipe={addRecipe} />}
        ></Route>
        <Route
          path="/edit/:id"
          element={<EditRecipe recipes={userRecipes} onUpdate={handleUpdate} />}
        ></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
