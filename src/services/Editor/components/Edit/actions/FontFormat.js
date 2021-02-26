import React, {useContext} from 'react';
import {View} from 'react-native';
import {Context} from '../../../../../appcontext/context';
import BoxButton from '../../../../../shared/GeneralComponents/BoxButton';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function FontFormat() {
  const [state, dispatch] = useContext(Context);
  const setState = (obj) => {
    dispatch({
      type: 'SET_EDITOR_STATE',
      payload: obj,
    });
  };

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
    </View>
  );
}
