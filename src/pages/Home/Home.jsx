import { useEffect, useState } from "react";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import styles from "./Home.module.css";

function Home({ recipes }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);
  const [selectedCategory, setSelectedCategory] = useState("Усі");

  const categories = [
    "Усі",
    ...Array.from(new Set(recipes.map((r) => r.category))),
  ];

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

    let filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(term)
    );

    if (selectedCategory !== "Усі") {
      filtered = filtered.filter(
        (recipe) => recipe.category === selectedCategory
      );
    }

    setFilteredRecipes(filtered);
  }, [debouncedTerm, recipes, selectedCategory]);

  const handleClear = () => {
    setSearchTerm("");
  };

  return (
    <div className={styles.container}>
      <h2>Рецепти</h2>

      <div className={styles.searchBar}>
        <input
          type="text"
          value={searchTerm}
          placeholder="Знайти рецепт..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleClear}>✖ Очистити</button>
      </div>

      <div className={styles.containerFilter}>
        {categories.map((category, index) => (
          <button
            key={category}
            className={`${styles.filterBtn} ${
              selectedCategory === category ? styles.active : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

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
