import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { appStyles } from "../../../resources/style";
import AppText from "../../../components/primary_text";
 // import OTPTextView from "react-native-otp-textinput";
import PrimaryButton from "../../../components/buttons/primary_button";
import { StringManager } from "../../../resources/string_manager";
import { RoutesName } from "../../../routes/routes_name";

const OTPScreen = (props: any) => {

    return (
        <SafeAreaView style={appStyles.container}>
            <View style={{ justifyContent: 'space-between', flex: 1, }}>
                <View style={{ paddingTop: 50 }}>
                    <AppText style={appStyles.title}>
                        {StringManager.createNewAccTxt}
                    </AppText>
                    <AppText style={appStyles.subtitle}>
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
                        props.navigation.replace(RoutesName.completeAuthScreen)
                    }}
                        label={StringManager.submitBtnTxt}>
                    </PrimaryButton>
                </View>
            </View>
        </SafeAreaView>
    );

};

export default OTPScreen;