import React, { useContext, useState } from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FormInput from '../../../shared/GeneralComponents/FormInput';
import FormButton from '../../../shared/GeneralComponents/FormButton';
import Logo from '../../../../assets/logo.png';
import { Context, ContextProvider } from '../context/context';
import Wrapper from '../../../shared/GeneralComponents/Wrapper';
import { windowWidth } from '../../../utils/Dimensions';

const LoginScreen = (props) => {
  const { navigation } = props;
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [state, dispatch] = useContext(Context);
  const setState = (obj) => {
    console.log(obj);
    dispatch({
      type: 'SET_STATE',
      payload: obj,
    });
  };

  return (
    <LinearGradient
      useAngle={true}
      angle={80}
      angleCenter={{ x: 0.9, y: 1.0 }}
      colors={['#1D4350', '#A43931']}
      style={styles.linearcontainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.text}>Meme Creator</Text>
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

        <FormButton
          buttonTitle="Sign In"
          onPress={() => {
            setState({ userLoggedIn: true });
          }}
        />

        <TouchableOpacity style={styles.forgotButton} onPress={() => { }}>
          <Text style={styles.navButtonText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.forgotButton}
          onPress={() => {
            setState({ userLoggedIn: true });
          }}>
          <Text style={styles.navButtonText}>Skip login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.forgotButton} onPress={() => { }}>
          <Text style={styles.navButtonText}>
            Don't have an acount? Create here
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

export default Wrapper(ContextProvider, LoginScreen);

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