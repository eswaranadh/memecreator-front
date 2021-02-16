import { Dimensions } from 'react-native';
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

export const GetValue = (x, type) => {
  return Dimensions.get('window')[type] * (x / 100)
}