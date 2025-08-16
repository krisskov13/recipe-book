import RecipeCard from "../../components/RecipeCard/RecipeCard";
import styles from "./Home.module.css";

function Home({ recipes }) {
  return (
    <div className={styles.container}>
      <h1>Рецепти</h1>
      {recipes.length === 0 ? (
        <p>Рецептів ще немає</p>
      ) : (
        <div className={styles.listRecipes}>
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
