import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '../../utils/Dimensions';

const FormButton = ({ buttonTitle, ...rest }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop:20,
    width: windowHeight / 6,
    height: windowHeight / 20,
    backgroundColor: '#e1e3e6',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    marginLeft: windowWidth/3,
  
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3c3f45',
    fontFamily: 'Lato-Regular',
  },
  
});
