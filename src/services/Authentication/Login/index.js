import React, { Component, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import FormButton from '../../../shared/GeneralComponents/FormButton';
import FormInput from '../../../shared/GeneralComponents/FormInput';
import { windowWidth } from '../../../utils/Dimensions';

const LoginScreen = (props) => {
  const { navigation } = props;
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <View style={styles.LoginBody}>
      <Text style={styles.Lable}>Email or Username</Text>
      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Text style={styles.Lable}>Password</Text>
      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        secureTextEntry={true}
      />
      <FormButton buttonTitle="Log In" onPress={() => { navigation.navigate("SearchScreen") }} />
      <FormButton buttonTitle="Skip" onPress={() => { navigation.navigate("SearchScreen") }} />

    </View>
  )

}

export default LoginScreen;

const styles = StyleSheet.create({
  LoginBody: {
    backgroundColor: '#1f2021',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  Lable: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: windowWidth / 35,
  }
})