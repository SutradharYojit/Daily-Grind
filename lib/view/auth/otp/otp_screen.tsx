import React, { useRef } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { appStyles } from "../../../resources/style";
import AppText from "../../../components/primary_text";
import { ColorManager } from "../../../resources/color_manager";
import { fontFamily } from "../../../resources/assets_manager";
import OTPTextView from "react-native-otp-textinput";
import PrimaryButton from "../../../components/buttons/primary_button";
import { StringManager } from "../../../resources/string_manager";
import { RoutesName } from "../../../routes/routes_name";
const OTPScreen = (props: any) => {


    return (
        <SafeAreaView style={appStyles.container}>
            <View style={{ justifyContent: 'space-between', flex: 1, }}>
                <View style={{ paddingTop: 50 }}>
                    <AppText style={{
                        fontSize: 25,
                        color: ColorManager.blackColor,
                        fontFamily: fontFamily.PlusJakartaBold,
                    }}>
                        Create New Account
                    </AppText>
                    <AppText style={{
                        fontSize: 15,
                        color: ColorManager.greyColor,
                        fontFamily: fontFamily.PlusJakartaMedium,
                    }}>
                        Input OTP verfication
                    </AppText>
                    <OTPTextView inputCount={4}
                        handleTextChange={(Text) => {
                            console.log(Text);
                        }}
                    ></OTPTextView>

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