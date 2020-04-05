import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

function ImagePage({navigation}){

  const single_img_data = useSelector(state => state['image_data']['single_image'])
  console.log(single_img_data)

  return(
    <View><Text> image page </Text></View>
  )
}

const styles = StyleSheet.create({
  container:{

  }
})

export default ImagePage;