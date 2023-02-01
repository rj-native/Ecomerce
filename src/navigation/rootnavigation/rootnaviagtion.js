import { createStackNavigator } from '@react-navigation/stack';

import { AuthStackScreen } from '../authStack';
import { MainContainer } from '../mainContainer';

const RootStack = createStackNavigator();
export const RootStackScreen = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="App" component={MainContainer} />

      {/* <RootStack.Screen name="Auth" component={AuthStackScreen} /> */}
    </RootStack.Navigator>
  );
};
