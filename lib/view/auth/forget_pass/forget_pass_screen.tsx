import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { appStyles } from "../../../resources/style";
import { View } from "react-native";
import AppText from "../../../components/primary_text";
import { ColorManager } from "../../../resources/color_manager";
import { fontFamily } from "../../../resources/assets_manager";
import { StringManager } from "../../../resources/string_manager";
import PrimaryTextFilled from "../../../components/primary_text_filled";
import { Validations } from "../../../utils/validation_regex";
import PrimaryButton from "../../../components/buttons/primary_button";
import { RoutesName } from "../../../routes/routes_name";

const ForgetPassScreen = (props: any) => {
    const validate = new Validations();
    let [userEmail, setMail] = useState<string>('');
    let [emailWarn, setEmailWarn] = useState<string>('');

    return (
        <SafeAreaView style={appStyles.container}>
            <View style={{ flex: 1, justifyContent: "space-between" }}>
                <View style={{ paddingTop: 50 }}>
                    <AppText style={{
                        fontSize: 25,
                        color: ColorManager.blackColor,
                        fontFamily: fontFamily.PlusJakartaBold,
                    }}>
                        Forget Your Password?
                    </AppText>
                    <AppText style={{
                        fontSize: 15,
                        color: ColorManager.greyColor,
                        fontFamily: fontFamily.PlusJakartaMedium,
                    }}>
                        Input Your Email
                    </AppText>
                    <AppText style={{
                        color: ColorManager.greyColor,
                        fontSize: 15,
                        paddingTop: 15,
                        fontFamily: fontFamily.PlusJakartaMedium
                    }}>{StringManager.emailTxt}</AppText>

                    <PrimaryTextFilled
                        placeholder={StringManager.emailExmTxt}
                        onChangeText={(Text) => {
                            validate.emailValidate(Text, setMail, setEmailWarn);
                        }}
                        placeholderTextColor={ColorManager.greyColor}
                        style={appStyles.textfilled}
                    ></PrimaryTextFilled>
                </View>
                <View style={{}} >
                    <PrimaryButton onPress={() => {
                        props.navigation.navigate(RoutesName.otpScreen)

                    }}
                        label={StringManager.submitBtnTxt}>
                    </PrimaryButton>
                </View>
            </View>

        </SafeAreaView>
    );
};


export default ForgetPassScreen;