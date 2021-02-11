import React from 'react';
import { View, Text } from 'react-native';
import EditImage from '../services/Editor/components/EditImage';

function EditImageScreen() {
  return (
    <View>
      <Text>
        <EditImage />
      </Text>
    </View>
  );
}

export default EditImageScreen;
