import React from 'react'
import {StyleSheet,View, ScrollView, Image,FlatList, Dimensions, ImagePickerIOS} from 'react-native'
import { Card, Button, Icon} from "react-native-elements"
import { TouchableOpacity } from 'react-native-gesture-handler'
import MoviesImage from '../../assets/sat.jpg'
import CartoonImage from '../../assets/sam.jpg'
import * as ImagePicker from 'expo-image-picker'
import AddImage from '../shared/AddImage'
// import ImageEditor from '../Editor/ImageEditor'
// import Local from '../shared/LocalImage'

function Presentation(props) {
  const { navigation } = props
  
  console.log(props)
  
  let [selectedImage, setSelectedImage] = React.useState('');

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  //  console.log(selectedImage)
  };

 
    
  return (
    <View >
      
      <ScrollView style={{position:"relative"}}>
        <FlatList 
        numColumns={2}
        keyExtractor={(item) => item.id} 
        data={categories} 
        renderItem={({ item }) => (
          
            <TouchableOpacity onPress={() => navigation.navigate("MoviesList")} >
             <View style={styles.Row}>
                 <Card
                 image={item.images}
                  title={item.title}
                  raise 
                 />
                 </View>
          </TouchableOpacity>
        )}
      />
       
      </ScrollView>
      <View style={{position:"absolute",marginTop:660,marginLeft:340}}>
      {/* <Image source={{ uri: selectedImage.localUri }}  /> */}
                <Icon
                    reverse
                    name='plus'
                    type='font-awesome'
                    color='#696969'
                    size={20}
                    onPress={()=>{
                      openImagePickerAsync() 
                      navigation.navigate("ImageEditor",{itemdata:selectedImage.localUri}
                      )} 
                       }/>
                    </View> 
    </View>
  )
}

export default Presentation;
const ITEM_WIDTH = Dimensions.get('window').width
const categories = [{title:"Movies", images:MoviesImage, id:'1' },{title:"Cartoons",images:CartoonImage, id:'2' }, ]

const styles = StyleSheet.create({
   
    Row:{
      width:ITEM_WIDTH/2,
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
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
   
});