import React from 'react';
import {createStore} from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import reducers from './reducers';
import Home from './components/Home';
import ImagePage from './components/ImagePage';

const Stack = createStackNavigator();
const store = createStore(reducers);

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
