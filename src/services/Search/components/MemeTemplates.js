import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import { Card } from 'react-native-paper';
import MemeTemplatesStyles from '../styles/MemeTemplatesStyles';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
export default function MemeTemplates(props) {
  const navigation = useNavigation();
  const { route = {} } = props;
  const { params = {} } = route;
  const { fullView = false } = params;
  const [memes, setMemes] = useState('');
  useEffect(() => {
    axios
      .get(
        `https://us-central1-meme-creator-760a5.cloudfunctions.net/api/memes/read`,
      )
      .then((res) => {
        const data = res.data;
        setMemes(data);
      });
  }, []);

  return (
    <View style={MemeTemplatesStyles.container}>
      {!fullView ? (
        <View style={MemeTemplatesStyles.headBar}>
          <Text style={MemeTemplatesStyles.headContentOne}>Templates</Text>
          <Text
            style={MemeTemplatesStyles.headContentTwo}
            onPress={() =>
              navigation.navigate('MemeTemplates', {
                fullView: true,
              })
            }>
            More
          </Text>
        </View>
      ) : null}

      <ScrollView horizontal={!fullView}>
        <SafeAreaView style={{ flex: 1 }}>
          <View>
            <FlatList
              numColumns={fullView ? 2 : 10}
              scrollEnabled={true}
              data={fullView ? dummy : dummy.slice(0, 10)}
              renderItem={({ item }) => (
                <Card
                  onPress={() =>
                    navigation.navigate('PreviewScreen', {
                      selectedImage: {
                        imageURL: item.imageURL,
                        title: item.title,
                        extension: item.extension
                      }
                    })
                  }
                  style={MemeTemplatesStyles.cardStyles}>
                  <Card.Cover source={{ uri: item.imageURL }} />
                </Card>
              )}
              keyExtractor={(item) => item.id}
            // ListFooterComponent={
            //   <View style={MemeTemplatesStyles.loader}>
            //     <Text style={MemeTemplatesStyles.headContentOne}>
            //       Loading...
            //     </Text>
            //   </View>
            // }
            />
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

const dummy = [
  {
    title: 'Dhruva',
    id: '1',
    color: '#cc3828',
    navigator: 'MoviesList',
    imageURL:
      'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS_Ps_et-E9YyG5nUgAOnVhl88STY2D32L3e7IIMZ-U2IPZPogs',
    extension: "jpg",
  },
  {
    title: 'Temper',
    id: '2',
    color: '#be781b',
    navigator: 'MoviesList',
    imageURL:
      'https://www.filmibeat.com/ph-big/2015/02/jr-ntr-s-temper-movie-poster_142373116110.jpg',
    extension: "jpg",
  },
  {
    title: 'Agent Sai Srinivasa Athreya',
    id: '2',
    color: '#be781b',
    navigator: 'MoviesList',
    imageURL:
      'https://images-na.ssl-images-amazon.com/images/I/81WhC98yJaL._RI_.jpg',
    extension: "jpg",
  },
  {
    title: 'Color Photo',
    id: '1',
    color: '#cc3828',
    navigator: 'MoviesList',
    imageURL:
      'https://www.filmibeat.com/img/popcorn/movie_posters/colourphoto-20201023201407-19345.jpg',
    extension: "jpg",
  },
  {
    title: 'E Nagaraniki Yemaindhi',
    id: '2',
    color: '#be781b',
    navigator: 'MoviesList',
    imageURL:
      'https://jiocinemaweb.cdn.jio.com/jioimages.cdn.jio.com/content/entry/dynamiccontent/thumbs/512/512/0/98/35/d2dd37d02de311e9a4d71726210f0209_1549975515766_p_medium.jpg',
    extension: "jpg",
  },
  {
    title: 'Husharu',
    id: '2',
    color: '#be781b',
    navigator: 'MoviesList',
    imageURL:
      'https://images-na.ssl-images-amazon.com/images/I/81H11UDnF9L._RI_.jpg',
    extension: "jpg",
  },
];
