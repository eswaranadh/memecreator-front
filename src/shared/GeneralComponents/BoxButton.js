import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';


const BoxButton = ({ ButtonContent, textColor = "#ffffff", style={}, ...details }) => {
  return (
    <TouchableOpacity {...details} style={{...styles.buttonContainer, ...style}} 
    disabled={true}
    >
      <Text style={{ ...styles.buttonText, color: textColor }} >
        {ButtonContent}
      </Text>
    </TouchableOpacity>
  );
};

export default BoxButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: 60,
    height: 60,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9,
    elevation:10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
