import React from 'react'
import {StyleSheet,View,Image,Share} from 'react-native'
import { Icon } from 'react-native-elements'
import sam from '../../../assets/sam.jpg'


 

function Presentation(){
    
        const onShare = async () => {
          try {
            const result = await Share.share({
              message:
                'React Native | A framework for building native apps using React',
                Url:sam
            });
      
                     } catch (error) {
            alert(error.message);
          }
        };
    
    return(
        <View>
            <View>
             <Image style={{height:340,width:420,marginleft:2,borderRadius:1,}} source={require('../../../assets/sam.jpg')}/>
             </View>
             <View style={styles.buttonsContainer} >
                <View style={styles.buttonContainer} >
                <Icon
                    raised
                    name='save'
                    type='font-awesome'
                    color='#f50'
                    onPress={() => console.log('hello')} />

             </View>
             <View style={styles.buttonContainer}>
             <Icon
             raised
             name='heart'
             type='font-awesome'
             color='#f50'
             onPress={() => console.log('hello')} />

             </View>
             <View style={styles.buttonContainer}>
             <Icon
              raised
              name='share'
              type='font-awesome'
              color='#f50'
              onPress={onShare} />

             </View>
             </View>
            </View>
    )
};
export default Presentation;
const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: 'row',
        margin:70
        // justifyContent: 'center',
        // alignItems: 'stretch'
    },
    buttonContainer: {
        flex: 1,
        margin: 3
    }
})