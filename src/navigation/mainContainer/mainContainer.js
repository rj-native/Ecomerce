import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Shopicons from 'react-native-vector-icons/Feather';

import { DashboardStackScreens } from '../dashboard/dashboard';
import { ShopStackScreens } from '../shop';
import { BagStackScreens } from '../bag/bag';
import { FavoriteStackScreens } from '../favorite';
import { ProfileStackScreens } from '../profile';

const Tab = createBottomTabNavigator();

export const MainContainer = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'Shop') {
          iconName = 'shopping-cart';
        } else if (route.name === 'Bag') {
          iconName = 'shopping-bag';
        } else if (route.name === 'Favorite') {
          iconName = 'heart';
        } else if (route.name === 'Profile') {
          iconName = 'user';
        }
        return <Shopicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'red',
    }}
  >
    <Tab.Screen
      name="Home"
      component={DashboardStackScreens}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Shop"
      component={ShopStackScreens}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Bag"
      component={BagStackScreens}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Favorite"
      component={FavoriteStackScreens}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreens}
      options={{
        headerShown: false,
      }}
    />
  </Tab.Navigator>
);
