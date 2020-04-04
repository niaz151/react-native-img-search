import React from 'react';
import {FlatList, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function ImageList(){

  const images = useSelector( state => state['image_data']['all_images']);

  function handleImgPress(){
    
  }

  return( 
    <FlatList
      numColumns={2}
      horizontal={false}
      contentContainerStyle={styles.listStyles}
      data = {images}
      renderItem = { image =>  
        <TouchableOpacity>
          <Image 
            style={styles.imgStyles} 
            source={{uri:`${image['item']['url']}`}} 
          />
        </TouchableOpacity>} 
      keyExtractor = { image => {return image['index']}}
    />
  ) 
}

const styles = StyleSheet.create({ 
  listStyles:{
   borderColor:'black',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between'
  },  
  imgStyles: {
    width: 120,
    height: 100,
    margin: wp("5%")
  }
})

export default ImageList;