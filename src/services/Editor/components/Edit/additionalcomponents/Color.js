import React, {useContext, useState} from 'react';
import {Context} from '../../../../../appcontext/context';
import {
  SliderHuePicker,
  SliderSaturationPicker,
  SliderValuePicker,
} from 'react-native-slider-color-picker';
import {AppRegistry, Dimensions, StyleSheet, Text, View} from 'react-native';
import tinycolor from 'tinycolor2';

const {width} = Dimensions.get('window');

export default function SliderColorPicker() {
  const [oldColor, setOldColor] = useState('#FF7700');
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

  const changeColor = (colorHsvOrRgb, resType) => {
    if (resType === 'end') {
      setOldColor(tinycolor(colorHsvOrRgb).toHexString());
      const selectedContentIndex =
        editorState.editingDetails.selectedContentIndex;
      const existingLabel =
        editorState.editingDetails.content[selectedContentIndex];
      const modifiedLabel = {
        ...existingLabel,
        fontColor: oldColor,
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
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          marginHorizontal: 24,
          marginTop: 20,
          height: 12,
          width: width - 48,
        }}>
        <SliderHuePicker
          ref={(view) => {
            sliderHuePicker = view;
          }}
          oldColor={oldColor}
          trackStyle={[{height: 12, width: width - 48}]}
          thumbStyle={styles.thumb}
          useNativeDriver={true}
          onColorChange={changeColor}
        />
      </View>
      <View
        style={{
          marginHorizontal: 24,
          marginTop: 20,
          height: 12,
          width: width - 48,
        }}>
        <SliderSaturationPicker
          ref={(view) => {
            sliderSaturationPicker = view;
          }}
          oldColor={oldColor}
          trackStyle={[{height: 12, width: width - 48}]}
          thumbStyle={styles.thumb}
          useNativeDriver={true}
          onColorChange={changeColor}
          style={{
            height: 12,
            borderRadius: 6,
            backgroundColor: tinycolor({
              h: tinycolor(oldColor).toHsv().h,
              s: 1,
              v: 1,
            }).toHexString(),
          }}
        />
      </View>
      <View
        style={{
          marginHorizontal: 24,
          marginTop: 20,
          height: 12,
          width: width - 48,
        }}>
        <SliderValuePicker
          ref={(view) => {
            sliderValuePicker = view;
          }}
          oldColor={oldColor}
          minimumValue={0.02}
          step={0.05}
          trackStyle={[{height: 12, width: width - 48}]}
          trackImage={require('react-native-slider-color-picker/brightness_mask.png')}
          thumbStyle={styles.thumb}
          onColorChange={changeColor}
          style={{height: 12, borderRadius: 6, backgroundColor: 'black'}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  thumb: {
    width: 20,
    height: 20,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    shadowOpacity: 0.35,
  },
});
