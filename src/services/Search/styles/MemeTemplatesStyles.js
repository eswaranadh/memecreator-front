import { StyleSheet } from 'react-native';
import { windowWidth } from '../../../utils/Dimensions';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: 5,
  },
  cardStyles: {
    width: windowWidth / 2.1,
    marginRight: 10,
    marginTop: 10,
  },
  headBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'stretch',
  },
  headContentOne: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 19,
  },
  headContentTwo: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  // loader: {
  //   marginTop: 10,
  //   alignItems: 'center',
  //   color: '#ffffff',
  // },
});
