import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const Input = ({
  placeholder = 'Enter Here',
  style,
  value,
  onChangeText,
  secureTextEntry,
  onPress,
  isPasswordField,
  name,
  keyboardType,
}) => {
  const [isMpinVisible, setIsMpinVisible] = useState(false);
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#787E8C"
        style={[styles.textInput, {...style}]}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isMpinVisible}
        autoCapitalize="none"
        name={name}
        keyboardType={keyboardType}
      />
      {isPasswordField && (
        <Icon
          name={isMpinVisible ? 'eye' : 'eye-with-line'}
          style={styles.icon}
          size={28}
          color="#787E8C"
          onPress={() => {
            setIsMpinVisible(!isMpinVisible);
          }}
        />
      )}
    </View>
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
    color: '#787E8C',
  },
  icon: {
    position: 'absolute',
    right: 29,
    marginTop: 30,
  },
  inputContainer: {
    justifyContent: 'center',
  },
});

export default Input;
