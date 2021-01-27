import React from 'react'
import { View, Text, StyleSheet } from "react-native"
import FontStyler from "../FontStyler"
function Presentation() {
    return (
        <View style={styles.editorLayout} >
            <FontStyler />
        </View>
    )
}

export default Presentation

const styles = StyleSheet.create({
    editorLayout: {
        borderRadius: 4,
        padding: 10,
        margin: 6,
        height: 100,
        elevation: 4,
        backgroundColor: "#4d4d4d"
    }
})
