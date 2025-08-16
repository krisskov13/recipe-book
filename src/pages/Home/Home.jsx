import { useEffect, useState } from "react";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import styles from "./Home.module.css";

function Home({ recipes }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  useEffect(() => {
    const term = searchTerm.toLowerCase();
    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(term)
    );
    setFilteredRecipes(filtered);
  }, [searchTerm, recipes]);

  return (
    <div className={styles.container}>
      <h1>Рецепти</h1>
      <input
        type="text"
        value={searchTerm}
        placeholder="Знайди рецепт за назвою"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
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
