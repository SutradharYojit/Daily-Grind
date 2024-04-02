import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { appTheme } from "../../resources/style";
import AppBar from "../../components/app_bar";
import { StringManager } from "../../resources/string_manager";
import { TouchableOpacity, View } from "react-native";
import OptionsIcon from "../../../assets/icons/options.svg";
import AppText from "../../components/primary_text";
import { ColorManager } from "../../resources/color_manager";
import Timer from '../../../assets/icons/clock.svg';

const VoucherDetailsScreen = (props: any) => {
    return (
        <SafeAreaView style={appTheme.whiteBackground}>
            <AppBar title={StringManager.voucherTxt} nav={() => {
                props.navigation.goBack();
            }}>
                <TouchableOpacity onPress={() => { }}>
                    <OptionsIcon width={30} height={30} />
                </TouchableOpacity>
            </AppBar>
            <View style={appTheme.container}>
                <AppText style={{
                    fontSize: 28,
                    color: ColorManager.blackColor
                }}>
                    25% discount for all menus
                </AppText>
                <View style={{ flexDirection: 'row' }}>
                    <Timer width={22} height={22} color={ColorManager.greenColor}></Timer>
                    <AppText style={{
                        fontSize: 16,
                        color: ColorManager.greyColor
                    }}>
                        Voucher will end within 1 day
                    </AppText>
                </View>
            </View>
        </SafeAreaView >
    )
}

export default VoucherDetailsScreen;