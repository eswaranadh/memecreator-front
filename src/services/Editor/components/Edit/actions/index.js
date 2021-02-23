import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import AddText from "./AddText"
import FontFormat from "./FontFormat"
import ColorCode from "./ColorCode";
import FontStyle from "./FontStyle";
import Delete from "./Delete";
import AddImage from "./AddImage";
export default function index() {
  return (
    <View style={styles.actionsContainer} >
      <View style={styles.topButtons}>
        <FontFormat />
        <ColorCode/>
        <FontStyle/>
        <AddImage/>
        <Delete/>
      </View>
      <View>
        <AddText />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  actionsContainer: {
    margin: 10,
    borderRadius: 5
  },
  topButtons:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
})
