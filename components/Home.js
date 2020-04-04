import React, {useEffect} from 'react';
import {View,Text, StyleSheet, Dimensions, Platform} from 'react-native';

function Home(){
   
  return(
    <View style={styles.container}>
      <Text> hi </Text> 
    </View>
  ) 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Home;

