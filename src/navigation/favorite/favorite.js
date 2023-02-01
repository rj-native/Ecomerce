import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {FavoriteScreen} from '../../screen';

const FavoriteboardStack = createStackNavigator();

export const FavoriteStackScreens = () => (
  <FavoriteboardStack.Navigator screenOptions={{headerShown: false}}>
    <FavoriteboardStack.Screen name="favorite" component={FavoriteScreen} />
  </FavoriteboardStack.Navigator>
);
