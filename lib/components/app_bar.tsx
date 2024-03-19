import React, { PropsWithChildren } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ColorManager } from "../resources/color_manager";
import AppText from "./primary_text";
import BackButton from '../../assets/icons/left_arrow.svg';


type AppBarProps = PropsWithChildren<{
    title: string,
    nav: Function,
}>;

const AppBar = ({ children, title, nav }: AppBarProps) => {
    return (
        <View style={styles.appBar}>

            <TouchableOpacity onPress={() => nav()}>
                <BackButton width={30} height={30}></BackButton>
            </TouchableOpacity>
            <AppText
                style={styles.titleText}>
                {title}
            </AppText>
            {children}

        </View >
    );
}

const styles = StyleSheet.create({
    appBar: {
        paddingHorizontal: 15,
        height: 55,
        flexDirection: 'row',
        backgroundColor: ColorManager.whiteColor,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleText: {
        textAlignVertical: "center",
        color: ColorManager.blackColor,
        fontSize: 18,
        fontWeight: '500',
    },
})
export default AppBar;