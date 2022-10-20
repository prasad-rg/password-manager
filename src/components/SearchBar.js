import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchBar = ({onPress, onChangeText, value}) => {
  return (
    <View style={styles.searchBar}>
      <TextInput
        placeholder="Type kewords to search"
        onChangeText={onChangeText}
        value={value}
      />
      <TouchableOpacity onPress={onPress}>
        <Icon name="arrow-forward" size={20} color="#0E85FF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    height: 59,
    width: '100%',
    textAlign: 'left',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
  },
});

export default SearchBar;
