
import { useGetRecipesQuery } from '../features/recipe/recipeSlice';

const Test = () => {
  const {
    data: recipes,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetRecipesQuery();

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (isError) {
    content = <p className="errmsg">{error?.data?.msg}</p>;
  }

  if (isSuccess) {
    content = (
      <div>
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    );
  }

  return <div>{content}</div>;
};

export default Test;
