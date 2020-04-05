import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function ImagePage({navigation}){

  
  // EXTRACT ALL RELEVANT IMG DATA FROM STURE
  const single_img_data = useSelector(state => state['image_data']['single_image'][0]);
  const img_url = single_img_data['largeImageURL'];
  console.log(img_url)
  const img_likes = single_img_data['likes'];
  const img_tags = single_img_data['tags'];
  const img_downloads = single_img_data['downloads'];
  const img_uploader = single_img_data['user'];
  

  return(
    <View style={styles.container} >
      <View style={styles.imgHeader}>
        <Text> {img_uploader} </Text>
      </View>
      <Image source={{uri:img_url}} style={styles.imgStyle} />
      <View style={styles.imgFooter}>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  imgHeader:{
    height:hp("6%"),
    width: wp("85%"),
    borderWidth:1,
    borderColor:'#D4D4D4',
    alignItems:'flex-start',
    justifyContent:'center'
  },
  imgStyle:{
    height: hp("40%"),
    width: wp("85%"),
    borderWidth:1,
    borderColor:'#D4D4D4'
  },
  imgFooter:{
    height:hp("6%"),
    width: wp("85%"),
    borderWidth:1,
    borderColor:'#D4D4D4'
  },
})

export default ImagePage;