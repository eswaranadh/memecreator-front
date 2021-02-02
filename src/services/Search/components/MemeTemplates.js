import React from 'react'
import { View, Text,ScrollView,FlatList } from 'react-native'
import {Card} from 'react-native-paper'
import MemeTemplatesStyles from "../styles/MemeTemplatesStyles";
export default function MemeTemplates() {
    return (
    <View style={MemeTemplatesStyles.container}>
        <View style={MemeTemplatesStyles.headBar}>
           <View><Text style={MemeTemplatesStyles.headContentOne}>Trending</Text></View> 
           <View><Text style={MemeTemplatesStyles.headContentTwo}> More </Text></View> 
        </View>
     <ScrollView horizontal={true}>
        <View>
          <FlatList
            numColumns={10}
            scrollEnabled={true}
            data={dummy}
            renderItem={({ item }) => (
              <Card style={MemeTemplatesStyles.cardStyles} >
                <Card.Cover source={{ uri: item.templateURL }} />
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
      title: "MovieName",
      id: '1',
      color: "#be781b",
      navigator: "MoviesList",
      templateURL:"https://chaibisket.com/wp-content/uploads/2020/01/39266647_221229465236808_8515914382591393792_o.jpg",
    },
    {
      title: "MovieName",
      id: '2',
      color: "#be781b",
      navigator: "MoviesList",
      templateURL:"https://chaibisket.com/wp-content/uploads/2020/01/70251113_378685306157889_894879341182189568_o.jpg",
    },
    {
      title: "MovieName",
      id: '3',
      color: "#cc3828",
      navigator: "MoviesList",
      templateURL:"https://chaibisket.com/wp-content/uploads/2020/01/sontham-11-e811c33bcd31a235f8f7dada197dde9d.jpg",
    },
    {
      title: "MovieName",
      id: '4',
      color: "#be781b",
      navigator: "MoviesList",
      templateURL:"https://chaibisket.com/wp-content/uploads/2020/01/sontham-4-a12b2619b33fc956a6078f32f9d63573.jpg",
    },
    {
      title: "MovieName",
      id: '5',
      color: "#be781b",
      navigator: "MoviesList",
      templateURL:"https://chaibisket.com/wp-content/uploads/2020/01/venky-11-e8b0218c3b9b0d6c017479248c955126.jpg",
    },
    {
        title: "MovieName",
        id: '6',
        color: "#cc3828",
        navigator: "MoviesList",
        templateURL:"https://chaibisket.com/wp-content/uploads/2020/01/athadu-2-2487e88a1cc696ce7bf9826196d5afad.jpg",
      },
      {
        title: "MovieName",
        id: '7',
        color: "#cc3828",
        navigator: "MoviesList",
        templateURL:"https://chaibisket.com/wp-content/uploads/2020/01/full.jpeg",
      },
      {
        title: "MovieName",
        id: '8',
        color: "#cc3828",
        navigator: "MoviesList",
        templateURL:"https://chaibisket.com/wp-content/uploads/2020/01/julayi-1-3453687ae9bb47f5d3682ceb41f007b7-1.jpg",
      },
      {
        title: "MovieName",
        id: '9',
        color: "#cc3828",
        navigator: "MoviesList",
        templateURL:"https://chaibisket.com/wp-content/uploads/2020/01/full-4.jpeg",
      },
      {
        title: "MovieName",
        id: '10',
        color: "#cc3828",
        navigator: "MoviesList",
        templateURL:"https://chaibisket.com/wp-content/uploads/2020/06/Ready-4.jpg",
      },
      {
        title: "MovieName",
        id: '11',
        color: "#cc3828",
        navigator: "MoviesList",
        templateURL:"https://chaibisket.com/wp-content/uploads/2020/06/Ready-7.jpg",
      },
      {
        title: "MovieName",
        id: '12',
        color: "#cc3828",
        navigator: "MoviesList",
        templateURL:"https://chaibisket.com/wp-content/uploads/2020/06/Ready-10.jpg",
      },
      {
        title: "MovieName",
        id: '13',
        color: "#cc3828",
        navigator: "MoviesList",
        templateURL:"https://chaibisket.com/wp-content/uploads/2020/06/Ready-14.jpg",
      },
      {
        title: "MovieName",
        id: '14',
        color: "#cc3828",
        navigator: "MoviesList",
        templateURL:"https://chaibisket.com/wp-content/uploads/2020/06/Ready-15.jpg",
      },
      {
        title: "MovieName",
        id: '15',
        color: "#cc3828",
        navigator: "MoviesList",
        templateURL:"https://chaibisket.com/wp-content/uploads/2020/06/Ready-17.jpg",
      },
      
  ]
