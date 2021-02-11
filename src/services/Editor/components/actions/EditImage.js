import React from 'react';
<<<<<<< HEAD
import {View, Text} from 'react-native';
import {IconButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
=======
import { View, Text } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
>>>>>>> 84892f5fa2870ba25ed0783fe67c967f24003df5

export default function DownloadImage() {
  const navigation = useNavigation();

  return (
    <View>
      <IconButton
        icon="image-edit-outline"
        color={'white'}
        size={30}
<<<<<<< HEAD
        onPress={() => navigation.navigate('EditImageScreen')}
=======
        onPress={() => navigation.navigate("EditImageScreen")}
>>>>>>> 84892f5fa2870ba25ed0783fe67c967f24003df5
      />
    </View>
  );
}
