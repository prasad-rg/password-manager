import React from 'react';
import {StyleSheet, View} from 'react-native';
import FormField from './src/components/FormField';
import ListView from './src/components/ListView';
import AppStack from './src/navigation/AppStack';
import AuthTabNavigator from './src/navigation/AuthTabNavigator';
import PasswordManagerScreen from './src/screens/PasswordManagerScreen';

const App = () => {
  return <AppStack />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#0E85FF',
  },
});
export default App;
