import { StyleSheet } from 'react-native'
import { windowWidth } from '../../../utils/Dimensions';

export default StyleSheet.create({
  Row: {
    width: windowWidth / 2,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  buttonContainer: {
    flex: 1,
    margin: 3
  },
  container: {
    flexDirection: 'column',
    justifyContent: "space-between",
    alignItems: "flex-start",
    margin: 5
  },
  cardStyles: {
    width: 100,
    // height: 190,
    marginRight: 10
  },
  imageStyles: {
    width: 80,
    height: 50
  },
});