import React, {useContext, useState} from 'react';
import {
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Logo from '../../assets/logo.png';
import {
  Context,
  ContextProvider,
} from '../services/Authentication/context/context';
import Wrapper from '../shared/GeneralComponents/Wrapper';
import Loginbg from '../../assets/loginbg.jpg';
import Login from '../services/Authentication/components/Login';
import SignUp from '../services//Authentication/components/SignUp';

const LoginScreen = () => {
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
            {veiwlogin ? (
              <Text style={styles.text}>Login</Text>
            ) : (
              <Text style={styles.fade}>Login</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setVeiwlogin(false);
            }}>
            {!veiwlogin ? (
              <Text style={styles.text}>SignUp</Text>
            ) : (
              <Text style={styles.fade}>SignUp</Text>
            )}
          </TouchableOpacity>
        </View>
        {veiwlogin ? <Login /> : <SignUp />}
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
  fade: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 22,
    marginBottom: 10,
    color: 'grey',
  },
});
