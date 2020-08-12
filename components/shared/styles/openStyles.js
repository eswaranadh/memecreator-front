import { StyleSheet } from "react-native"

export const openStyles = StyleSheet.create({
    cardStyles(ITEM_WIDTH, COLUMNS){
        return{
            width: (ITEM_WIDTH - 10*COLUMNS)/COLUMNS,
            height: ITEM_WIDTH/COLUMNS,
            margin: 5,
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            borderWidth: 2,
            borderColor: "#20232a",
            borderRadius: 6,
        }
    },
    textFormat: {
        textAlign: 'center',
        fontSize: 19,
    }
})