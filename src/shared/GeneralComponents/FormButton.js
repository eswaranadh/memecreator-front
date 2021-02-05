import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {windowHeight} from '../../utils/Dimensions';

const FormButton = ({buttonTitle, ...rest}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '50%',
    height: windowHeight / 19,
    backgroundColor: '#168a0b',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Lato-Regular',
  },
});
