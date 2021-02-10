import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PreviewImage from '../services/Editor/components/PreviewImage';
import { Context, ContextProvider } from '../services/Editor/context/context';
import Wrapper from '../shared/GeneralComponents/Wrapper';
import DownloadImage from '../services/Editor/components/actions/DownloadImage';
import ShareImage from '../services/Editor/components/actions/ShareImage';
import EditImage from '../services/Editor/components/actions/EditImage';
import ImgToBase64 from 'react-native-image-base64';

function PreviewScreen(props) {
  const [state, dispatch] = useContext(Context);
  const { route = {} } = props;
  const { params = {} } = route;
  const { imageURL } = params;
  const setState = (obj) => {
    dispatch({
      type: 'SET_STATE',
      payload: obj,
    });
  };

  useEffect(() => {
    if (imageURL) {
      // ImgToBase64.getBase64String(imageURL)
      //   .then((base64String) => {
      //     setState({
      //       base64Image: `data:image/jpg;base64,${base64String}`
      //     })
      //   })
      //   .catch((err) => console.log(err));
      setState({
        imageURL: imageURL,
      });
    }
  }, []);
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

export default Wrapper(ContextProvider, PreviewScreen);

const styles = StyleSheet.create({
  previewButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 70,
  },
});
