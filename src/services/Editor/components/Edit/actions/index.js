import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Context} from '../../../../../appcontext/context';
import AddText from './AddText';
import FontFormat from './FontFormat';

export default function index() {
  const [state, dispatch] = useContext(Context);
  const editorState = state.editor;
  return (
    <View style={styles.actionsContainer}>
      {editorState.editingDetails.selectedContentIndex == null ? null : (
        <View>
          <FontFormat />
        </View>
      )}
      <View>
        <AddText />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  actionsContainer: {
    margin: 10,
    borderRadius: 5,
  },
});
