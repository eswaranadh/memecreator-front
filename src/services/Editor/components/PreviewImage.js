import React, {useContext} from 'react';
import {View, Text, Image} from 'react-native';
import {Card} from 'react-native-paper';
import {windowWidth} from '../../../utils/Dimensions';
import {Context} from '../context/context';

import PreviewImageStyles from '../styles/PreviewImageStyles';

export default function PreviewImage(props) {
  const [state, dispatch] = useContext(Context);
  const {imageURL} = state;
  return (
    <View>
      <Image source={{uri: imageURL}} style={PreviewImageStyles.imageStyles} />
    </View>
  );
}
