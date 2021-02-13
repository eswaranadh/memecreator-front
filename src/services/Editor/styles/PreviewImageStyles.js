import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../../../utils/Dimensions';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: 5,
  },
  imageStyles: {
    width: windowWidth,
    resizeMode: 'contain',
    height: windowWidth,
  },

  imageContainer: {},
});
