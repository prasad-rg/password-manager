import React from 'react';
import {StyleSheet, View, SafeAreaView, Text} from 'react-native';
import AuthTabNavigator from './src/navigation/AuthTabNavigator';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <AuthScreenHolder /> */}
      <AuthTabNavigator />
      {/* <SignUpScreen /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
