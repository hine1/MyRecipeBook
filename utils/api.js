import uuidv4 from 'uuid/v4';
import recipeList from './mock/recipe-list';
import sleep from './sleep';

const mapRecipe = async recipe => {
  const { name, image, ingredients } = recipe;
  // await sleep(500);
  ingredients = ingredients.map(mapIngredient);
	return {
	  id: uuidv4(),
	  name,
    image,
	  ingredients,
	};
};

const mapIngredient = ingredients => {
	const {ingredient} = ingredients;
	return {
		ingredientId : uuidv4(),
		ingredient,
	}
};

export const fetchRecipes = async () => {
  await sleep(500);

  return recipeList.map(mapRecipe);
};

