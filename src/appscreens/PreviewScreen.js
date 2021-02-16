import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PreviewImage from '../services/Editor/components/Preview/PreviewImage';
import { Context } from "../appcontext/context";
import DownloadImage from '../services/Editor/components/Preview/actions/DownloadImage';
import ShareImage from '../services/Editor/components/Preview/actions/ShareImage';
import EditImage from '../services/Editor/components/Preview/actions/EditImage';
import ImgToBase64 from 'react-native-image-base64';

function PreviewScreen(props) {
  const [state, dispatch] = useContext(Context);
  const { route = {} } = props;
  const { params = {} } = route;
  const { selectedImage } = params;
  const setState = (obj) => {
    dispatch({
      type: 'SET_EDITOR_STATE',
      payload: obj,
    });
  };

  useEffect(() => {
    // ImgToBase64.getBase64String(imageURL)
    //   .then((base64String) => {
    //     setState({
    //       base64Image: `data:image/jpg;base64,${base64String}`,
    //     });
    //   })
    //   .catch((err) => console.log(err));
    setState({
      selectedImage: selectedImage,
    });
  }, [JSON.stringify(selectedImage)]);
  return (
    <View>
      <View>
        <PreviewImage />
      </View>
      <View style={styles.previewButtons}>
        <Text>
          <DownloadImage />
        </Text>
        <Text>
          <ShareImage />
        </Text>
        <Text>
          <EditImage />
        </Text>
      </View>
    </View>
  );
}

export default PreviewScreen;

const styles = StyleSheet.create({
  previewButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 70,
  },
});
