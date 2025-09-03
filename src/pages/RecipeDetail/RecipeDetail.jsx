import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./RecipeDetail.module.css";
import { useEffect } from "react";
import { useRecipes } from "../../components/context/Recipe";

function RecipeDetail({ recipes, userRecipes }) {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div className={styles.detailContainer}>
      <div className={styles.detailCard}>
        <div className={styles.containerTitle}>
          <h1>{recipe.title}</h1>
          <span className={`${styles.badge} ${styles[recipe.category]}`}>
            {recipe.category}
          </span>
        </div>
        <div>
          <h3>Інгредієнти:</h3>
          <p>{recipe.ingredients}</p>
        </div>
        <div>
          <h3>Інструкції:</h3>
          <p>{recipe.instructions}</p>
        </div>
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
    </div>
  );
}

export default RecipeDetail;
