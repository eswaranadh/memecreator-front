import React from 'react';
import {View} from 'react-native';
import {Dialog, Portal, Text} from 'react-native-paper';
import BoxButton from '../../../../../shared/GeneralComponents/BoxButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function FontFormat() {
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <View>
      <BoxButton
        onPress={showDialog}
        ButtonContent={<Ionicons size={25} name="color-palette-outline" />}
        style={{backgroundColor: '#86d67e'}}
      />
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Content>
            <View>
              <Text>Hi</Text>
            </View>
          </Dialog.Content>
        </Dialog>
      </Portal>
    </View>
  );
}
