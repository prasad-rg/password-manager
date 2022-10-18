import React from 'react';
import {StyleSheet, Pressable, Text} from 'react-native';

const FloatingActionButton = ({onPress}) => {
  return (
    <Pressable style={styles.fab} onPress={onPress}>
      <Text style={styles.icon}>+</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  fab: {
    borderWidth: 1,
    borderColor: '#0E85FF',
    alignItems: 'center',
    justifyContent: 'center',
    width: 65,
    position: 'absolute',
    bottom: 70,
    right: 20,
    height: 65,
    backgroundColor: '#0E85FF',
    borderRadius: 100,
    paddingBottom: 15,
  },
  icon: {
    fontSize: 50,
    color: '#FFFFFF',
  },
});

export default FloatingActionButton;
