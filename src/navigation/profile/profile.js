import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ProfileScreen, Setting } from '../../screen';

const ProfileboardStack = createStackNavigator();

export const ProfileStackScreens = () => (
  <ProfileboardStack.Navigator screenOptions={{ headerShown: false }}>
    <ProfileboardStack.Screen name="profile" component={ProfileScreen} />
    <ProfileboardStack.Screen name="setting" component={Setting} />
  </ProfileboardStack.Navigator>
);
