import { useNavigate, useParams } from "react-router-dom";
import styles from "./RecipeDetail.module.css";

function RecipeDetail({ recipes }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = recipes.find((r) => String(r.id) === id);

  if (!recipe) {
    return <p className={styles.notFound}>Рецепт не знайдено</p>;
  }

  return (
    <div className={styles.detail}>
      <h1>{recipe.title}</h1>
      <h3>Інгредієнти:</h3>
      <p>{recipe.ingredients}</p>
      <h3>Інструкції:</h3>
      <p>{recipe.instructions}</p>
      <button onClick={() => navigate(`/edit/${id}`)}>Редагувати</button>
    </div>
  );
}

export default RecipeDetail;
