import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import AddText from "./AddText"
import FontFormat from "./FontFormat"

export default function index() {
  return (
    <View style={styles.actionsContainer} >
      <View>
        <FontFormat />
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
  }
})
