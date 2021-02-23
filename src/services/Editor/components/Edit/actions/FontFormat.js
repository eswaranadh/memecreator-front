import React, {useContext} from 'react';
import {View, ScrollView} from 'react-native';
import {Dialog, Portal, Text, Button, Paragraph} from 'react-native-paper';
import {Context} from '../../../../../appcontext/context';
import BoxButton from '../../../../../shared/GeneralComponents/BoxButton';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ColorCode from '../additionalcomponents/ColorCode';
import Font from '../additionalcomponents/Font';

export default function FontFormat() {
  const [state, dispatch] = useContext(Context);
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  return (
    <View>
      <BoxButton
        onPress={showDialog}
        ButtonContent={<MaterialIcons size={25} name="format-text" />}
      />
      <Portal>
        <Dialog
          visible={visible}
          onDismiss={hideDialog}
          style={{
            backgroundColor: state.editor.editingDetails.isTransparent
              ? 'transparent'
              : 'white',
          }}>
          <Dialog.Content>
            <View>
              <Font />
            </View>
          </Dialog.Content>
          {/* <Dialog.Actions>
            <Button onPress={hideDialog}>Done</Button>
          </Dialog.Actions> */}
        </Dialog>
      </Portal>
    </View>
  );
}
