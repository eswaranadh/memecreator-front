import React from 'react'
import {StyleSheet,Text,View, ScrollView, Image} from 'react-native'
import { Card, Button, Icon } from "react-native-elements"

function Presentation(props) {
  const { navigation } = props
  console.log(props)
  return (
    <View>
      <ScrollView>
        {
          categories.map(item => {
            return (
              <View style={styles.buttonStyles} key={item} >
                <Button  
                  onPress={() => navigation.navigate("MoviesList")}
                  title={item}
                  raised
                />
              </View>
            )
          })
        }
      </ScrollView>
    </View>
  )
}

export default Presentation;

const categories = ['Movies', 'Cartoons']

const styles = StyleSheet.create({
    buttonStyles:{
      padding: 10
    }
});