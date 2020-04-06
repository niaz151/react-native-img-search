import React from 'react';
import {FlatList, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

function ImageList(){

  // REDUX HOOKS
  const images = useSelector( state => state['image_data']['all_images']);
  const dispatch = useDispatch();

  // NAVIGATION HOOK
  const navigation = useNavigation();

  // API INFO
  const URL = 'https://pixabay.com/api/';
  const API_KEY = '15890560-8a70823bcdf077266eac5013e';


  function handleImgListClick(img_id){
    // FETCH SINGLE IMAGE DATA
    var endpoint = URL + `?key=${API_KEY}` + `&id=${img_id}`;
    fetch(endpoint)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // STORE SINGLE IMG DATA VIA REDUCER
      var img_data = data['hits'];
      dispatch({
        type:'FETCH_IMAGE_DETAILS',
        payload:img_data
      });
      // NAVIGATE TO IMAGE DETAILS SCREEN
      navigation.navigate('Image_Details');
    });
  }

  return(
    <FlatList
      showsVerticalScrollIndicator={false}
      numColumns={2}
      horizontal={false}
      contentContainerStyle={styles.listStyles}
      data = {images}
      renderItem = { image =>  
        <TouchableOpacity onPress={() => handleImgListClick(image['item']['id'])} >
          <Image 
            style={styles.imgStyles} 
            source={{uri:`${image['item']['url']}`}} 
          />
        </TouchableOpacity>} 
      key={Math.random()}
    />
  ) 
}

const styles = StyleSheet.create({ 
  listStyles:{
   borderColor:'black',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   paddingBottom: hp("10%"),
   marginTop:hp("1%")
  },  
  imgStyles: {
    width: wp("30%"),
    height: hp("10%"),
    margin: wp("5%")
  }
})

const landscapeStyles = StyleSheet.create({
  listStyles:{
    borderColor:'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: hp("10%"),
    marginTop:hp("1%")
   },  
   imgStyles: {
     width: wp("30%"),
     height: hp("10%"),
     margin: wp("5%")
   }
})

export default ImageList;