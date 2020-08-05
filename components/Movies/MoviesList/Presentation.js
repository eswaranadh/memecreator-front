import React from 'react'
import {StyleSheet,Text,View, ScrollView, Image} from 'react-native'
import { Card, Button, Icon } from "react-native-elements"

function Presentation(props) {
  const { movies, navigation, isLoading } = props
  console.log(props)
  if(isLoading) return <Text>Loading</Text>
  return (
    <View>
      <ScrollView>
      {
        movies.map((movie, i) => {
          return (
            <Card
              key={movie.id}
              image={movie.coverImage.publicURL}
              title={movie.title}
            > 
              <Button
                onPress={() => navigation.navigate("MovieTemplates", { movieID: movie.id })}
                icon={<Icon name='visibility' style={{marginRight: 5}} color='#ffffff' />}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='VIEW' />
            </Card>
          );
        })
      }
      </ScrollView>
    </View>
  )
}

export default Presentation;
