import React, { useState } from 'react';
import { Button, Overlay, Image, Icon } from 'react-native-elements';
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
function Presentation(props) {
    const { imageURL, imageStyles, ITEM_WIDTH, navigation } = props
    const [visible, setVisible] = useState(false);
 console.log(imageURL)
    const toggleOverlay = () => {
        setVisible(!visible);
    };
    return (
        <View>
            <TouchableOpacity onPress={toggleOverlay}>
                <Image
                    style={imageStyles}
                    source={{uri:imageURL}}
                    onPress={toggleOverlay}
                />
            </TouchableOpacity>
            
            <Overlay animationType="fade" isVisible={visible} onBackdropPress={toggleOverlay}>
                <>
                    <Image
                        style={{width: ITEM_WIDTH/1.1, height: ITEM_WIDTH/1.1}}
                        source={{uri:imageURL}}
                    />
                    <View
                        style={{margin: 5}}
                    >
                        <View style={styles.buttonsContainer} >
                            <View style={styles.buttonContainer} >
                                <Button 
                                    raised
                                    buttonStyle={{
                                        backgroundColor: 'orange'
                                    }}
                                    onPress={toggleOverlay}
                                    title="Cancel"
                                />
                            </View>
                            
                            <View style={styles.buttonContainer} >
                                <Button 
                                    raised
                                    buttonStyle={{
                                        backgroundColor: 'green'
                                    }}
                                    onPress={() => {
                                        toggleOverlay()
                                        navigation.navigate("ImageEditor",{imageURL})
                                    } }
                                    title="Edit this image"
                                />
                            </View>
                        </View>
                        
                    </View>
                </>
            </Overlay>
        </View>
    )
}

export default Presentation

const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    buttonContainer: {
        flex: 1,
        margin: 3
    }
})
