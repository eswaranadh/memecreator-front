import React from 'react'
import { StyleSheet, View, ScrollView, Image, FlatList, Dimensions, ImagePickerIOS, Text } from 'react-native'
import CategoryHandlerStyles from '../styles/CategoryHandlerStyles'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const ITEM_WIDTH = Dimensions.get('window').width
const COLUMNS = 2

export default function CategoryHandler(props) {
  const { category } = props

  return (
    <View style={CategoryHandlerStyles.container} >
      <View style={CategoryHandlerStyles.helperHeading} >
        <View>
          <Text>
            Movies
        </Text>
        </View>
        <View>
          <Text>
            View all
        </Text>
        </View>
      </View>
      <ScrollView
        horizontal={true}
      >
        <View>
          <FlatList
            numColumns={10}
            scrollEnabled={true}
            data={dummy}
            renderItem={({ item }) => (
              <Card style={CategoryHandlerStyles.cardStyles} >
                {/* <Card.Title title={item.title} /> */}
                <Card.Cover source={{ uri: item.publicURL }} />
              </Card>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>

    </View>
  )
}

const dummy = [
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
  {
    title: "Agent Sai Srinivasa Athreya",
    id: '2',
    color: "#be781b",
    navigator: "MoviesList",
    publicURL: "https://images-na.ssl-images-amazon.com/images/I/81WhC98yJaL._RI_.jpg"
  },
  {
    title: "Color Photo",
    id: '1',
    color: "#cc3828",
    navigator: "MoviesList",
    publicURL: "https://www.filmibeat.com/img/popcorn/movie_posters/colourphoto-20201023201407-19345.jpg"
  },
  {
    title: "E Nagaraniki Yemaindhi",
    id: '2',
    color: "#be781b",
    navigator: "MoviesList",
    publicURL: "https://jiocinemaweb.cdn.jio.com/jioimages.cdn.jio.com/content/entry/dynamiccontent/thumbs/512/512/0/98/35/d2dd37d02de311e9a4d71726210f0209_1549975515766_p_medium.jpg"
  },
  {
    title: "Husharu",
    id: '2',
    color: "#be781b",
    navigator: "MoviesList",
    publicURL: "https://images-na.ssl-images-amazon.com/images/I/81H11UDnF9L._RI_.jpg"
  },
]
