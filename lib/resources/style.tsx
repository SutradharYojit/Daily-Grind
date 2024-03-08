import { StyleSheet } from "react-native";
import { ColorManager } from "./color_manager";
import { fontFamily } from "./assets_manager";

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
        height: 50,
        borderColor: ColorManager.greyColor,
        borderWidth: 1.0,
        borderRadius: 10,
        fontSize: 17,
        fontFamily: fontFamily.PlusJakartaRegular,
        color: ColorManager.blackColor,
        paddingLeft: 17
    },
    textfilled_1: {
        // marginTop: 10,
        height: 50,
        // borderColor: ColorManager.greyColor,
        // borderWidth: 1.0,
        // borderRadius: 10,
        fontSize: 17,
        flex: 1,

        fontFamily: fontFamily.PlusJakartaRegular,
        color: ColorManager.blackColor,
        // paddingLeft: 10
    },
    textFilledcontainer: {
        borderColor: ColorManager.greyColor,
        borderWidth: 1.0,
        borderRadius: 10,
        flexDirection: 'row',
        paddingHorizontal: 18,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buttonStyle:
    {
        height: 60,
        backgroundColor: ColorManager.greenColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    }
});