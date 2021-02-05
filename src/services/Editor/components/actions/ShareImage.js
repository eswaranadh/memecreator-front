import React from 'react'
import { View, Text } from 'react-native'
import { IconButton } from "react-native-paper"

export default function DownloadImage() {

  return (
    <View>
      <IconButton
        icon="share"
        color={"white"}
        size={30}
        onPress={() => console.log('Share')}
      />
    </View>
  )
}
