import uuidv4 from 'uuid/v4';
import recipeList from './mock/recipe-list';
import sleep from './sleep';

const mapRecipe = recipe => {

  const { name, image, ingredients, instructions } = recipe;
	return {
	  id: uuidv4(),
    instructions: instructions.map(mapInstruction),
	  name,
   	image,
	  ingredients: ingredients.map(mapIngredient),
	};
};

const mapIngredient = ingredients => {
	const {ingredient} = ingredients;
	return {
		ingredientId : uuidv4(),
		ingredient,
	}
};

const mapInstruction = instructions => {
  const {instruction} = instructions;
  return {
    instructionId : uuidv4(),
    instruction,
  }
};

export const fetchRecipes = async () => {
  await sleep(500);

  return recipeList.map(mapRecipe);
};

