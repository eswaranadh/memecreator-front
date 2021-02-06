import React, {useContext} from 'react';
import {View, Text, Image} from 'react-native';
import {Context} from '../context/context';
import EditImageStyles from '../styles/EditImageStyles';

export default function EditImage() {
  const [state, dispatch] = useContext(Context);

  const {imageURL} = state;
  console.log(imageURL);
  return (
    <View>
      <Image source={{uri: imageURL}} style={EditImageStyles.imageStyles} />
    </View>
  );
}
