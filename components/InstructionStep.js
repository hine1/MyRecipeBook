import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function InstructionStep({item}){
	return(
		<View style={styles.container}>
			<Text style={styles.title}>{item}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
  container: {
  	marginVertical: 15,
    marginHorizontal: 20,
    flex:1,
  },
  title: {
    alignSelf: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    color:"#965757",
  },
});