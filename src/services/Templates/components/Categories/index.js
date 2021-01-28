import React from 'react'
import { StyleSheet, View, ScrollView, Image, FlatList, Dimensions, ImagePickerIOS, Text } from 'react-native'
import { Card, Button, Icon } from "react-native-elements"
import { TouchableOpacity } from 'react-native-gesture-handler'
import MoviesImage from '../../../../assets/movies.jpg'
import CartoonImage from '../../../assets/cartoons.jpg'
import { openStyles, cardStyles } from "../../../../shared/styles/openStyles"

const ITEM_WIDTH = Dimensions.get('window').width
const COLUMNS = 2

function Presentation(props) {
  const { navigation } = props

  return (
    <View >
      <ScrollView style={{ position: "relative" }}>
        <FlatList
          numColumns={COLUMNS}
          keyExtractor={(item) => item.id}
          data={categories}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate("MoviesList")} >
              <View style={[cardStyles(ITEM_WIDTH, COLUMNS), { backgroundColor: item.cardColor }]}>
                <Text style={openStyles.textFormat} >{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  )
}

export default Presentation;
const categories = [
  {
    title: "Movies",
    images: MoviesImage,
    id: '1',
    cardColor: "#cc3828"
  },
  {
    title: "Cartoons",
    images: CartoonImage,
    id: '2',
    cardColor: "#be781b"
  },
]

const styles = StyleSheet.create({

  Row: {
    width: ITEM_WIDTH / 2,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  buttonContainer: {
    flex: 1,
    margin: 3
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});