import React from 'react'
import { View, ScrollView } from 'react-native'
import { Dialog, Portal, Text, Button, Paragraph } from 'react-native-paper';

import BoxButton from "../../../../../shared/GeneralComponents/BoxButton"
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Font from '../additionalcomponents/Font';
export default function FontFormat() {
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <View>
      <BoxButton
        onPress={showDialog}
        ButtonContent={<MaterialIcons size={25} name="delete-outline" />}
        style={{backgroundColor: "#e6746c"}}
      />
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Content>
            <View>
              <Text>Delete</Text>
            </View>
          </Dialog.Content>
        </Dialog>
      </Portal>
    </View>
  )
}
