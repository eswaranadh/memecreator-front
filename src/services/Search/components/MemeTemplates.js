import React from 'react'
import { View, Text, ScrollView, FlatList } from 'react-native'
import { Card } from 'react-native-paper'
import MemeTemplatesStyles from "../styles/MemeTemplatesStyles";
export default function MemeTemplates(props) {
  let data = []
  if (props.type === "Trending")
    data = Trending;
  else if (props.type === "Cartoon")
    data = Cartoon
  else if (props.type === "Ali")
    data = Ali
  return (
    <View style={MemeTemplatesStyles.container}>
      <View style={MemeTemplatesStyles.headBar}>
        <View><Text style={MemeTemplatesStyles.headContentOne}>{props.type}</Text></View>
        <View><Text style={MemeTemplatesStyles.headContentTwo}> More </Text></View>
      </View>
      <ScrollView horizontal={true}>
        <View>
          <FlatList
            numColumns={10}
            scrollEnabled={true}
            data={data}
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

const Trending = [
  {
    title: "MovieName",
    id: '1',
    color: "#be781b",
    navigator: "MoviesList",
    templateURL: "https://chaibisket.com/wp-content/uploads/2020/01/39266647_221229465236808_8515914382591393792_o.jpg",
  },
  {
    title: "MovieName",
    id: '2',
    color: "#be781b",
    navigator: "MoviesList",
    templateURL: "https://chaibisket.com/wp-content/uploads/2020/01/70251113_378685306157889_894879341182189568_o.jpg",
  },
  {
    title: "MovieName",
    id: '3',
    color: "#cc3828",
    navigator: "MoviesList",
    templateURL: "https://chaibisket.com/wp-content/uploads/2020/01/sontham-11-e811c33bcd31a235f8f7dada197dde9d.jpg",
  },
  {
    title: "MovieName",
    id: '4',
    color: "#be781b",
    navigator: "MoviesList",
    templateURL: "https://chaibisket.com/wp-content/uploads/2020/01/sontham-4-a12b2619b33fc956a6078f32f9d63573.jpg",
  },
  {
    title: "MovieName",
    id: '5',
    color: "#be781b",
    navigator: "MoviesList",
    templateURL: "https://chaibisket.com/wp-content/uploads/2020/01/venky-11-e8b0218c3b9b0d6c017479248c955126.jpg",
  },
  {
    title: "MovieName",
    id: '6',
    color: "#cc3828",
    navigator: "MoviesList",
    templateURL: "https://chaibisket.com/wp-content/uploads/2020/01/athadu-2-2487e88a1cc696ce7bf9826196d5afad.jpg",
  },
  {
    title: "MovieName",
    id: '7',
    color: "#cc3828",
    navigator: "MoviesList",
    templateURL: "https://chaibisket.com/wp-content/uploads/2020/01/full.jpeg",
  },
  {
    title: "MovieName",
    id: '8',
    color: "#cc3828",
    navigator: "MoviesList",
    templateURL: "https://chaibisket.com/wp-content/uploads/2020/01/julayi-1-3453687ae9bb47f5d3682ceb41f007b7-1.jpg",
  },
  {
    title: "MovieName",
    id: '9',
    color: "#cc3828",
    navigator: "MoviesList",
    templateURL: "https://chaibisket.com/wp-content/uploads/2020/01/full-4.jpeg",
  },
  {
    title: "MovieName",
    id: '10',
    color: "#cc3828",
    navigator: "MoviesList",
    templateURL: "https://chaibisket.com/wp-content/uploads/2020/06/Ready-4.jpg",
  },
  // {
  //   title: "MovieName",
  //   id: '11',
  //   color: "#cc3828",
  //   navigator: "MoviesList",
  //   templateURL:"https://chaibisket.com/wp-content/uploads/2020/06/Ready-7.jpg",
  // },
  // {
  //   title: "MovieName",
  //   id: '12',
  //   color: "#cc3828",
  //   navigator: "MoviesList",
  //   templateURL:"https://chaibisket.com/wp-content/uploads/2020/06/Ready-10.jpg",
  // },
  // {
  //   title: "MovieName",
  //   id: '13',
  //   color: "#cc3828",
  //   navigator: "MoviesList",
  //   templateURL:"https://chaibisket.com/wp-content/uploads/2020/06/Ready-14.jpg",
  // },
  // {
  //   title: "MovieName",
  //   id: '14',
  //   color: "#cc3828",
  //   navigator: "MoviesList",
  //   templateURL:"https://chaibisket.com/wp-content/uploads/2020/06/Ready-15.jpg",
  // },
  // {
  //   title: "MovieName",
  //   id: '15',
  //   color: "#cc3828",
  //   navigator: "MoviesList",
  //   templateURL:"https://chaibisket.com/wp-content/uploads/2020/06/Ready-17.jpg",
  // },

];

const Cartoon = [
  {
    title: "Dhruva",
    id: '1',
    color: "#cc3828",
    navigator: "MoviesList",
    templateURL: "https://indianmemetemplates.com/wp-content/uploads/3rd-place-victory-meme-template.jpg"
  },
  {
    title: "Dhruva",
    id: '1',
    color: "#cc3828",
    navigator: "MoviesList",
    templateURL: "https://indianmemetemplates.com/wp-content/uploads/Quiz-Kid.jpg"
  },
  {
    title: "Dhruva",
    id: '1',
    color: "#cc3828",
    navigator: "MoviesList",
    templateURL: "https://cdn.kapwing.com/video_image-7PxmyJIHJ.jpg"
  },
  {
    title: "Dhruva",
    id: '1',
    color: "#cc3828",
    navigator: "MoviesList",
    templateURL: "https://i.imgflip.com/2t5msj.png"
  },
  {
    title: "Dhruva",
    id: '1',
    color: "#cc3828",
    navigator: "MoviesList",
    templateURL: "https://storage.googleapis.com/kapwing/Hiding_From_a_Serial_Killer_24082018175738--MhikqYqP.jpg"
  },
  {
    title: "Dhruva",
    id: '1',
    color: "#cc3828",
    navigator: "MoviesList",
    templateURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh5A2oI6_E0NuCin9L0XDp3ulGZQam8lBurA&usqp=CAU"
  },
  {
    title: "Dhruva",
    id: '1',
    color: "#cc3828",
    navigator: "MoviesList",
    templateURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8JW5SWsSSO60AmdWEn6Spv7RBy_phDOGr8A&usqp=CAU"
  },
  {
    title: "Dhruva",
    id: '1',
    color: "#cc3828",
    navigator: "MoviesList",
    templateURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2p8QYP7uJYcuXG9l7EP-ef7PvtNLmafb2yQ&usqp=CAU"
  },
  {
    title: "Dhruva",
    id: '1',
    color: "#cc3828",
    navigator: "MoviesList",
    templateURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2SoSQ1UM4Ce3obnSXZ562NtEWKEap3-aVhA&usqp=CAU"
  },
  {
    title: "Dhruva",
    id: '10',
    color: "#cc3828",
    navigator: "MoviesList",
    templateURL: "https://indianmemetemplates.com/wp-content/uploads/sad-pepe-the-frog.jpg"
  },
];
const Ali = [
  {
    title: "MovieName",
    id: '6',
    color: "#cc3828",
    navigator: "MoviesList",
    templateURL: "https://chaibisket.com/wp-content/uploads/2020/01/athadu-2-2487e88a1cc696ce7bf9826196d5afad.jpg",
  },
  {
    title: "MovieName",
    id: '7',
    color: "#cc3828",
    navigator: "MoviesList",
    templateURL: "https://chaibisket.com/wp-content/uploads/2020/01/full.jpeg",
  },
  {
    title: "MovieName",
    id: '8',
    color: "#cc3828",
    navigator: "MoviesList",
    templateURL: "https://chaibisket.com/wp-content/uploads/2020/01/julayi-1-3453687ae9bb47f5d3682ceb41f007b7-1.jpg",
  },
  {
    title: "MovieName",
    id: '9',
    color: "#cc3828",
    navigator: "MoviesList",
    templateURL: "https://chaibisket.com/wp-content/uploads/2020/01/full-4.jpeg",
  },
  {
    title: "MovieName",
    id: '10',
    color: "#cc3828",
    navigator: "MoviesList",
    templateURL: "https://chaibisket.com/wp-content/uploads/2020/06/Ready-4.jpg",
  },
  {
    title: "MovieName",
    id: '1',
    color: "#be781b",
    navigator: "MoviesList",
    templateURL: "https://chaibisket.com/wp-content/uploads/2020/01/39266647_221229465236808_8515914382591393792_o.jpg",
  },
  {
    title: "MovieName",
    id: '2',
    color: "#be781b",
    navigator: "MoviesList",
    templateURL: "https://chaibisket.com/wp-content/uploads/2020/01/70251113_378685306157889_894879341182189568_o.jpg",
  },
  {
    title: "MovieName",
    id: '3',
    color: "#cc3828",
    navigator: "MoviesList",
    templateURL: "https://chaibisket.com/wp-content/uploads/2020/01/sontham-11-e811c33bcd31a235f8f7dada197dde9d.jpg",
  },
  {
    title: "MovieName",
    id: '4',
    color: "#be781b",
    navigator: "MoviesList",
    templateURL: "https://chaibisket.com/wp-content/uploads/2020/01/sontham-4-a12b2619b33fc956a6078f32f9d63573.jpg",
  },
  {
    title: "MovieName",
    id: '5',
    color: "#be781b",
    navigator: "MoviesList",
    templateURL: "https://chaibisket.com/wp-content/uploads/2020/01/venky-11-e8b0218c3b9b0d6c017479248c955126.jpg",
  },
]

