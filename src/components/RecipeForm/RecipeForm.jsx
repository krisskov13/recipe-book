import { useState } from "react";
import styles from "./RecipeForm.module.css";
import { useNavigate } from "react-router-dom";

function RecipeForm({ onSubmit }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      id: Date.now(),
      title,
      ingredients,
      instructions,
      category,
    };

    console.log("Новий рецепт:", formData);

    onSubmit(formData);
    navigate("/");
  };

  return (
    <div className={styles.pageContainer}>
      <h1>Додай новий рецепт</h1>
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
            <option value="" disabled>
              Оберіть категорію
            </option>
            <option value="Сніданок">Сніданок</option>
            <option value="Обід">Обід</option>
            <option value="Вечеря">Вечеря</option>
            <option value="Десерт">Десерт</option>
          </select>
        </label>
        <button type="submit">Зберегти рецепт</button>
      </form>
    </div>
  );
}

export default RecipeForm;
