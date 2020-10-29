import React from 'react';
import {FlatList, StyleSheet, StatusBar, Text, View, Image, ScrollView } from 'react-native';

import RecipeButton from '../components/RecipeButton';
import RecipeListItem from '../components/RecipeListItem';
import {fetchRecipes} from '../utils/api';

const keyExtractor = ({id}) => id;
export default class Recipes extends React.Component{
  static navigationOptions = {
    title: 'Recipes',
    headerTintColor: '#965757',
  };
	state = {
		recipes: [],
		isLoading: true,
		error: false,
	}
	async componentDidMount(){
		const recipes = await fetchRecipes();
		this.setState({recipes, isLoading: false});
	};

  componentWillUnmount(){

  };

	renderRecipe = ({item}) => {
    const {navigation: {navigate}} = this.props;
		const {name, image} = item;
		return(
			<RecipeListItem 
        name={name} 
        image={image} 
        onPress={()=>navigate('RecipeItem', {recipe:item})}
      />
		);
	}
  render(){
    const {navigation: {navigate}} = this.props;
  	const {recipes} = this.state;
    return(
      <View style={styles.container}>
        <View style={styles.buttonList}>
          <RecipeButton title="+" small color="#965757" styles={styles.button} onPress={()=>navigate('AddRecipe')}/>
        </View>
        <FlatList
          style={styles.recipeList}
        	data={recipes}
        	renderItem={this.renderRecipe}
        	keyExtractor = {keyExtractor}
        />
      </View>
    );
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  recipeList: {
    flex:1,
    paddingBottom:15,
  },
	buttonList: {
    alignItems: 'center',
    paddingBottom: 15,
  },
});
