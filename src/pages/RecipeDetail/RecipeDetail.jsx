import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./RecipeDetail.module.css";

function RecipeDetail({ recipes, handleDelete, userRecipes }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = recipes.find((r) => String(r.id) === id);

  if (!recipe) {
    return <p className={styles.notFound}>Рецепт не знайдено</p>;
  }

  const isUserRecipe = userRecipes.some((r) => r.id === recipe.id);

  const onDelete = () => {
    handleDelete(recipe.id);
    navigate("/my-recipes");
  };

  return (
    <div className={styles.detail}>
      <div className={styles.containerTitle}>
        <h1>{recipe.title}</h1>
        <span
          data-category="Основна страва"
          className={`${styles.badge} ${styles[recipe.category]}`}
        >
          {recipe.category}
        </span>
      </div>
      <h3>Інгредієнти:</h3>
      <p>{recipe.ingredients}</p>
      <h3>Інструкції:</h3>
      <p>{recipe.instructions}</p>
      {isUserRecipe && (
        <div className={styles.buttons}>
          <Link to={`/edit/${recipe.id}`} className={styles.editBtn}>
            Редагувати
          </Link>
          <button className={styles.deleteBtn} onClick={onDelete}>
            Видалити
          </button>
        </div>
      )}
    </div>
  );
}

export default RecipeDetail;
