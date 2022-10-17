import React from 'react';
import {StyleSheet, View} from 'react-native';
import ListView from './src/components/ListView';
import AuthTabNavigator from './src/navigation/AuthTabNavigator';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <AuthTabNavigator /> */}
      <ListView />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
  },
});
export default App;
