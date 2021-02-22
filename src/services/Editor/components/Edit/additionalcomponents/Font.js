import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Slider from '@react-native-community/slider';
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons"
import FoundationIcons from "react-native-vector-icons/Foundation"
import { Context } from '../../../../../appcontext/context';


export default function Font() {
  const [state] = useContext(Context)
  const editorState = state.editor
  const selectedItem = state.editor.editingDetails.content[editorState.editingDetails.selectedContentIndex]
  const [size, setSize] = useState(selectedItem.fontSize)
  console.log(size);
  return (
    <View>
      <View style={styles.textPreview} >
        <Text style={{ fontSize: size }} >
          {selectedItem.text}
        </Text>
      </View>
      <View style={styles.container} >
        <View style={styles.label}>
          <MaterialIcons size={25} name="format-font-size-increase" />
        </View>
        <View style={styles.slider} >
          <Slider
            style={{ height: 20 }}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="#6562c4"
            maximumTrackTintColor="#000000"
            thumbTintColor="#9896d4"
            onValueChange={(val) => setSize(val)}
            step={1}
          />
        </View>
      </View>
      <View style={styles.container} >
        <View style={styles.label}>
          <FoundationIcons size={25} name="bold" />
        </View>
        <View style={styles.slider} >
          <Slider
            style={{ height: 20 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#6562c4"
            maximumTrackTintColor="#000000"
            thumbTintColor="#9896d4"
          />
        </View>
      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  textPreview: {

  },
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  label: {
    flex: 1
  },
  slider: {
    flex: 7
  }
})