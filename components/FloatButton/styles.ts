import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 60,
        right: 30,
        backgroundColor: '#809fff',
        width: 60,
        height: 60,
        borderRadius: 30,

        justifyContent: 'center',
        alignItems: 'center',

        //Android
        elevation: 8,

        shadowColor: '#000',
        shadowOffset: { 
            width: 0, 
            height: 4 
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    }
});