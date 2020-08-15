import { StyleSheet } from "react-native"

export const openStyles = StyleSheet.create({
    textFormat: {
        margin: 10,
        fontSize: 19,
        fontWeight: "bold",
        color: "white"
    }
})

export function cardStyles(ITEM_WIDTH, COLUMNS){
    return{
        width: (ITEM_WIDTH - 10*COLUMNS)/COLUMNS,
        height: (ITEM_WIDTH/COLUMNS)/1.5,
        margin: 5,
        flex: 1,
        borderRadius: 6,
        elevation: 5,
    }
} 