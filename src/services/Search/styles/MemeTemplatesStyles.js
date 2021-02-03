import { StyleSheet } from 'react-native'
import { windowWidth } from '../../../utils/Dimensions';

export default StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: "space-between",
        alignItems: "flex-start",
        margin: 5
      },
      cardStyles: {
        width:190,
        marginRight:10,
        marginTop:10,
      },
      headBar:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent:"stretch"
      },
      headContentOne:{
          color:"#ffffff",
          fontWeight:"bold",
          fontSize: 19,
      },
      headContentTwo:{
        color:"#ffffff",
        fontWeight:"bold",
        fontSize: 15,
        marginTop:4,
    },
});