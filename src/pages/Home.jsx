import RecipeCard from "../components/RecipeCard";

const recipes = [
  {
    id: 1,
    title: "Борщ",
    description: "Традиційний український борщ з буряком і свининою",
    imageUrl:
      "https://i.obozrevatel.com/food/recipemain/2019/3/4/3c4d2ecd-df43-41d2-a17a-71914ead0e50w1023r1s.jpg",
  },
  {
    id: 2,
    title: "Борщ",
    description: "Класичні вареники з картоплею",
    imageUrl:
      "https://i.obozrevatel.com/food/recipemain/2019/7/5/07.png?size=636x424",
  },
];

function Home() {
  return (
    <>
      <h1>Рецепти</h1>
      <div>
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            title={recipe.title}
            description={recipe.description}
            imageUrl={recipe.imageUrl}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
