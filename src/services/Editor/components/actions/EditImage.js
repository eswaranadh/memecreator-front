import React from 'react';
import {View, Text} from 'react-native';
import {IconButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

export default function DownloadImage() {
  const navigation = useNavigation();

  return (
    <View>
      <IconButton
        icon="image-edit-outline"
        color={'white'}
        size={30}
        onPress={() => navigation.navigate('EditImageScreen')}
      />
    </View>
  );
}
