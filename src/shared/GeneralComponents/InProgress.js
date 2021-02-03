import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import InprogressImage from '../../../assets/inprogress.png';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    height: '100%',
  },
  image: {
    resizeMode: 'center',
  },
});

export default function InProgress() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={InprogressImage} />
    </View>
  );
}
