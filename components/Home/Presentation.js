import React from 'react'
import {StyleSheet,Text,View} from 'react-native'

function Presentation({props}) {
  console.log(props)
    return (
        <View style={styles.container}>
            <Text>hg</Text>
            </View>
    )
}

export default Presentation;

const styles = StyleSheet.create({
    container: {
   
      backgroundColor: '#ddd',
      alignItems: 'center',
      justifyContent: 'center',
    //   marginTop:50
    },
  });