import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddRecipe from "./pages/AddRecipe";
import NavBar from "./components/NavBar";

function App() {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (newRecipe) => {
    setRecipes((prev) => [...prev, newRecipe]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home recipes={recipes} />}></Route>
        <Route
          path="/add"
          element={<AddRecipe onAddRecipe={addRecipe} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
