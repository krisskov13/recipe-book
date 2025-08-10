import { useState } from "react";

function RecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Новий рецепт:", { title, ingredients, instructions });
  };

  return (
    <div>
      <h1>Додай новий рецепт</h1>
      <form onSubmit={handleSubmit}>
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
          />
        </label>

        <button type="submit">Зберегти рецепт</button>
      </form>
    </div>
  );
}

export default RecipeForm;
