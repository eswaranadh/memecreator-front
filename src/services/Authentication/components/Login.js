import React, {useContext, useState} from 'react';
import {
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';
import FormInput from '../../../shared/GeneralComponents/FormInput';
import FormButton from '../../../shared/GeneralComponents/FormButton';
import Logo from '../../../../assets/logo.png';
import {Context, ContextProvider} from '../context/context';
import Wrapper from '../../../shared/GeneralComponents/Wrapper';
import {windowWidth} from '../../../utils/Dimensions';
import Loginbg from '../../../../assets/loginbg.jpg';

const LoginScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [veiwlogin, setVeiwlogin] = useState(true);
  const [state, dispatch] = useContext(Context);
  const setState = (obj) => {
    // console.log(obj);
    dispatch({
      type: 'SET_STATE',
      payload: obj,
    });
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={Loginbg} style={styles.image}>
        <Image source={Logo} style={styles.logo} />
        <View style={styles.veiwcontainer}>
          <TouchableOpacity
            onPress={() => {
              setVeiwlogin(true);
            }}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setVeiwlogin(false);
            }}>
            <Text style={styles.text}>SignUp</Text>
          </TouchableOpacity>
        </View>
        {veiwlogin ? (
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
            <FormButton
              buttonTitle="Sign In"
              onPress={() => {
                setState({userLoggedIn: true});
              }}
            />
          </View>
        ) : (
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
              onPress={() => {
                setState({userLoggedIn: true});
              }}
            />
          </View>
        )}
        <TouchableOpacity
          onPress={() => {
            setState({userLoggedIn: true});
          }}>
          <Text style={styles.skip}>Skip For Login?</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Wrapper(ContextProvider, LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  logo: {
    height: 200,
    width: 200,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 22,
    marginBottom: 10,
    color: '#fff',
  },
  veiwcontainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  skip: {
    marginTop: 50,
    color: '#fff',
    fontSize: 16,
    alignSelf: 'center',
  },
  loginstyle: {
    padding: 20,
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
  },
  signupstyle: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
  },
});
