import { Link } from "react-router-dom";
import styles from "./RecipeCard.module.css";

function RecipeCard({ recipe }) {
  return (
    <Link to={`/recipe/${recipe.id}`} className={styles.cardLink}>
      <div className={styles.card}>
        <h3>{recipe.title}</h3>
        <p className={styles.ingredients}>{recipe.ingredients}</p>
        <p className={styles.instructions}>{recipe.instructions}</p>
        <div className={styles.category}>
          <span className={`${styles.badge} ${styles[recipe.category]}`}>
            {recipe.category}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default RecipeCard;
