import { useParams } from "react-router-dom";

function RecipeDetail(recipes) {
  const { id } = useParams;

  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) {
    return <p>Рецепт не знайдено</p>;
  }

  return (
    <div>
      <h1>Назва</h1>
      <p>Інгредієнти</p>
      <p>Інструкції</p>
    </div>
  );
}

export default RecipeDetail;
