import React from "react";
import AppBar from "../../components/app_bar";
import { TouchableOpacity, View } from "react-native";
import { StringManager } from "../../resources/string_manager";
import OptionsIcon from "../../../assets/icons/options.svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { appStyles } from "../../resources/style";
import AppText from "../../components/primary_text";
import { ColorManager } from "../../resources/color_manager";

const PayScreen = (props: any) => {
    return (
        <SafeAreaView style={appStyles.whiteBackground}>
            <AppBar title={StringManager.payTxt} nav={() => { props.navigation.goBack(); }}>
                <TouchableOpacity onPress={() => { }}>
                    <OptionsIcon width={30} height={30} />
                </TouchableOpacity>
            </AppBar>
            <View style={{ padding: 15 }}>
                <AppText style={{
                    fontSize: 17,
                    color: ColorManager.blackColor
                }}>
                    Send Payment to:
                </AppText>
            </View>
        </SafeAreaView>
    );
}

export default PayScreen;