import { useMemo, useState } from "react";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import styles from "./Home.module.css";

function Home({ recipes }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Усі");

  const categories = [
    "Усі",
    ...Array.from(new Set(recipes.map((r) => r.category))),
  ];

  const filteredRecipes = useMemo(() => {
    const term = searchTerm.toLowerCase();

    return recipes.filter((recipe) => {
      const matchesTerm = recipe.title.toLowerCase().includes(term);
      const matchesCategory =
        selectedCategory === "Усі"
          ? true
          : recipe.category === selectedCategory;
      return matchesTerm && matchesCategory;
    });
  }, [searchTerm, selectedCategory, recipes]);

  const handleClear = () => {
    setSearchTerm("");
    setSelectedCategory("Усі");
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
        {categories.map((category) => (
          <button
            key={`cat-${category}`}
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
