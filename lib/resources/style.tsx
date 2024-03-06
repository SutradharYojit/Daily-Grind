import { StyleSheet } from "react-native";
import { ColorManager } from "./color_manager";

export const appStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorManager.whiteColor,
        padding: 15
    },
    viewStyle: {
        flex: 1,
        justifyContent: 'center'
    },

    appTitle: {
        textAlign: 'center',
        fontSize: 45,
        color: ColorManager.blackColor
    },
    text: {
        textAlign: 'center',
        color: ColorManager.blackColor
    },
    textfilled: {
        marginTop: 10,
        borderColor: 'teal',
        borderWidth: 2.5,
        borderRadius: 10,
        fontSize: 18,
        color: ColorManager.blackColor,
        paddingLeft: 10
    },
    buttonStyle:
    {
        height: 65,
        marginTop: 15,
        backgroundColor: ColorManager.greenColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    }
});