import RecipeForm from "../components/RecipeForm";

function AddRecipe({ onAddRecipe }) {
  const handleAddRecipe = (recipeData) => {
    onAddRecipe(recipeData);
  };

  return (
    <div>
      <h1>Новий рецепт</h1>
      <RecipeForm onSubmit={handleAddRecipe} />
    </div>
  );
}

export default AddRecipe;
