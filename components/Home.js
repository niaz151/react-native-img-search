import React, {useEffect} from 'react';
import {View, StyleSheet, TextInput } from 'react-native';
import {Icon, Button} from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { bindActionCreators } from 'redux';
import {useSelector, useDispatch} from 'react-redux';
import {updateSearchQuery} from '../redux/actions/index';

function Home(){

  const search_query = useSelector(state => state['search_query']);
  const dispatch = useDispatch();
 
  function onTextChange(text){
    dispatch({
      type:'UPDATE_SEARCH_QUERY',
      payload:text
    })
  }

  return(
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput style={styles.textArea} onChangeText={ text => onTextChange(text)} /> 
        <Button icon={<Icon name='search' size={15} color='white'/>} buttonStyle={styles.btnStyles} color="#000"/>
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
 
