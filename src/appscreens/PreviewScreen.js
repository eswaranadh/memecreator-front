import React, { useContext, useEffect } from 'react'
import { View, Text } from 'react-native'
import PreviewImage from "../services/Editor/components/PreviewImage"
import { Context, ContextProvider } from "../services/Editor/context/context"
import Wrapper from '../shared/GeneralComponents/Wrapper';
import DownloadImage from "../services/Editor/components/actions/DownloadImage"
import ShareImage from "../services/Editor/components/actions/ShareImage"
import EditImage from "../services/Editor/components/actions/EditImage"


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
    setState({
      imageURL: imageURL
    })
  }, [imageURL])
  return (
    <View>
      <Text>
        <PreviewImage />
      </Text>
      <View>
        <DownloadImage />
        <ShareImage />
        <EditImage />
      </View>
    </View>
  )
}

export default Wrapper(ContextProvider, PreviewScreen)
