import React from 'react';
import {View, StyleSheet, TextInput } from 'react-native';
import {Icon, Button} from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useSelector, useDispatch} from 'react-redux';

function Home(){

  const search_query = useSelector(state => state['search_query']);
  const dispatch = useDispatch();

  const URL = 'https://pixabay.com/api/';
  const API_KEY = '15890560-8a70823bcdf077266eac5013e';
  
  function onTextChange(text){
    dispatch({
      type:'UPDATE_SEARCH_QUERY',
      payload:text
    });
  }

  function onSubmit(){
    var endpoint = URL + `?key=${API_KEY}` + `&q=${search_query}`;
    fetch(endpoint)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      var images = data['hits'].map( (item) => {
        return item['previewURL']
      })
      dispatch({
        type:'UPDATE_ALL_IMAGES',
        payload: images
      })
    });
  }

  return(
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput style={styles.textArea} onChangeText={ text => onTextChange(text)} /> 
        <Button icon={<Icon name='search' size={15} color='white'/>} buttonStyle={styles.btnStyles} onPress={() => onSubmit()} color="#000"/>
      </View>
    </View>
  ) 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: hp("5%")
  },
  textInputContainer: {
    width:wp("90%"),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textArea: {
    height: hp("5%"),
    width: wp("68%"),
    borderBottomWidth: 1,
    borderColor:'black',
  },
  btnStyles:{
    backgroundColor: '#0B6AB0',
    marginLeft:wp("2%"),
    width:wp("20%"),
  }
})

export default Home;
 
