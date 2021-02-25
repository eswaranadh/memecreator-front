import React, {useContext} from 'react';
import {View, ScrollView} from 'react-native';
import {Dialog, Portal, Text, Button, Paragraph} from 'react-native-paper';
import {Context} from '../../../../../appcontext/context';
import BoxButton from '../../../../../shared/GeneralComponents/BoxButton';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Font from '../additionalcomponents/Font';
export default function FontFormat() {
  const [state, dispatch] = useContext(Context);
  const editorState = state.editor;
  const setState = (obj) => {
    dispatch({
      type: 'SET_EDITOR_STATE',
      payload: obj,
    });
  };

  const onDelete = () => {
    let SelectedIndex = editorState.editingDetails.selectedContentIndex;
    let presentContent = editorState.editingDetails.content;
    presentContent.splice(SelectedIndex, 1);
    setState({
      ...editorState,
      editingDetails: {
        ...editorState.editingDetails,
        content: presentContent,
      },
    });
  };

  return (
    <View>
      <BoxButton
        onPress={onDelete}
        ButtonContent={<MaterialIcons size={25} name="delete-outline" />}
        style={{backgroundColor: '#e6746c'}}
      />
    </View>
  );
}
