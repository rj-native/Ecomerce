import * as React from 'react';
import {Text, View, Button} from 'react-native';

export const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Welcome To Home Screen</Text>
      <Button
        title="Go to Bag Page"
        onPress={() => navigation.navigate('bag')}
      />
    </View>
  );
};
