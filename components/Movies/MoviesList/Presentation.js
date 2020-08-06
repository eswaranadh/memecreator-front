import React from 'react'
import {StyleSheet,Text,View,Dimensions, ScrollView, FlatList,Image,TouchableOpacity} from 'react-native'
import { Card, Button, Icon } from "react-native-elements"

function Presentation(props) {
  const { movies, navigation, isLoading } = props
  console.log(props)
  if(isLoading) return <Text>Loading</Text>
  return (
    <View >
      <ScrollView >
      {
        movies.map((movie, i) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("MovieTemplates", { movieID: movie.id })} >
           <View style={styles.Row} >
            <Card
              key={movie.id}
              image={movie.coverImage.publicURL}
              title={movie.title}
              
            /> 
             </View>
            
            </TouchableOpacity>
          );
        })
      }
     
      </ScrollView>
    </View>
  )
}

export default Presentation;
const ITEM_WIDTH = Dimensions.get('window').width
const styles = StyleSheet.create({
   
  Row:{
    width:ITEM_WIDTH/2,
    flex:1,
     }
 
});
