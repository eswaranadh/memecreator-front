import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FormInput from '../../../GeneralComponents/FormInput';
import FormButton from '../../../GeneralComponents/FormButton';
import Logo from '../../../../assets/logo.png';

const LoginScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <LinearGradient
      useAngle={true}
      angle={80}
      angleCenter={{x: 0.9, y: 1.0}}
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

        <FormButton buttonTitle="Sign In" onPress={() => {}} />

        <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
          <Text style={styles.navButtonText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
          <Text style={styles.navButtonText}>
            Don't have an acount? Create here
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
  },
  linearcontainer: {
    flex: 1,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#fff',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'lightblue',
    fontFamily: 'Lato-Regular',
  },
});
