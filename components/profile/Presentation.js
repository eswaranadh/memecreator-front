import React from 'react'
import {StyleSheet,Text,View} from 'react-native'

function Presentation() {
    return (
        <View style={styles.container}>
            <Text  >My Stuff</Text>
            </View>
    )
}

export default Presentation;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#ddd',
      alignItems: 'center',
      justifyContent: 'center',
        },
  });