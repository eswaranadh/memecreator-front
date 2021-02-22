import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const BoxButton = ({ ButtonContent, textColor = "#ffffff", ...details }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...details}>
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
    backgroundColor: '#454746',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
