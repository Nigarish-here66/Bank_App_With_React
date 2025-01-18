import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

// CustomTextInput Component
const CustomTextInput = ({ 
  icon, 
  onChangeText,
  placeholder, 
  value, 
  secureTextEntry, // Determines if the text input should be masked 
  keyboardType, // Keyboard type 
  rightText, 
  rightTextStyle, 
  onRightTextPress 
}) => {
  const [isSecure, setIsSecure] = useState(secureTextEntry); 

  return (
    <View style={styles.inputContainer}>
      {/* Left Icon */}
      <FontAwesome5 name={icon} size={18} color="#FFFFFF" style={styles.icon} />

      {/* Text Input */}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#A1A1A1" 
        secureTextEntry={secureTextEntry ? !isSecure : false} // Controls masking for password fields
        keyboardType={keyboardType} 
        value={value} 
        onChangeText={onChangeText} 
      />

      {/* Toggle for Secure Text (SHOW/HIDE for passwords) */}
      {secureTextEntry && (
        <TouchableOpacity onPress={() => setIsSecure(!isSecure)}>
          <Text style={styles.hideText}>{isSecure ? 'HIDE' : 'SHOW'}</Text>
        </TouchableOpacity>
      )}

      {/* Optional Right-Aligned Text */}
      {rightText && (
        <TouchableOpacity onPress={onRightTextPress}>
          <Text style={[styles.rightText, rightTextStyle]}>{rightText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

// Styles for the CustomTextInput component
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center', 
    backgroundColor: '#1C1B2A', 
    borderRadius: 10, 
    paddingHorizontal: 10, 
    paddingVertical: 15, 
    marginBottom: 15, 
  },
  icon: {
    marginRight: 10, 
  },
  input: {
    flex: 1, 
    color: '#FFFFFF', 
    fontSize: 14, 
    fontFamily: 'LilitaOne_400Regular', 
  },
  hideText: {
    color: '#A1A1A1', 
    fontSize: 14, 
    fontFamily: 'LilitaOne_400Regular',
  },
  rightText: {
    fontSize: 14, 
    color: '#6A6A6A', 
    textDecorationLine: 'underline', 
    fontFamily: 'LilitaOne_400Regular', 
  },
});

export default CustomTextInput;
