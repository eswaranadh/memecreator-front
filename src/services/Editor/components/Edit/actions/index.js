import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import AddText from "./AddText"

export default function index() {
  return (
    <View style={styles.actionsContainer} >
      <View>
        <AddText />
      </View>
      <View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  actionsContainer: {
    margin: 10
  }
})
