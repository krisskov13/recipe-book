import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAuth } from "./Auth";

const RecipeContext = createContext();

function RecipeProvider({ children }) {
  const { user } = useAuth();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (user) {
      const stored = getRecipes(user.id);
      setRecipes(stored);
    }
  }, [user]);

  const addRecipe = (recipe) => {
    if (!user) return;
    const newRecipe = { ...recipe, id: Date.now() };
    const updated = [...recipes, newRecipe];
    setRecipes(updated);
    saveRecipes(user.id, updated);
  };

  const updateRecipe = (updateRecipe) => {
    if (!user) return;
    const updated = recipes.map((r) =>
      r.id === updateRecipe.id ? updateRecipe : r
    );
    setRecipes(updateRecipe);
    saveRecipes(user.id, updated);
  };

  const deleteRecipe = (id) => {
    if (!user) return;
    const updated = recipes.filter((r) => r.id !== id);
    setRecipes(updated);
    saveRecipes(user.id);
  };

  return (
    <RecipeContext.Provider
      value={{ recipes, addRecipe, updateRecipe, deleteRecipe }}
    >
      {children}
    </RecipeContext.Provider>
  );
}

export function useRecipes() {
  return useContext(RecipeContext);
}

const getRecipes = (userId) => {
  const allRecipes = JSON.parse(localStorage.getItem("recipes")) || {};
  return allRecipes[userId] || [];
};

const saveRecipes = (userId, recipes) => {
  const allRecipes = JSON.parse(localStorage.getItem("recipes")) || {};
  allRecipes[userId] = recipes;
  localStorage.setItem("recipes", JSON.stringify(allRecipes));
};

export default RecipeProvider;
