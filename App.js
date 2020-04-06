import React from 'react';
import { createStore } from 'redux';
import { Provider, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import reducers from './reducers';
import Home from './components/Home';
import ImagePage from './components/ImagePage';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Stack = createStackNavigator();
const store = createStore(reducers);

//backgroundColor: '#7BABED'
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name='Home'
            component={Home}
            options={{
              title:'Home',
              headerStyle:{backgroundColor: '#7BABED'},
              headerTitleStyle:{color:'white'}
            }} 
          />
          <Stack.Screen
            name='Image_Details'
            component={ImagePage}
            options={{
              title:'Image Details',
              headerStyle:{backgroundColor: '#7BABED'},
              headerTitleStyle:{color:'white'}
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
