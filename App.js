import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackScreen} from './src/navigation';
import {MainContainer} from './src/navigation/mainContainer';

import {Home, Login, Signup} from './src/screen';

const App = () => {
  // const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};

export default App;
