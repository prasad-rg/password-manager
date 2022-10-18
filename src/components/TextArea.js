import React from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';

const TextArea = ({
  label = 'URL',
  onChangeText,
  value,
  editable = true,
}) => {
  return (
    <View style={styles.textAreaContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.textArea}
        placeholderTextColor="#3C4858"
        onChangeText={onChangeText}
        numberOfLines={10}
        multiline={true}
        value={value}
        editable={editable}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textArea: {
    backgroundColor: '#F5F7FB',
    width: '90%',
    borderWidth: 1,
    borderColor: '#D7D7D7',
    paddingLeft: 6,
    borderRadius: 4,
    marginTop: 10.5,
    color: '#3C4858',
    height: 61,
    justifyContent: 'flex-start',
  },
  textAreaContainer: {
    width: '95%',
    marginTop: 20,
  },
  label: {
    color: '#949CA5',
    fontSize: 18,
  },
});

export default TextArea;
