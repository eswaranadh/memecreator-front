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
              data={fullView ? memes : memes.slice(0, 10)}
              renderItem={({ item }) => (
                <Card
                  onPress={() =>
                    navigation.navigate('PreviewScreen', {
                      imageURL: item.imageURL,
                    })
                  }
                  style={MemeTemplatesStyles.cardStyles}>
                  <Card.Cover source={{ uri: item.imageURL }} />
                </Card>
              )}
              keyExtractor={(item) => item.memeId}
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
