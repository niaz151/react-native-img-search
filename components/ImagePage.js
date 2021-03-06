import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {Icon} from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

function ImagePage(){

  // REDUX HOOK
  const screen_orientation = useSelector(state => state['screen_orientation']);
  
  // NAVIGATION HOOK
  const navigation = useNavigation();

  // EXTRACT ALL RELEVANT IMG DATA FROM STURE
  const single_img_data = useSelector(state => state['image_data']['single_image'][0]);
  const img_url = single_img_data['largeImageURL'];
  const img_tags = single_img_data['tags'];
  const img_uploader = single_img_data['user'];
  const img_res_height = single_img_data['imageHeight'];
  const img_res_width = single_img_data['imageWidth'];


  // CHOOSE STYLESHEET AND HEADER BASED ON ORIENTATION
  function getStyleType(){
    if (screen_orientation === 'PORTRAIT'){
      // ADJUST HEADER HEIGHT
      navigation.setOptions({
        headerStyle:{height:hp("11%"), backgroundColor: '#7BABED'}
      });
      return portraitStyles;
    }
    
    else{
      // ADJUST HEADER HEIGHT
      navigation.setOptions({
        headerStyle:{height:hp("7%"), backgroundColor: '#7BABED'}
      });
      return landscapeStyles;
    }
  }

  return(
    <View style={commonStyles.container} >
      <View style={getStyleType().imgHeader}>
        <View style={commonStyles.imgUploaderWrap}>
          <Icon name='user-circle'type='font-awesome'/>
          <Text> {img_uploader} </Text>
        </View>
      </View>
      <Image source={{uri:img_url}} style={getStyleType().imgStyle} />
      <View style={getStyleType().imgFooter}>
        <View style={commonStyles.imgTagsWrap}>
          <Icon name='hashtag'type='font-awesome'/>
          <Text> {img_tags} </Text>
        </View>
        <View style={commonStyles.imgResolutionWrap}>
          <Icon name='crop' type='font-awesome' />
          <Text> {img_res_height} x {img_res_width} </Text>
        </View>
      </View>
    </View>
  )
}

const commonStyles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#CED6E3'
  },
  imgUploaderWrap:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginLeft:wp("1%"),
  },
  imgTagsWrap:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    marginLeft:wp("1%"),
  },
  imgResolutionWrap:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-end',
    marginRight:wp("1%"),
  },
})

const portraitStyles = StyleSheet.create({
  imgHeader:{
    height:hp("6%"),
    width: wp("85%"),
    alignItems:'flex-start',
    justifyContent:'center'
  },
  imgStyle:{
    height: hp("35%"),
    width: wp("85%"),
  },
  imgFooter:{
    height:hp("6%"),
    width: wp("85%"),
    flexDirection:'row',
  },
})

const landscapeStyles = StyleSheet.create({
  imgHeader:{
    height:hp("6%"),
    width: wp("100%"),
    alignItems:'flex-start',
    justifyContent:'center',
    marginTop:hp("-2%")
  },
  imgStyle:{
    height: hp("25%"),
    width: wp("100%"),
  },
  imgFooter:{
    height:hp("6%"),
    width: wp("100%"),
    flexDirection:'row',
  },
})

export default ImagePage;