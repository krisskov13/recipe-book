import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import RecipeDetail from "./pages/RecipeDetail/RecipeDetail";
import MyRecipes from "./pages/MyRecipes/MyRecipes";
import AddRecipe from "./pages/AddRecipe";
import EditRecipe from "./pages/EditRecipe/EditRecipe";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Footer from "./components/Footer/Footer";
import recipesData from "./recipes.json";

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
