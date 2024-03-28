import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { appTheme } from "../../../resources/style";
import AppText from "../../../components/primary_text";
// import OTPTextView from "react-native-otp-textinput";
import PrimaryButton from "../../../components/buttons/primary_button";
import { StringManager } from "../../../resources/string_manager";
import { RoutesName } from "../../../routes/routes_name";
import completeProcess from "../../../model/complete_process";

const OTPScreen = (props: any) => {

    const data: completeProcess = {
        title: StringManager.successCreatedAccTxt,
        subtitle: StringManager.successTxt,
        btnTitle: StringManager.exploreBtnTxt,
        onPress: (() => {
            props.navigation.replace(RoutesName.dashboardScreen)
        })
    };
    
    return (
        <SafeAreaView style={appTheme.container}>
            <View style={{ justifyContent: 'space-between', flex: 1, }}>
                <View style={{ paddingTop: 50 }}>
                    <AppText style={appTheme.title}>
                        {StringManager.createNewAccTxt}
                    </AppText>
                    <AppText style={appTheme.subtitle}>
                        {StringManager.inputOTPTxt}
                    </AppText>
                    {/* <OTPTextView inputCount={4}
                        handleTextChange={(Text) => {
                            console.log(Text);
                        }}
                    ></OTPTextView> */}

                </View>
                <View style={{}} >
                    <PrimaryButton onPress={() => {
                        props.navigation.replace(RoutesName.completeAuthScreen, { "successData": data })
                    }}
                        label={StringManager.submitBtnTxt}>
                    </PrimaryButton>
                </View>
            </View>
        </SafeAreaView>
    );

};

export default OTPScreen;