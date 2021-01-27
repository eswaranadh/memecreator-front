import React from 'react'
import { View } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Button, Paragraph, Dialog, Portal } from "react-native-paper"

function Presentation() {
    const [visible, setVisible] = React.useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

    return (
        <View>
            <Button onPress={showDialog} mode="text" >
                <FontAwesome5 name="font" size={24} color="black" />
            </Button>
            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog}>
                <Dialog.Title>Alert</Dialog.Title>
                <Dialog.Content>
                    <Paragraph>This is simple dialog</Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={hideDialog}>Done</Button>
                </Dialog.Actions>
                </Dialog>
            </Portal>
        </View>
    )
}

export default Presentation
