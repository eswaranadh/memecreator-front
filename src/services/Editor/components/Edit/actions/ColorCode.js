import React, {useContext} from 'react';
import {View} from 'react-native';
import {Context} from '../../../../../appcontext/context';
import BoxButton from '../../../../../shared/GeneralComponents/BoxButton';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
              isColorCOde: !state.editor.editingDetails.isColorCOde,
              isTextSize: false,
              isAddIamge: false,
              isFontStyle: false,
            },
          });
        }}
        ButtonContent={<Ionicons size={25} name="color-palette-outline" />}
        style={{backgroundColor: '#86d67e'}}
      />
    </View>
  );
}
