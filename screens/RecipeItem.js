import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

import Ingredient from '../components/Ingredient';
 
export default class RecipeItem extends React.Component {
	static navigationOptions = ({navigation: {state: {params}}}) => {
		const {recipe: {name}} = params;
		return{
			title: name,
			headerTintColor: '#965757',
		};	
	}
	renderIngredient = ({item}) => {
		return(
			<Ingredient item={item} />
		);
	}
	render(){
		const {navigation: {state: {params}}} = this.props;
		const {recipe} = params;
		const {name, image, instructions, ingredients} = recipe;
		const {ingredientId} = ingredients;
		console.log(ingredientId);
		// const ingredientKeyExtractor= ({ingredientId}) = ingredientId;

		return(
			<View style={styles.container}>
				<View style={styles.header}>
					<Image source={image} style={styles.image}/>
					<Text style={styles.title}>{name}</Text>
				</View>
				
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
  	marginVertical: 15,
    marginHorizontal: 20,
    flex:1,
  },
  header:{
  	borderBottomWidth:1,
  	borderStyle: 'dashed',
  	borderRadius: 3,
    borderBottomColor: '#965757',
  },
  image: {
    alignSelf: 'center',
    borderRadius: 5,
    width: 200,
    height: 200,
  },
  title: {
    alignSelf: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    color:"#965757",
  },
  ingredients:{},
  instructions:{},
});
// <FlatList
// 					data={ingredients}
// 					style={styles.ingredients}
// 					renderItem={this.renderIngredient}
// 					keyExtractor={ingredientKeyExtractor}
// 				/>