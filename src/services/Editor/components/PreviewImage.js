import React, {useContext, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {Context} from '../../../appcontext/context';
import PreviewImageStyles from '../styles/PreviewImageStyles';

export default function PreviewImage(props) {
  const [state, dispatch] = useContext(Context);
  const {imageURL, base64Image} = state.editor;
  useEffect(() => {}, []);
  console.log(imageURL);
  return (
    <View>
      <Image source={{uri: imageURL}} style={PreviewImageStyles.imageStyles} />
    </View>
  );
}
