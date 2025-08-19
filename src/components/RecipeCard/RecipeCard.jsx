import { Link } from "react-router-dom";
import styles from "./RecipeCard.module.css";

function RecipeCard({ recipe, handleDelete }) {
  return (
    <Link to={`/recipe/${recipe.id}`} className={styles.cardLink}>
      <div className={styles.card}>
        <h3>{recipe.title}</h3>
        <div className={styles.information}>
          <p>{recipe.ingredients}</p>
          <p>{recipe.instructions}</p>
          <div className={styles.category}>
            <span className={`${styles.badge} ${styles[recipe.category]}`}>
              {recipe.category}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default RecipeCard;
