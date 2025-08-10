function RecipeCard({ recipes }) {
  return (
    <div>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.ingredients}</p>
            <p>{recipe.instructions}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeCard;
