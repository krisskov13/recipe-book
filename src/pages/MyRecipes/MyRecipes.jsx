import RecipeCard from "../../components/RecipeCard/RecipeCard";
import styles from "../MyRecipes/MyRecipes.module.css";

function MyRecipes({ recipes }) {
  const userRecipes = recipes.filter((r) => r.isUserRecipe);
  return (
    <div className={styles.container}>
      <h2>Мої рецепти</h2>
      {userRecipes.length > 0 ? (
        <div className={styles.listRecipes}>
          {userRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} showActions={true} />
          ))}
        </div>
      ) : (
        <p>Тут поки немає твоїх рецептів</p>
      )}
    </div>
  );
}

export default MyRecipes;
