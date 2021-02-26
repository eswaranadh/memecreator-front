import React, {useContext} from 'react';
import {View} from 'react-native';
import {Context} from '../../../../../appcontext/context';
import Font from '../additionalcomponents/Font';
import Color from '../additionalcomponents/Color';

export default function ActionsPreview() {
  const [state, dispatch] = useContext(Context);
  const editorState = state.editor;

  return (
    <View>
      {editorState.editingDetails.isTextSize ? <Font /> : null}
      {editorState.editingDetails.isColorCOde ? <Color /> : null}
    </View>
  );
}
