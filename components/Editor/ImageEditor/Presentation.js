import React from 'react'
import { Text, View ,StyleSheet,Image,ScrollView} from "react-native"
import {TouchableRipple} from "react-native-paper"
import {Button} from "react-native-elements"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


function Presentation(props) {
  const { navigation,route } = props;
  const { itemdata } = route.params;
  // console.log(localimage)
 
    return (
      <ScrollView >
      <View>
        <View style={{borderTopWidth:100,borderBottomWidth:100,margin:2}}>
        <Image style={{height:340,width:420,marginleft:2,borderRadius:1,}} source={{uri:itemdata}}/>
        </View> 
        <View>
          
          <Button        
           buttonStyle={{backgroundColor: 'green',margin:10 }}
           onPress={() => navigation.navigate("AfterEdit",{LocalImage:itemdata})}
           title="Done"
          />
        </View>
        <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="clock-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Add Text</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="image-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Add Image</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={()=>{}} >
          <View style={styles.menuItem}>
            <Icon name="share-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Tell Your Friends</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="pencil-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Border Text Color</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Add To Favorite</Text>
          </View>
        </TouchableRipple>
      </View>
      </View>
      </ScrollView>
    )
}

export default Presentation;

const styles = StyleSheet.create({
    
      menuWrapper: {
        marginTop: 10,
      },
      menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderColor:"#777777"
      },
      menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
      },
});

 // console.log(imageURL)
  // const myCustomShare = async() => {
  //   const shareOptions = {
  //     message: 'Order your next meal from FoodFinder App. I\'ve already ordered more than 10 meals on it.',
  //     // url: files.appLogo,
  //     // urls: [files.image1, files.image2]
  //   }

  //   try {
  //     const ShareResponse = await Share.open(shareOptions);
  //     console.log(JSON.stringify(ShareResponse));
  //   } catch(error) {
  //     console.log('Error => ', error);
  //   }
  // };
