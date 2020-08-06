import React from 'react'
import {StyleSheet,View, ScrollView, Image,FlatList, Dimensions} from 'react-native'
import { Card, Button, Icon} from "react-native-elements"
import { TouchableOpacity } from 'react-native-gesture-handler'
import MoviesImage from '../../assets/sat.jpg'
import CartoonImage from '../../assets/sam.jpg'

function Presentation(props) {
  const { navigation } = props
  console.log(props)
  
  const COLUMNS = 2
  return (
    <View>
      <ScrollView>
        
        <FlatList 
        // WIDTH={Dimensions}
        numColumns={COLUMNS}
        keyExtractor={(item) => item.id} 
        data={categories} 
        renderItem={({ item }) => (
          
            <TouchableOpacity onPress={() => navigation.navigate("MoviesList")} >
             <View style={styles.Row}>
                 <Card
                 image={item.images}
                  title={item.title}
                  raise
                 />
                 </View>
          </TouchableOpacity>
        )}
      />

      </ScrollView>
    </View>
  )
}

export default Presentation;
const ITEM_WIDTH = Dimensions.get('window').width
const categories = [{title:"Moviesl", images:MoviesImage, id:'1' },{title:"Cartoons",images:CartoonImage, id:'2' } ]

const styles = StyleSheet.create({
   
    Row:{
      width:ITEM_WIDTH/2,
          }
   
});