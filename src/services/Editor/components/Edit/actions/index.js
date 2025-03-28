import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Context} from '../../../../../appcontext/context';
import FontFormat from './FontFormat';
import ColorCode from './ColorCode';
import FontStyle from './FontStyle';
import Delete from './Delete';
import AddImage from './AddImage';
import ActionsPreview from './ActionsPreview';
export default function index() {
  const [state, dispatch] = useContext(Context);
  const editorState = state.editor;
  return (
    <View style={styles.actionsContainer}>
      {editorState.editingDetails.selectedContentIndex == null ? null : (
        <View style={styles.topButtons}>
          <FontFormat />
          <ColorCode />
          <FontStyle />
          <AddImage />
          <Delete />
        </View>
      )}
      <View>
        <ActionsPreview />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  actionsContainer: {
    margin: 10,
    borderRadius: 5,
  },
  topButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
