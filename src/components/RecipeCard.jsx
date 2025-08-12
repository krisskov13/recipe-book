import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
    <Link to={`/recipe/${recipe.id}`}>
      <div>
        <h3>{recipe.title}</h3>
        <p>{recipe.ingredients}</p>
        <p>{recipe.instructions}</p>
      </div>
    </Link>
  );
}

export default RecipeCard;
