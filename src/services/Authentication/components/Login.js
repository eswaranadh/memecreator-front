import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import FormInput from '../../../shared/GeneralComponents/FormInput';
import FormButton from '../../../shared/GeneralComponents/FormButton';
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <View style={styles.loginstyle}>
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
      <FormButton buttonTitle="Sign In" onPress={() => {}} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginstyle: {
    padding: 20,
    margin: 20,
    backgroundColor: '#ebedeb',
    borderRadius: 12,
    alignItems: 'center',
  },
});
