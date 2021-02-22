import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../../../../utils/Dimensions';

export default function TextInputs() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        // numberOfLines={1}
        placeholder="Search"
        placeholderTextColor="#666"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    height: windowHeight / 16,
    borderColor: 'white',
    borderRadius: 50,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 2,
  },
  input: {
    padding: 15,
  },
});
