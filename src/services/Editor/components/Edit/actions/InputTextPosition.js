import React from 'react';
import {View,  StyleSheet} from 'react-native';
import AddText from './AddText';

export default function InputTextPosition() {
  
  return (
    <View style={styles.actionsContainer}>
      <View>
        <AddText />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  actionsContainer: {
    margin: 10,
    borderRadius: 5,
  },
  
});
