import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const Button = ({onPress, title, style}) => {
  return (
    <Pressable
      style={[styles.button, {...style}]}
      onPress={onPress}
      title={title}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 130,
    height: 44,
    borderRadius: 4,
    paddingHorizontal: 28,
    paddingVertical: 11,
    backgroundColor: '#FFFFFF',
  },
  buttonText: {
    fontSize: 18,
    color: '#0E85FF',
  },
});

export default Button;
