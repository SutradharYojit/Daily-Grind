import React from "react";
import { SafeAreaView, TouchableOpacity, View } from "react-native";
import { appTheme } from "../../resources/style";
import AppText from "../../components/primary_text";
import AppBar from "../../components/app_bar";
import { StringManager } from "../../resources/string_manager";
import OptionsIcon from '../../../assets/icons/options.svg';


const TopUpScreen = (props: any) => {
    return (
        <SafeAreaView style={appTheme.whiteBackground}>
            <AppBar title={StringManager.promoTxt} nav={() => {
                props.navigation.goBack();
            }}>
                <TouchableOpacity onPress={() => { }}>
                    <OptionsIcon width={30} height={30} />
                </TouchableOpacity>
            </AppBar>
            <View style={appTheme.container}>
                <AppText>
                    TopUp Screen
                </AppText>
            </View>
        </SafeAreaView>
    );
}

export default TopUpScreen;