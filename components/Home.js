import React from 'react';
import {View, StyleSheet, Dimensions, Platform} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useSelector, useDispatch} from 'react-redux';
import ImageList from './ImageList';

function Home(){

  // REDUX HOOKS
  const search_query = useSelector(state => state['search_query']);
  const screen_orientation = useSelector(state => state['screen_orientation']);
  const dispatch = useDispatch();

  // API INFO
  const URL = 'https://pixabay.com/api/';
  const API_KEY = '15890560-8a70823bcdf077266eac5013e';


  // DETECT INITIAL SCREEN ORIENTATION 
  const dimensions = Dimensions.get('screen');
  (dimensions.height > dimensions.width)?
    dispatch({
      type:'UPDATE_SCREEN_ORIENTATION',
      payload:'PORTRAIT'
    }):
    dispatch({
      type:'UPDATE_SCREEN_ORIENTATION',
      payload:'LANDSCAPE'
    })

  // ADD LISTENER FOR ORIENTATION CHANGE
  Dimensions.addEventListener('change', () => {
    let dimensions = Dimensions.get('screen')
    if(dimensions.height > dimensions.width){
      dispatch({
        type:'UPDATE_SCREEN_ORIENTATION',
        payload:'PORTRAIT'
      })
    }
    else{
      dispatch({
        type:'UPDATE_SCREEN_ORIENTATION',
        payload:'LANDSCAPE'
      })
    }
  })

  // CHOOSE STYLESHEET BASED ON ORIENTATION
  function getStyleType(){
    return screen_orientation === 'PORTRAIT' ? portraitStyles : landscapeStyles;
  }

  function handleSearchQuery(text){

    // SEND UPDATE QUERY ACTION
    dispatch({
      type:'UPDATE_SEARCH_QUERY',
      payload:text
    });

    // FETCH DATA FOR ALL IMAGES 
    var endpoint = URL + `?key=${API_KEY}` + `&q=${search_query}`;
    fetch(endpoint)
    .then((response) => {
      return response.json();
    })
    .then((data) => {

      // EXTRACT ALL RELEVANT IMG DATA
      var images = data['hits'].map( (item) => {
        return {
          'id':item['id'], 
          'height': item['previewHeight'],
          'width': item['previewWidth'],
          'url': item['previewURL'],
          'resHeight': item['imageHeight'],
          'resWidth': item['imageWidth']
        }
      })

      // STORE ALL RELEVANT IMG DATA VIA REDUCER
      dispatch({
        type:'FETCH_ALL_IMAGES',
        payload: images
      })
    });
  }

  return(
    <View style={getStyleType().container} >
      <SearchBar
        containerStyle={getStyleType().searchBar}
        inputContainerStyle={getStyleType().searchBarInput}
        placeholder={'Search'}
        onChangeText={ (text) => handleSearchQuery(text)}
        value={search_query}
      />
      <View style={getStyleType().listContainer}>
        <ImageList/>
      </View>
    </View>
  ) 
}

const portraitStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: hp("2%"),
    backgroundColor:'#CED6E3'
  },
  listContainer:{
    width:wp("90%"),
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

const landscapeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: hp("2%"),
    backgroundColor:'#CED6E3',
  },
  listContainer:{
    width:wp("200%"),
    marginRight:wp("5%")
  },
  searchBar: {
    width: wp("150%"),
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
 
