import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import EditImage from '../services/Editor/components/Edit/EditImage';
import EditActions from '../services/Editor/components/Edit/actions/index';
import AddText from '../services/Editor/components/Edit/actions/AddText';

function EditImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.actionsContainer}>
        <AddText />
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
    flexDirection: 'column',
    flex: 1,
  },
  actionsContainer: {
    margin: 10,
    borderRadius: 5,
  },
});
