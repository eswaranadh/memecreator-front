import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput, IconButton, Searchbar} from 'react-native-paper';
import {Context} from '../../../../../appcontext/context';
import BoxButton from '../../../../../shared/GeneralComponents/BoxButton';
import {GetValue, windowWidth} from '../../../../../utils/Dimensions';
import FeatherIcons from 'react-native-vector-icons/Feather';
import EntypoIcons from 'react-native-vector-icons/Entypo';

export default function AddText() {
  const [state, dispatch] = useContext(Context);
  const editorState = state.editor;
  const setState = (obj) => {
    dispatch({
      type: 'SET_EDITOR_STATE',
      payload: obj,
    });
  };

  const setText = (val) => {
    setState({
      editingDetails: {
        ...state.editor.editingDetails,
        editingText: val,
      },
    });
  };

  const addText = () => {
    if (state.editor.editingDetails.editingText.length > 0) {
      const existingFields = state.editor.editingDetails.content;
      const randomX = Math.floor(Math.random() * 100 + 1);
      const randomY = Math.floor(Math.random() * 100 + 1);
      const newLabel = {
        text: state.editor.editingDetails.editingText,
        fontSize: 10,
        fontColor: 'black',
        backgroundColor: 'white',
        position: {
          x: randomX,
          y: randomY,
        },
      };
      existingFields.push(newLabel);
      setState({
        editingDetails: {
          ...state.editor.editingDetails,
          content: existingFields,
        },
      });
      setText('');
    }
  };

  const modifyText = () => {
    const existingFields = state.editor.editingDetails.content;
    const selectedIndex = editorState.editingDetails.selectedContentIndex;
    const selectedLabel = {
      ...editorState.editingDetails.content[selectedIndex],
      text: state.editor.editingDetails.editingText,
    };
    existingFields[selectedIndex] = selectedLabel;
    setState({
      editingDetails: {
        ...state.editor.editingDetails,
        isEditing: false,
        content: existingFields,
        editingText: '',
      },
    });
  };
  const removeText = () => {
    setState({
      editingDetails: {
        ...state.editor.editingDetails,
        editingText: '',
        isEditing: false,
        selectedContentIndex: null,
      },
    });
  };
  return (
    <View style={styles.container}>
      <View>
        <BoxButton
          onPress={editorState.editingDetails.isEditing ? removeText : addText}
          ButtonContent={<FeatherIcons size={25} name="x" />}
          style={{backgroundColor: 'black'}}
          disabled={!editorState.editingDetails.isEditing}
        />
      </View>
      <View style={styles.input}>
        <TextInput
          label="Add Text"
          value={state.editor.editingDetails.editingText}
          mode="outlined"
          onChangeText={(value) => setText(value)}
        />
      </View>
      <View>
        <BoxButton
          onPress={editorState.editingDetails.isEditing ? modifyText : addText}
          ButtonContent={
            editorState.editingDetails.isEditing ? (
              <EntypoIcons size={25} color="black" name="check" />
            ) : (
              <EntypoIcons size={25} color="black" name="plus" />
            )
          }
          disabled={!state.editor.editingDetails.editingText.length}
          style={{backgroundColor: 'white'}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    width: GetValue(60, 'width'),
  },
});
