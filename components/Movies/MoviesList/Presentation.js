import React from 'react'
import {StyleSheet,Text,View,Dimensions, ScrollView, FlatList,TouchableOpacity, ActivityIndicator} from 'react-native'
import { Card, Icon, Image } from "react-native-elements"
import { openStyles, cardStyles } from "../../shared/styles/openStyles"
import { Button, Menu, Divider, Provider } from 'react-native-paper';

const ITEM_WIDTH = Dimensions.get('window').width
const COLUMNS = 2

function Presentation(props) {
  const { movies, navigation, isLoading } = props
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  
  navigation.setOptions({
    headerRight: () => (
      <Provider>
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={<Button onPress={openMenu}>Show menu</Button>}>
                <Menu.Item onPress={() => {}} title="Item 1" />
                <Menu.Item onPress={() => {}} title="Item 2" />
                <Divider />
                <Menu.Item onPress={() => {}} title="Item 3" />
            </Menu>
        </View>
      </Provider>
    )
  })

  if(isLoading) return <ActivityIndicator />
  return (
    <View >
      <FlatList 
        numColumns={COLUMNS}
        data={movies}
        renderItem={({item}) => (
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("MovieTemplates", { movieID: item.id })} >
              <View style={[cardStyles(ITEM_WIDTH, COLUMNS), { backgroundColor :item.color }]} >
                <Text style={openStyles.textFormat} >{item.title}</Text>

                {/* <Image 
                  source={{uri: item.coverImage.publicURL}}
                  styles={{width: (ITEM_WIDTH - 10*COLUMNS)/COLUMNS, height: ITEM_WIDTH/COLUMNS, margin: 5}}
                  resizeMode="cover"
                /> */}
              </View>
            </TouchableOpacity>
          </View>
          
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default Presentation;
const styles = StyleSheet.create({
  imageStyles : {
    width: 80,
    height: 50
  },
  
 
});
