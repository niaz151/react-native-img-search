import React from 'react';
import {View,Text, StyleSheet} from 'react-native';

function Home(){
  return(
    <View>
      <Text> Home </Text> 
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