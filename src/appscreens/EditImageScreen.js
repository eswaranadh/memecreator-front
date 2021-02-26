import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EditImage from '../services/Editor/components/Edit/EditImage';
import EditActions from "../services/Editor/components/Edit/actions/index"
import InputTextPosition  from "../services/Editor/components/Edit/actions/InputTextPosition";
function EditImageScreen() {
  return (
    <View style={styles.container} >
      <View>
        <InputTextPosition/>
      </View>
     
      <View>
        <EditImage />
      </View>
      <View>
        <EditActions />
      </View>
    </View>
  );
}

export default EditImageScreen;


const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
  }
})

