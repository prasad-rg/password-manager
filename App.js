import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppStack from './src/navigation/AppStack';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
  // return <AuthTabNavigator />;
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
