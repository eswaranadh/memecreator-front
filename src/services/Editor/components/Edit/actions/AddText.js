import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput, IconButton, Searchbar } from 'react-native-paper';
import { GetValue, windowWidth } from '../../../../../utils/Dimensions';

export default function AddText() {
  const [text, setText] = useState("")
  return (
    <View style={styles.container} >
      <View style={styles.input}>
        <TextInput
          label="Add Text"
          value={text}
          mode="outlined"

          onChangeText={text => setText(text)}
        />
      </View>
      <View style={styles.iconbutton}>
        <IconButton
          icon="plus-circle-outline"
          color={'white'}
          size={30}
          onPress={() => { }}
        />
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  input: {
    width: GetValue(80, "width")
  },
  iconbutton: {
    width: GetValue(20, "width")
  }
})

