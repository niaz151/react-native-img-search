import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useSelector, useDispatch} from 'react-redux';
import ImageList from './ImageList';

function Home(){

  // REDUX HOOKS
  const search_query = useSelector(state => state['search_query']);
  const all_images = useSelector(state => state['image_data']['all_images'])
  const dispatch = useDispatch();

  // API INFO
  const URL = 'https://pixabay.com/api/';
  const API_KEY = '15890560-8a70823bcdf077266eac5013e';


 function handleSearchQuery(text){

    // SEND UPDATE QUERY ACTION
    dispatch({
      type:'UPDATE_SEARCH_QUERY',
      payload:text
    });

    // FETCH ALL DATA FOR SINGLE IMG
    var endpoint = URL + `?key=${API_KEY}` + `&q=${search_query}`;
    fetch(endpoint)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // EXTRACT ALL RELEVANT SINGLE IMG DATA
      var images = data['hits'].map( (item) => {
        return {
          'id':item['id'], 
          'height': item['previewHeight'],
          'width': item['previewWidth'],
          'url': item['previewURL']
        }
      })
      // PUT ALL RELEVANT IMG DATA INTO STORE VIA REDUCER
      dispatch({
        type:'FETCH_ALL_IMAGES',
        payload: images
      })
    });
  }

  return(
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
      <SearchBar
        containerStyle={styles.searchBar}
        inputContainerStyle={styles.searchBarInput}
        placeholder={'Search'}
        onChangeText={ (text) => handleSearchQuery(text)}
        value={search_query}
      />
      </View>
      <View>
        <ImageList/>
      </View>
    </View>
  ) 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: hp("5%"),
    backgroundColor:'#CED6E3'
  },
  textInputContainer: {
    width:wp("80%"),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center'
  },
  searchBar: {
    width: wp("80%"),
    height:hp("5%"),
    backgroundColor:'white',
    borderRadius: 18,
    borderBottomColor:'transparent',
    borderTopColor:'transparent'
  },
  searchBarInput:{
    height: 30,
    backgroundColor:'white',
    marginTop:-2,
  }, 
})

export default Home;
 
