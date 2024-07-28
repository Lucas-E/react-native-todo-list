import { StyleSheet } from "react-native";

export const ListItemDefaultStyle = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    button: {
        backgroundColor: 'red',
        padding: 5,
        borderRadius: 5,
        marginLeft: 5,
        width: 'auto'
    },
    text: {
        color: 'white'
    }
})