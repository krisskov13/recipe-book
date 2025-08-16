import { useState } from "react";
import styles from "./RecipeForm.module.css";
import { useNavigate } from "react-router-dom";

function RecipeForm({ onSubmit }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      id: Date.now(),
      title,
      ingredients,
      instructions,
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

        <button type="submit">Зберегти рецепт</button>
      </form>
    </div>
  );
}

export default RecipeForm;
