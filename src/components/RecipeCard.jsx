function RecipeCard({ title, description, imageUrl }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={imageUrl} alt={title} />
    </div>
  );
}

export default RecipeCard;
