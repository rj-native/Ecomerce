import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  AddingShippingAddress,
  ChangePassword,
  ProfileScreen,
  Setting,
  ShippingAddress,
} from '../../screen';

const ProfileboardStack = createStackNavigator();

export const ProfileStackScreens = () => (
  <ProfileboardStack.Navigator screenOptions={{ headerShown: false }}>
    <ProfileboardStack.Screen name="profile" component={ProfileScreen} />
    <ProfileboardStack.Screen name="setting" component={Setting} />
    <ProfileboardStack.Screen name="shipping" component={ShippingAddress} />
    <ProfileboardStack.Screen
      name="addingshipping"
      component={AddingShippingAddress}
    />
    <ProfileboardStack.Screen
      name="changePassword"
      component={ChangePassword}
    />
  </ProfileboardStack.Navigator>
);
