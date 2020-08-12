import React from 'react'
import {StyleSheet,Text,View,Dimensions, ScrollView, FlatList,TouchableOpacity, ActivityIndicator} from 'react-native'
import { Card, Button, Icon, Image } from "react-native-elements"
import { openStyles } from "../../shared/styles/openStyles"

const ITEM_WIDTH = Dimensions.get('window').width
const COLUMNS = 2

function Presentation(props) {
  const { movies, navigation, isLoading } = props
  console.log(props)
  if(isLoading) return <ActivityIndicator />
  return (
    <View >
      <FlatList 
        numColumns={COLUMNS}
        data={movies}
        renderItem={({item}) => (
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("MovieTemplates", { movieID: item.id })} >
              <View style={openStyles.cardStyles(ITEM_WIDTH, COLUMNS)} >
                <Text style={openStyles.textFormat} >{item.title}</Text>

                {/* <Image 
                  source={{uri: item.coverImage.publicURL}}
                  styles={{width: (ITEM_WIDTH - 10*COLUMNS)/COLUMNS, height: ITEM_WIDTH/COLUMNS, margin: 5}}
                  resizeMode="cover"
                /> */}
              </View>
            </TouchableOpacity>
          </View>
          
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default Presentation;
const styles = StyleSheet.create({
  imageStyles : {
    width: 80,
    height: 50
  },
  
 
});
