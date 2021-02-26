import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FoundationIcons from 'react-native-vector-icons/Foundation';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import {Context} from '../../../../../appcontext/context';
import {windowHeight, windowWidth} from '../../../../../utils/Dimensions';

export default function Font() {
  const [state, dispatch] = useContext(Context);
  const editorState = state.editor;
  const setState = (obj) => {
    dispatch({
      type: 'SET_EDITOR_STATE',
      payload: obj,
    });
  };
  const selectedItem =
    state.editor.editingDetails.content[
      editorState.editingDetails.selectedContentIndex
    ];
  const [size, setSize] = useState(selectedItem.fontSize);
  const [stroke, setStroke] = useState(selectedItem.textShadowRadius);
  const [width, setWidth] = useState(selectedItem.width);
  console.log(size, stroke);

  useEffect(() => {
    const selectedContentIndex =
      editorState.editingDetails.selectedContentIndex;
    const existingLabel =
      editorState.editingDetails.content[selectedContentIndex];
    const modifiedLabel = {
      ...existingLabel,
      textShadowRadius: stroke,
      fontSize: size,
      width: width,
    };
    let existingContent = editorState.editingDetails.content;
    existingContent[selectedContentIndex] = modifiedLabel;
    setState({
      ...editorState,
      editingDetails: {
        ...editorState.editingDetails,
        content: existingContent,
      },
    });
  }, [size, stroke, width]);

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.label}>
          <MaterialIcons
            size={25}
            name="format-font-size-increase"
            color="#7db7db"
          />
        </View>
        <View style={styles.slider}>
          <Slider
            style={{height: 20}}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="#7db7db"
            maximumTrackTintColor="#7db7db"
            thumbTintColor="#7db7db"
            onValueChange={(val) => setSize(val)}
            step={1}
            value={size}
          />
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.label}>
          <FoundationIcons size={25} name="bold" color="#7db7db" />
        </View>
        <View style={styles.slider}>
          <Slider
            style={{height: 20}}
            minimumValue={0}
            maximumValue={13}
            minimumTrackTintColor="#7db7db"
            maximumTrackTintColor="#7db7db"
            thumbTintColor="#7db7db"
            onValueChange={(val) => setStroke(val)}
            step={0.5}
            value={stroke}
          />
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.label}>
          <FontAwesomeIcons size={18} name="text-width" color="#7db7db" />
        </View>
        <View style={styles.slider}>
          <Slider
            style={{height: 20}}
            minimumValue={0}
            maximumValue={windowWidth}
            minimumTrackTintColor="#7db7db"
            maximumTrackTintColor="#7db7db"
            thumbTintColor="#7db7db"
            onValueChange={(val) => setWidth(val)}
            step={1}
            value={width}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textPreview: {},
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  label: {
    flex: 1,
  },
  slider: {
    flex: 7,
  },
});
