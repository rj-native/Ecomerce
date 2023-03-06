// import React, { useEffect, useState } from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { useSelector } from 'react-redux';
// import { getToken, setToken } from '../../utils';
// import { AuthStackScreen } from '../authStack';
// import { MainContainer } from '../mainContainer';

// const RootStack = createStackNavigator();
// export const RootStackScreen = () => {
//   const [token, setToken] = useState(null);
//   console.log('tokkkenn miiillla', token);
//   const { token: tokens } = useSelector((state) => state.auth);
//   const getTokens = async () => {
//     const userToken = await getToken();
//     setToken(userToken ? userToken : null);
//   };
//   useEffect(() => {
//     getTokens();
//   }, []);
//   return (
//     <RootStack.Navigator screenOptions={{ headerShown: false }}>
//       {token || tokens ? (
//         <RootStack.Screen name="App" component={MainContainer} />
//       ) : (
//         <RootStack.Screen name="Auth" component={AuthStackScreen} />
//       )}
//     </RootStack.Navigator>
//   );
// };

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import { AuthStackScreen } from '../authStack';
import { MainContainer } from '../mainContainer';

const RootStack = createStackNavigator();
export const RootStackScreen = () => {
  const { token } = useSelector((state) => state.auth);
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
