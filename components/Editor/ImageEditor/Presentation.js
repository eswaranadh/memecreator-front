import React from 'react'
import { Text, View ,StyleSheet,Image,ScrollView, Dimensions} from "react-native"
import {Button} from "react-native-elements"
import EditorControllers from "../EditorControllers"
const windowWidth = Dimensions.get("window").width
function Presentation(props) {
  const { navigation,route } = props;
  const { imageURL } = route.params;
  // console.log(localimage)
  navigation.setOptions({
    headerRight: () => (
      <View>
        <Button
          title="Done"
          type="clear"
          onPress={() => navigation.navigate("AfterEdit",{LocalImage:''})}
        />
      </View>
    )
  })
    return (
      <ScrollView >
        <View>
          <Image style={{height:windowWidth,width:windowWidth}} source={{uri:imageURL}}/>
          <View>
            <EditorControllers />
          </View>
        </View>
      </ScrollView>
    )
}

export default Presentation;
