function EditRecipe() {
  return (
    <div>
      <form>
        <label>
          Назва страви:
          <input type="text" required />
        </label>

        <label>
          Інгредієнти:
          <textarea required />
        </label>

        <label>
          Інструкції:
          <textarea required />
        </label>

        <button type="submit">Зберегти відредагований рецепт</button>
      </form>
    </div>
  );
}

export default EditRecipe;
