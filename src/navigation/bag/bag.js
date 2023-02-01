import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {BagScreen} from '../../screen';

const BagboardStack = createStackNavigator();

export const BagStackScreens = () => (
  <BagboardStack.Navigator screenOptions={{headerShown: false}}>
    <BagboardStack.Screen name="bag" component={BagScreen} />
  </BagboardStack.Navigator>
);
