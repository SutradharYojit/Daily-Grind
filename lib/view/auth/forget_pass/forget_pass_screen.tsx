import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { appTheme } from "../../../resources/style";
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
    const [userEmail, setUserEmail] = useState<string>('');
    const [emailWarn, setEmailWarn] = useState<string>('');

    const handleEmailChange = (text: string) => {
        validate.emailValidate(text, setUserEmail, setEmailWarn);
    };

    const navigateToNewPassScreen = () => {
        props.navigation.navigate(RoutesName.newPassScreen);
    };

    return (
        <SafeAreaView style={appTheme.container}>
            <View style={{ flex: 1, paddingTop: 50 }}>
                <AppText style={appTheme.title}>{StringManager.forgerUrPassTxt}</AppText>
                <AppText style={appTheme.subtitle}>{StringManager.inputEmailTxt}</AppText>
                <AppText style={styles.text}>{StringManager.emailTxt}</AppText>
                <PrimaryTextFilled
                    placeholder={StringManager.emailExmTxt}
                    onChangeText={handleEmailChange}
                    placeholderTextColor={ColorManager.greyColor}
                    style={appTheme.textfilled}
                />
                {emailWarn.length > 0 && <AppText style={appTheme.error}>{emailWarn}</AppText>}
            </View>
            <View>
                <PrimaryButton onPress={navigateToNewPassScreen} label={StringManager.submitBtnTxt} />
            </View>
        </SafeAreaView>
    );
};

const styles = {

    text: {
        color: ColorManager.greyColor,
        fontSize: 15,
        paddingTop: 15,
        fontFamily: fontFamily.PlusJakartaMedium,
    },

};

export default ForgetPassScreen;
