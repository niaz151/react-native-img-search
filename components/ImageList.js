import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

function ImageList(){

  const images = useSelector( state => state['image_data'])

  return(
    <FlatList>

    </FlatList>
  )
}

const styles = StyleSheet.create({
  list:{
    
  }
})