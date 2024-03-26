import React from "react";
import {
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import OptionsIcon from '../../../assets/icons/options.svg';
import { appTheme } from "../../resources/style";
import { StringManager } from "../../resources/string_manager";
import PrimaryButton from "../../components/buttons/primary_button";
import AppBar from "../../components/app_bar";
import SendPayment from "./components/send_payment";
import ChooseNominal from "./components/choose_nominal";
import PaymentMethod from "./components/payment_method";

const PayScreen = (props: any) => {
    return (
        <SafeAreaView style={appTheme.whiteBackground}>
            <AppBar title={StringManager.payTxt} nav={() => {
                props.navigation.goBack();
            }}>
                <TouchableOpacity onPress={() => { }}>
                    <OptionsIcon width={30} height={30} />
                </TouchableOpacity>
            </AppBar>
            <ScrollView>
                <View style={appStyles.container}>
                    {/* Send payment Component */}
                    <SendPayment></SendPayment>

                    {/* Nominal Components */}
                    <ChooseNominal></ChooseNominal>

                    {/* Choose Payment Component */}
                    <PaymentMethod></PaymentMethod>
                </View>
            </ScrollView>
            <View style={appTheme.bottomButtonContainer}>
                <PrimaryButton
                    onPress={() => { }}
                    label={StringManager.payNowBtnTxt}
                />
            </View>
        </SafeAreaView>
    );
}

export default PayScreen;

const appStyles = StyleSheet.create({
    container: {
        padding: 15,
        flex: 1
    },

});