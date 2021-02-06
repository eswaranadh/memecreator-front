import React, {useContext} from 'react';
import {View} from 'react-native';
import {IconButton} from 'react-native-paper';
import {Context} from '../../context/context';
import Share from 'react-native-share';

export default function DownloadImage(props) {
  const [state, dispatch] = useContext(Context);
  const {imageURL} = state;

  const handleShare = async () => {
    const details = {
      message: 'Download Meme Creator',
      url: imageURL,
    };
    try {
      const shareResponse = await Share.open(details);
    } catch (error) {
      console.log('Error =>', error);
    }
  };

  return (
    <View>
      <IconButton
        icon="share"
        color={'white'}
        size={30}
        onPress={handleShare}
      />
    </View>
  );
}
