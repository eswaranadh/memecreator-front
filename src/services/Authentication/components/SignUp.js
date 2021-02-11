import React, { useState } from 'react';
import FormInput from '../../../shared/GeneralComponents/FormInput';
import FormButton from '../../../shared/GeneralComponents/FormButton';
import { StyleSheet, View } from 'react-native';

function SignUp() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <View style={styles.signupstyle}>
      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />
      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Confirm Password"
        iconType="lock"
        secureTextEntry={true}
      />
      <FormButton
        buttonTitle="Sign Up"
        onPress={() => { }}
      />
    </View>
  );
}

export default SignUp;

const styles = StyleSheet.create({
  signupstyle: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
  },
});
