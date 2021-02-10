import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { Card } from 'react-native-paper';
import { windowWidth } from '../../../utils/Dimensions';
import { Context } from '../context/context';

import PreviewImageStyles from '../styles/PreviewImageStyles';

export default function EditImage(props) {
  const [state, dispatch] = useContext(Context);
  const { imageURL, base64Image } = state;
  // if (imageURL) {
  return (
    <View>
      <Image source={{ uri: base64Image }} style={PreviewImageStyles.imageStyles} />
    </View>
  );
  // }
  // return <Text>"Image ..."</Text>
}
