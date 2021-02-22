import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { Context } from '../../../../../appcontext/context';
import Share from 'react-native-share';
import ImgToBase64 from 'react-native-image-base64';

export default function ShareImage(props) {
  const [state, dispatch] = useContext(Context);
  const { imageURL } = state;
  const [base64, setBase64] = useState('');

  const handleShare = async () => {
    // var ext = getExtention(imageURL);
    // ext = '.' + ext[0];

    ImgToBase64.getBase64String(imageURL)
      .then((base64String) => setBase64(base64String))
      .catch((err) => console.log(err));
    var base64Icon = 'data:image/jpeg;base64,' + base64;
    const details = {
      message: 'Download Meme Creator',
      url: base64Icon,
    };
    try {
      const shareResponse = await Share.open(details);
    } catch (error) {
      console.log('Error =>', error);
    }
  };

  // const getExtention = (filename) => {
  //   return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
  // };

  return (
    <View>
      <IconButton
        icon="share"
        size={30}
        onPress={handleShare}
      />
    </View>
  );
}
