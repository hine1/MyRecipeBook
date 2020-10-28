import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Recipes from './screens/Recipes';
import RecipeItem from './screens/RecipeItem';

const recipeScreen = createStackNavigator(
	{
		Recipes:{
			screen: Recipes,
		},
		RecipeItem: {
			screen: RecipeItem
		},
	}
);

export default createAppContainer(recipeScreen);