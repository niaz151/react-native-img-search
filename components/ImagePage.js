import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function ImagePage({navigation}){

  
  // EXTRACT ALL RELEVANT IMG DATA FROM STURE
  const single_img_data = useSelector(state => state['image_data']['single_image'][0]);
  const img_url = single_img_data['largeImageURL'];
  const img_likes = single_img_data['likes'];
  const img_tags = single_img_data['tags'];
  const img_downloads = single_img_data['downloads'];
  const img_uploader = single_img_data['user'];
  

  return(
    <View style={styles.container} >
      <Image source={{uri:img_url}} style={styles.imgStyle} />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  imgStyle:{
    height: hp("40%"),
    width: wp("85%")
  },
})

export default ImagePage;