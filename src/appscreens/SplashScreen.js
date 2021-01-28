import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../../assets/logo.png';
import Login from '../services/Authentication/Login';

function SplashScreen() {
  const [animating, setAnimating] = useState(true);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
    }, 2000);
  }, []);

  if (animating)
    return (
      <LinearGradient
        useAngle={true}
        angle={80}
        angleCenter={{ x: 0.9, y: 1.0 }}
        colors={['#1D4350', '#A43931']}
        style={styles.container}>
        <View>
          <Image
            source={Logo}
            style={{
              width: windowWidth - 220,
              height: windowHeight - 220,
              resizeMode: 'contain',
            }}
          />
          <ActivityIndicator
            animating={animating}
            color="#FFFFFF"
            size="large"
            style={styles.activityIndicator}
          />
        </View>
      </LinearGradient>
    );
  return <Login />;
}

const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityIndicator: {
    alignItems: 'center',
    height: windowHeight / 10,
  },
});

export default SplashScreen;
