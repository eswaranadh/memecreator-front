import React from 'react'
import { StyleSheet, Text, View, Dimensions, ScrollView, FlatList, TouchableOpacity, ActivityIndicator, Image } from 'react-native'
import { openStyles, cardStyles } from "../../../../shared/styles/openStyles"
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const ITEM_WIDTH = Dimensions.get('window').width
const COLUMNS = 2
export default function CategoryDetails(props) {
  return (
    <View style={styles.container} >
      <FlatList
        numColumns={COLUMNS}
        data={movies}
        renderItem={({ item }) => (
          <Card style={styles.cardStyles} >
            {/* <Card.Title title={item.title} /> */}
            <Card.Cover source={{ uri: item.publicURL }} />
          </Card>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const movies = [
  {
    title: "Dhruva",
    id: '1',
    color: "#cc3828",
    navigator: "MoviesList",
    publicURL: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS_Ps_et-E9YyG5nUgAOnVhl88STY2D32L3e7IIMZ-U2IPZPogs"
  },
  {
    title: "Temper",
    id: '2',
    color: "#be781b",
    navigator: "MoviesList",
    publicURL: "https://www.filmibeat.com/ph-big/2015/02/jr-ntr-s-temper-movie-poster_142373116110.jpg"
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
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardStyles: {

  },
  imageStyles: {
    width: 80,
    height: 50
  },
});