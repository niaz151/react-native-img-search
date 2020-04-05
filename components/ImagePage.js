import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {Icon} from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function ImagePage({navigation}){

  
  // EXTRACT ALL RELEVANT IMG DATA FROM STURE
  const single_img_data = useSelector(state => state['image_data']['single_image'][0]);
  const img_url = single_img_data['largeImageURL'];
  const img_likes = single_img_data['likes'];
  const img_tags = single_img_data['tags'];
  const img_downloads = single_img_data['downloads'];
  const img_uploader = single_img_data['user'];
  const img_res_height = single_img_data['imageHeight'];
  const img_res_width = single_img_data['imageWidth'];

  return(
    <View style={styles.container} >
      <View style={styles.imgHeader}>
        <View style={styles.imgUploaderWrap}>
          <Icon name='user-circle'type='font-awesome'/>
          <Text> {img_uploader} </Text>
        </View>
      </View>
      <Image source={{uri:img_url}} style={styles.imgStyle} />
      <View style={styles.imgFooter}>
        <View style={styles.imgLikesWrap}>
          <Icon name='hashtag'type='font-awesome'/>
          <Text> {img_tags} </Text>
        </View>
        <View style={styles.imgDownloadsWrap}>
          <Icon name='crop' type='font-awesome' />
          <Text> {img_res_height} x {img_res_width} </Text>
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
  imgHeader:{
    height:hp("6%"),
    width: wp("85%"),
    alignItems:'flex-start',
    justifyContent:'center'
  },
  imgUploaderWrap:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginLeft:wp("1%"),
  },
  imgLikesWrap:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    marginLeft:wp("1%"),
  },
  imgDownloadsWrap:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-end',
    marginRight:wp("1%"),
  },
  imgStyle:{
    height: hp("40%"),
    width: wp("85%"),
  },
  imgFooter:{
    height:hp("6%"),
    width: wp("85%"),
    flexDirection:'row',
  },
})


export default ImagePage;