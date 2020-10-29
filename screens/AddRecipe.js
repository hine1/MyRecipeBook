import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {fetchRecipes} from '../utils/api';

export default class AddRecipe extends React.Component{
	state={
		recipes:[],
	};

	async componentDidMount(){
		const recipes = await fetchRecipes();
		this.setState({recipes});
	}

	render(){
		const {name, image, ingredients, instructions} = this.state;
		return(
			<View style={styles.container}>
				<View style={styles.inputContainer}>
					<Text style={styles.inputLabel}>Name: </Text>
					<TextInput value={name} style={styles.input}/>
				</View>
				<View style={styles.inputContainer}>
					<Text style={styles.inputLabel}>Image: </Text>
					<TextInput value={image} style={styles.input}/>
				</View>
				<View style={styles.inputContainer}>
					<Text style={styles.inputLabel}>Ingredients: </Text>
					<TextInput value={ingredients} style={styles.input}/>
				</View>
				<View style={styles.inputContainer}>
					<Text style={styles.inputLabel}>Instructions: </Text>
					<TextInput value={instructions} style={styles.input}/>
				</View>
			</View>
		);
	}
}

const styles= StyleSheet.create({
	container:{
		flex:1,
	},
	inputContainer:{
		flexDirection: 'row',
		marginHorizontal: 20,
		marginTop: 10,
	},
	input:{
		height: 40, 
		borderColor: 'gray',
		borderStyle: 'dotted',
		borderRadius: 2, 
		borderWidth: 1,
		flex:1,
		borderColor: '#965757'
	},
	inputLabel:{
		width: 100,
		color: '#965757',
	}
})