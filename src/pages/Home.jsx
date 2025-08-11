import RecipeCard from "../components/RecipeCard";

function Home({ recipes }) {
  return (
    <div>
      <h1>Рецепти</h1>
      {recipes.length === 0 ? (
        <p>Рецептів ще немає</p>
      ) : (
        recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
      )}
    </div>
  );
}

export default Home;
