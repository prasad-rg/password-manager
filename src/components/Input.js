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
      />
      {isPasswordField && (
        <Icon
          name={isMpinVisible ? 'eye' : 'eye-with-line'}
          style={styles.icon}
          size={28}
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
  },
  icon: {
    position: 'absolute',
    right: 22,
  },
  inputContainer: {
    justifyContent: 'center',
  },
});

export default Input;
