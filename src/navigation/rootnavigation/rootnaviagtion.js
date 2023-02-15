import { createStackNavigator } from '@react-navigation/stack';
import { getToken } from '../../utils';

import { AuthStackScreen } from '../authStack';
import { MainContainer } from '../mainContainer';

const RootStack = createStackNavigator();
export const RootStackScreen = () => {
  const userToken = getToken('token');

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {!userToken ? (
        <RootStack.Screen name="App" component={MainContainer} />
      ) : (
        <RootStack.Screen name="Auth" component={AuthStackScreen} />
      )}
    </RootStack.Navigator>
  );
};
