import RecipeForm from "../components/RecipeForm/RecipeForm";

function AddRecipe({ onAddRecipe }) {
  const handleAddRecipe = (recipeData) => {
    onAddRecipe(recipeData);
  };

  return (
    <div>
      <RecipeForm onSubmit={handleAddRecipe} />
    </div>
  );
}

export default AddRecipe;
