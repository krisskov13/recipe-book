import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./EditRecipe.module.css";

function EditRecipe({ recipes, onUpdate }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = recipes.find((r) => String(r.id) === id);

  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setIngredients(recipe.ingredients);
      setInstructions(recipe.instructions);
      setCategory(recipe.category);
    }
  }, [recipe]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedRecipe = {
      ...recipe,
      title,
      ingredients,
      instructions,
      category,
    };

    onUpdate(updatedRecipe);
    navigate(`/recipe/${id}`);
  };

  if (!recipe) {
    return <p>Рецепт не знайдено</p>;
  }

  return (
    <div className={styles.pageContainer}>
      <h2>Редагувати рецепт</h2>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <label>
          Назва страви:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>

        <label>
          Інгредієнти:
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          />
        </label>

        <label>
          Інструкції:
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            required
          />
        </label>

        <label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Сніданок">Сніданок</option>
            <option value="Обід">Обід</option>
            <option value="Вечеря">Вечеря</option>
            <option value="Десерт">Десерт</option>
          </select>
        </label>

        <button type="submit">Зберегти зміни</button>
      </form>
    </div>
  );
}

export default EditRecipe;
