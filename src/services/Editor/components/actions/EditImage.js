import React from 'react';
import {View, Text} from 'react-native';
import {IconButton} from 'react-native-paper';

export default function DownloadImage() {
  return (
    <View>
      <IconButton
        icon="image-edit-outline"
        color={'white'}
        size={30}
        onPress={() => console.log('heu')}
      />
    </View>
  );
}
