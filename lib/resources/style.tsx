import { StyleSheet } from "react-native";
import { ColorManager } from "./color_manager";
import { fontFamily } from "./assets_manager";

export const appTheme = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorManager.whiteColor,
        padding: 15
    },
    whiteBackground: {
        flex: 1,
        backgroundColor: ColorManager.whiteColor,
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
    title: {
        fontSize: 25,
        color: ColorManager.blackColor,
        fontFamily: fontFamily.PlusJakartaBold,
    },
    subtitle: {
        fontSize: 15,
        color: ColorManager.greyColor,
        fontFamily: fontFamily.PlusJakartaMedium,
    },
    label: {
        color: ColorManager.greyColor,
        fontSize: 15,
        fontFamily: fontFamily.PlusJakartaMedium,
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
        height: 50,
        fontSize: 17,
        flex: 1,
        fontFamily: fontFamily.PlusJakartaRegular,
        color: ColorManager.blackColor,
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
    },
    icon: {
        width: 22,
        height: 22,
    },
    bottomIcon: {
        width: 28,
        height: 28,
    },
    error: {
        color: ColorManager.redColor,
        fontSize: 16,
        fontFamily: fontFamily.PlusJakartaMedium,
    },
});