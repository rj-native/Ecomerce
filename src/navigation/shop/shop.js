import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {ShopScreen} from '../../screen';

const ShopboardStack = createStackNavigator();

export const ShopStackScreens = () => (
  <ShopboardStack.Navigator screenOptions={{headerShown: false}}>
    <ShopboardStack.Screen name="shop" component={ShopScreen} />
  </ShopboardStack.Navigator>
);
