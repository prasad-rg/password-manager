import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppStack from './src/navigation/AppStack';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import SearchBar from './src/components/SearchBar';

const App = () => {
  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
  // return (
  //   <View style={styles.container}>
  //     <SearchBar />
  //   </View>
  // );
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
