import React from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';


export default function RecipeListItem({
  name,
  image,
  onPress,
}) {

  return (
    <TouchableHighlight
      style={styles.container}
      underlayColor="7f7a7a"
      onPress={onPress}
    >
      <View style={styles.recipeInfo}>
        <Image
          style={styles.image}
          source={image}
        />
        <Text style={[styles.title]}>{name}</Text>
      </View>
    </TouchableHighlight>
  );
}

RecipeListItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex:1,
  },
  recipeInfo: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 3,
    borderColor: '#965757',
    marginBottom: 10,

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
    color:'#965757',
  },
});
