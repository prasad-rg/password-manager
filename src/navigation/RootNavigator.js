import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';

import AppStack from './AppStack';
import {useSelector} from 'react-redux';
import AuthTabNavigator from './AuthTabNavigator';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const RootNavigator = () => {
  const {isLoggedIn} = useSelector(state => state.auth);
  return (
    <NavigationContainer theme={MyTheme} onReady={() => RNBootSplash.hide()}>
      {isLoggedIn ? <AppStack /> : <AuthTabNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;
