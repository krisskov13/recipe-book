import { Link } from "react-router-dom";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import styles from "../MyRecipes/MyRecipes.module.css";

function MyRecipes({ recipes }) {
  return (
    <div className={styles.container}>
      <h2>Moї рецепти</h2>
      {recipes.length > 0 ? (
        <div className={styles.listRecipes}>
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} showActions={true} />
          ))}
        </div>
      ) : (
        <div className={styles.containerError}>
          <p className={styles.notFound}>Тут поки немає твоїх рецептів...</p>
          <Link to="/add" className={styles.link}>
            Додайте свій перший рецепт
          </Link>
        </div>
      )}
    </div>
  );
}

export default MyRecipes;
