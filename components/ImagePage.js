import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function ImagePage({navigation}){

  // EXTRACT ALL DATA FROM IMG JSON DATA
  const single_img_data = useSelector(state => state['image_data']['single_image'][0]);
  const img_url = single_img_data['largeImageURL'];
  const img_likes = single_img_data['likes'];
  const img_tags = single_img_data['tags'];
  const img_downloads = single_img_data['downloads'];
  const img_uploader = single_img_data['user'];
  

  return(
    <View style={styles.container} >
      <Image source={{uri:img_url}} style={styles.imgStyle} />
      {/* FLEX TABLE LAYOUT */}
      <View style={styles.imgDetails}>
        <View style={styles.imgDetailsRow}>
          <View style={styles.imgDetailsColumn}>
            <Text> Number of likes {img_likes} </Text>
          </View>
          <View style={styles.imgDetailsColumn}>
            <Text> Tags {img_tags} </Text>
          </View>
        </View>
        <View style={styles.imgDetailsRow}>
          <View style={styles.imgDetailsColumn}>
            <Text> Number of downloads {img_downloads} </Text>
          </View>
          <View style={styles.imgDetailsColumn}>
            <Text> Uploaded by {img_uploader} </Text>
          </View>
        </View>
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
  imgStyle:{
    height: hp("40%"),
    width: wp("85%")
  },
  imgDetails:{
    height: hp("20%"),
    width: wp("85%"),
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    marginTop:hp("5%")
  },
  imgDetailsRow:{
    height:hp("10%"),
    width:wp("85%"),
    flexDirection:"row", 
  },
  imgDetailsColumn:{
    height:hp("10%"),
    width: wp("42.5%"),
    borderWidth:1,
    borderColor: 'red'
  }
})

export default ImagePage;