import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput, IconButton, Searchbar } from 'react-native-paper';
import { Context } from '../../../../../appcontext/context';
import { GetValue, windowWidth } from '../../../../../utils/Dimensions';

export default function AddText() {
  const [state, dispatch] = useContext(Context)
  const editorState = state.editor
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
        editingText: val
      }
    })
  }

  const addText = () => {
    const existingFields = state.editor.editingDetails.content
    const randomX = Math.floor((Math.random() * 100) + 1);
    const randomY = Math.floor((Math.random() * 100) + 1);
    const newLabel = {
      text: state.editor.editingDetails.editingText,
      fontSize: "",
      fontColor: "black",
      backgroundColor: "white",
      position: {
        x: randomX,
        y: randomY
      }
    }
    existingFields.push(newLabel)
    setState({
      editingDetails: {
        ...state.editor.editingDetails,
        content: existingFields
      }
    })
    setText("")
  }

  const modifyText = () => {
    const existingFields = state.editor.editingDetails.content
    const selectedIndex = editorState.editingDetails.selectedContentIndex
    const selectedLabel = {
      ...editorState.editingDetails.content[selectedIndex],
      text: state.editor.editingDetails.editingText,
    }
    existingFields[selectedIndex] = selectedLabel
    setState({
      editingDetails: {
        ...state.editor.editingDetails,
        isEditing: false,
        content: existingFields,
        editingText: ""
      }
    })
  }

  return (
    <View style={styles.container} >
      <View style={styles.input}>
        <TextInput
          label="Add Text"
          value={state.editor.editingDetails.editingText}
          mode="outlined"
          onChangeText={value => setText(value)}
        />
      </View>
      <View style={styles.iconbutton}>
        <IconButton
          disabled={!state.editor.editingDetails.editingText.length}
          icon={editorState.editingDetails.isEditing ? "check-circle-outline" : "plus-circle-outline"}
          color={'white'}
          size={30}
          onPress={editorState.editingDetails.isEditing ? modifyText : addText}
        />
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  input: {
    width: GetValue(80, "width")
  },
  iconbutton: {
    width: GetValue(20, "width")
  }
})

