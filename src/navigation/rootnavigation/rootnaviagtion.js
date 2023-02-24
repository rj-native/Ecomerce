import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import { getToken } from '../../utils';
import { AuthStackScreen } from '../authStack';
import { MainContainer } from '../mainContainer';

const RootStack = createStackNavigator();
export const RootStackScreen = () => {
  const { token } = useSelector((state) => state.auth);

  // const userToken = getToken('token');
  // console.log('token', token);
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {token ? (
        <RootStack.Screen name="App" component={MainContainer} />
      ) : (
        <RootStack.Screen name="Auth" component={AuthStackScreen} />
      )}
    </RootStack.Navigator>
  );
};
