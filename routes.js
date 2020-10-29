import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Recipes from './screens/Recipes';
import RecipeItem from './screens/RecipeItem';
import AddRecipe from './screens/AddRecipe';
const recipeScreen = createStackNavigator(
	{
		Recipes:{
			screen: Recipes,
		},
		RecipeItem: {
			screen: RecipeItem
		},
		AddRecipe: {
			screen: AddRecipe
		},
	}
);

export default createAppContainer(recipeScreen);