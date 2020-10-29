import React from 'react';
import {FlatList, StyleSheet, View, SafeAreaView, Image, Text} from 'react-native';

import Ingredient from '../components/Ingredient';
import InstructionStep from '../components/InstructionStep';
 
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
			<Ingredient item={item.ingredient} />
		);
	}
	renderInstructionStep = ({item}) => {
		return(
			<InstructionStep item={item.instruction} />
		);
	}
	render(){
		const {navigation: {state: {params}}} = this.props;
		const {recipe} = params;
		const {name, image, instructions, ingredients} = recipe;
		const {ingredientId} = ingredients;
		const ingredientKeyExtractor= ({ingredientId}) => ingredientId;
		const {instructionId} = instructions;
		const instructionKeyExtractor= ({instructionId}) => instructionId;


		return(
			<SafeAreaView style={styles.container}>
				<View style={styles.header}>
					<Image source={image} style={styles.image}/>
					<Text style={styles.title}>{name}</Text>
				</View>
				<FlatList
					data={ingredients}
					keyExtractor={ingredientKeyExtractor}
					renderItem={this.renderIngredient}
				/>
				<FlatList
					data={instructions}
					keyExtractor={instructionKeyExtractor}
					renderItem={this.renderInstructionStep}
				/>
			</SafeAreaView>
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
