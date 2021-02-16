import React, { useContext, Component } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { Card } from 'react-native-paper';
import { windowHeight, windowWidth } from '../../../../utils/Dimensions';
import { Context } from '../../../../appcontext/context';
import Draggable from 'react-native-draggable';
import ViewShot from "react-native-view-shot";
import RNFetchBlob from 'rn-fetch-blob';


import PreviewImageStyles from '../../styles/PreviewImageStyles';

export default class EditImage extends Component {
  static contextType = Context
  capturePic = () => {
    this.refs.viewShot.capture().then(uri => {
      console.log("Path to the image: ", uri);  // do what you want with the url
      this.downloadImage(uri)
    })
  };

  getExtention = filename => {
    // To get the file extension
    return /[.]/.exec(filename) ?
      /[^.]+$/.exec(filename) : undefined;
  };

  downloadImage = (uri) => {
    // To add the time suffix in filename
    let date = new Date();
    // Image URL which we want to download
    let image_URL = uri;
    // Getting the extention of the file
    let ext = this.getExtention(image_URL);
    ext = '.' + ext[0];
    // Get config and fs from RNFetchBlob
    // config: To pass the downloading related options
    // fs: Directory path where we want our image to download
    const { config, fs } = RNFetchBlob;
    let PictureDir = fs.dirs.PictureDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        // Related to the Android only
        useDownloadManager: true,
        notification: true,
        path:
          PictureDir +
          '/image_' +
          Math.floor(date.getTime() + date.getSeconds() / 2) +
          ext,
        description: 'Image',
      },
    };
    config(options)
      .fetch('GET', image_URL)
      .then(res => {
        // Showing alert after successful downloading
        console.log('res -> ', JSON.stringify(res));
        alert('Image Downloaded Successfully.');
        //<Snackbar>Image Downloaded Successfully.</Snackbar>
      });
  };

  render() {
    const [state, dispatch] = this.context
    const { editingDetails } = state.editor
    const { imageURL } = state.editor.selectedImage;
    const content = editingDetails.content
    const setState = (obj) => {
      dispatch({
        type: 'SET_EDITOR_STATE',
        payload: obj,
      });
    };

    return (
      <View>
        <ViewShot ref={"viewShot"} options={{ format: "jpg", quality: 0.9 }}>
          <Image source={{ uri: imageURL }} style={styles.image} />
          {
            content.map((item, index) => {
              return (
                <Draggable
                  key={index}
                  x={item.position.x}
                  y={item.position.y}
                  onShortPressRelease={() => {
                    setState({
                      editingDetails: {
                        ...state.editor.editingDetails,
                        editingText: item.text,
                        selectedContentIndex: index,
                        isEditing: true
                      }
                    })
                  }}
                >
                  <Text
                    style={{
                      color: item.fontColor,
                      backgroundColor: item.backgroundColor,
                      ...styles.labelStyles
                    }}
                  >
                    {item.text}
                  </Text>
                </Draggable>
              )
            })
          }
        </ViewShot>
        {/* <Button
          title="download"
          onPress={this.capturePic}
        /> */}
      </View >
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: windowWidth,
    resizeMode: 'contain',
    height: windowWidth,
  },
  labelStyles: {
    padding: 10,
    borderRadius: 5
  }
})
