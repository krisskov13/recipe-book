import { useEffect, useState } from "react";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import styles from "./Home.module.css";

function Home({ recipes }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  useEffect(() => {
    const term = debouncedTerm.toLowerCase();
    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(term)
    );
    setFilteredRecipes(filtered);
  }, [debouncedTerm, recipes]);

  const handleClear = () => {
    setSearchTerm("");
  };

  return (
    <div className={styles.container}>
      <h2>Рецепти</h2>
      <input
        type="text"
        value={searchTerm}
        placeholder="Знайди рецепт за назвою"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleClear}>Очистити</button>
      {filteredRecipes.length > 0 ? (
        <div className={styles.listRecipes}>
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <p>Рецептів не знайдено</p>
      )}
    </div>
  );
}

export default Home;
