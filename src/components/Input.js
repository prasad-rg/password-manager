import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const Input = ({placeholder = 'Enter Here', style, value, onChangeText}) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#787E8C"
      style={[styles.textInput, {...style}]}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    height: 54,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
    paddingLeft: 22,
    paddingVertical: 15,
    fontFamily: 'OpenSans-Semibold',
  },
});

export default Input;
