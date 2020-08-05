import React from 'react'
import {StyleSheet,Text,View, ScrollView, FlatList, Dimensions } from 'react-native'
import { Card, Button, Icon, Image } from "react-native-elements"
import PreviewTemplate from "../PreviewTemplate"

function Presentation(props) {
  const { movieTemplates, navigation, isLoading } = props
  const ITEM_WIDTH = Dimensions.get('window').width
  const COLUMNS = 2
  if(isLoading) return <Text>Loading</Text>
  return (
    <View>
      <FlatList 
        numColumns={COLUMNS}
        data={movieTemplates}
        renderItem={({item}) => (
            <View key={item.id} >
              <PreviewTemplate 
                navigation={navigation}
                ITEM_WIDTH={ITEM_WIDTH}
                imageStyles = {{width: (ITEM_WIDTH - 10*COLUMNS)/COLUMNS, height: ITEM_WIDTH/COLUMNS, margin: 5}}
                imageURL = {item.imageInfo.publicURL}
              />
            </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default Presentation;


const styles = StyleSheet.create({
  tinyLogo: {
    flex:1,
    height: 600,
    margin:4
  },
});
