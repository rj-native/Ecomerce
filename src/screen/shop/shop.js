import * as React from 'react';
import {Text, View} from 'react-native';

export const ShopScreen = () => {
  return (
    <View>
      <Text onPress={() => navigation.navigate('homepage')}>
        Welcome To Shop Page
      </Text>
    </View>
  );
};
