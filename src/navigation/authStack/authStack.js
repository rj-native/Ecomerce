import {createStackNavigator} from '@react-navigation/stack';

import {Login, Signup} from '../../screen';

const AuthStack = createStackNavigator();

export const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{headerShown: false, headerBackImage: true}}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="SignUp" component={Signup} />
    </AuthStack.Navigator>
  );
};
