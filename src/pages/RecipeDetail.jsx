import { useParams } from "react-router-dom";

function RecipeDetail({ recipes }) {
  const { id } = useParams();

  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) {
    return <p>Рецепт не знайдено</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <h3>Інгредієнти:</h3>
      <p>{recipe.ingredients}</p>
      <h3>Інструкції:</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetail;
