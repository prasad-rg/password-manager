import React from 'react';
import {StyleSheet, View, SafeAreaView, Text} from 'react-native';
import AuthScreenHolder from './src/components/AuthScreenHolder';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <AuthScreenHolder /> */}
    <SignUpScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
