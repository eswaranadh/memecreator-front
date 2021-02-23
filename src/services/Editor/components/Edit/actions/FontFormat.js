import React, {useContext} from 'react';
import {View, ScrollView} from 'react-native';
import {Dialog, Portal, Text, Button, Paragraph} from 'react-native-paper';
import {Context} from '../../../../../appcontext/context';
import BoxButton from '../../../../../shared/GeneralComponents/BoxButton';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Font from '../additionalcomponents/Font';
export default function FontFormat() {
  const [state, dispatch] = useContext(Context);
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  const isTransparent = state.editor.editingDetails.isTransparent;

  return (
    <View>
      <BoxButton
        onPress={showDialog}
        ButtonContent={<MaterialIcons size={25} name="format-text" />}
        style={{backgroundColor: '#7db7db'}}
      />
      <Portal>
        <Dialog
          visible={visible}
          onDismiss={hideDialog}
          style={{
            backgroundColor: isTransparent ? '#b8b8b850' : 'white',
          }}>
          <Dialog.Content>
            <View>
              <Font />
            </View>
          </Dialog.Content>
        </Dialog>
      </Portal>
    </View>
  );
}
