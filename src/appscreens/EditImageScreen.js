import React from 'react'
import { View, Text } from 'react-native'
import EditImage from "../services/Editor/components/EditImage"
import Wrapper from '../shared/GeneralComponents/Wrapper';
import { Context, ContextProvider } from '../services/Editor/context/context';

function EditImageScreen() {
  return (
    <View>
      <Text>
        <EditImage />
      </Text>
    </View>
  )
}

export default Wrapper(ContextProvider, EditImageScreen);
