import React, {useContext} from 'react';
import {View} from 'react-native';
import {Context} from '../../../../../appcontext/context';
import BoxButton from '../../../../../shared/GeneralComponents/BoxButton';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Font from '../additionalcomponents/Font';

export default function FontFormat() {
  const [state, dispatch] = useContext(Context);
  const setState = (obj) => {
    dispatch({
      type: 'SET_EDITOR_STATE',
      payload: obj,
    });
  };
  // const [visible, setVisible] = React.useState(false);
  // const showDialog = () => setVisible(true);
  // const hideDialog = () => setVisible(false);
  // const isTransparent = state.editor.editingDetails.isTransparent;

  return (
    <View>
      <BoxButton
        onPress={() => {
          setState({
            editingDetails: {
              ...state.editor.editingDetails,
              isTextSize: !state.editor.editingDetails.isTextSize,
              isColorCOde: false,
              isAddIamge: false,
              isFontStyle: false,
            },
          });
        }}
        ButtonContent={<MaterialIcons size={25} name="format-text" />}
        style={{backgroundColor: '#7db7db'}}
      />
      {/* <Portal>
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
      </Portal> */}
    </View>
  );
}
