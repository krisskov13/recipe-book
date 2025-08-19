import { useNavigate, useParams } from "react-router-dom";
import styles from "./RecipeDetail.module.css";

function RecipeDetail({ recipes, handleDelete }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = recipes.find((r) => String(r.id) === id);

  if (!recipe) {
    return <p className={styles.notFound}>Рецепт не знайдено</p>;
  }

  const onDelete = () => {
    handleDelete(recipe.id);
    navigate("/");
  };

  return (
    <div className={styles.detail}>
      <div className={styles.containerTitle}>
        <h1>{recipe.title}</h1>
        <span className={`${styles.badge} ${styles[recipe.category]}`}>
          {recipe.category}
        </span>
      </div>
      <h3>Інгредієнти:</h3>
      <p>{recipe.ingredients}</p>
      <h3>Інструкції:</h3>
      <p>{recipe.instructions}</p>

      <div className={styles.buttons}>
        <button
          className={styles.editBtn}
          onClick={() => navigate(`/edit/${id}`)}
        >
          Редагувати
        </button>
        <button className={styles.deleteBtn} onClick={onDelete}>
          Видалити
        </button>
      </div>
    </div>
  );
}

export default RecipeDetail;
