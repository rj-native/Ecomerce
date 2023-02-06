import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen} from '../../screen';

const DashboardStack = createStackNavigator();

export const DashboardStackScreens = () => (
  <DashboardStack.Navigator screenOptions={{headerShown: false}}>
    <DashboardStack.Screen name="home" component={HomeScreen} />
  </DashboardStack.Navigator>
);
