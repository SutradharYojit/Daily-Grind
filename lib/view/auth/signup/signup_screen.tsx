import React, { useState } from "react";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppText from "../../../components/primary_text";
import { fontFamily } from "../../../resources/assets_manager";
import { ColorManager } from "../../../resources/color_manager";
import { appTheme } from "../../../resources/style";
import PrimaryTextFilled from "../../../components/primary_text_filled";
import { StringManager } from "../../../resources/string_manager";
import PrimaryButton from "../../../components/buttons/primary_button";
import { Validations } from "../../../utils/validation_regex";
import IconButton from "../../../components/buttons/icon_button";
import { RoutesName } from "../../../routes/routes_name";

const SingUpScreen = (props: any) => {
    const validate = new Validations();
    const [userName, setUserName] = useState<string>('');
    const [userEmail, setUserEmail] = useState<string>('');
    const [userWarn, setUserWarn] = useState<string>('');
    const [emailWarn, setEmailWarn] = useState<string>('');
    const [userPass, setUserPass] = useState<string>('');
    const [passWarn, setPassWarn] = useState<string>('');
    const [showPassword, setShowPassword] = useState(false);
    const hide = require("../../../../assets/icons/hide.png");
    const unhide = require("../../../../assets/icons/un_hide.png");
    const toggleShowPassword = () => setShowPassword(!showPassword);

    return (
        <SafeAreaView style={appTheme.container}>
            <View style={{ flex: 1, paddingTop: 50 }}>
                <AppText style={appTheme.title}> {StringManager.createNewAccTxt}</AppText>
                <AppText style={appTheme.subtitle}>{StringManager.inputAccDetailsTxt}</AppText>
                <AppText style={styles.label}>{StringManager.userNameLabelTxt}</AppText>
                <PrimaryTextFilled
                    placeholder={StringManager.userNameLabelTxt}
                    onChangeText={setUserName}
                    placeholderTextColor={ColorManager.greyColor}
                    style={appTheme.textfilled}
                />

                <AppText style={styles.label}>{StringManager.emailTxt}</AppText>
                <PrimaryTextFilled
                    placeholder={StringManager.emailExmTxt}
                    onChangeText={(text) => validate.emailValidate(text, setUserEmail, setEmailWarn)}
                    placeholderTextColor={ColorManager.greyColor}
                    style={appTheme.textfilled}
                />
                {emailWarn.length > 0 && <AppText style={appTheme.error}>{emailWarn}</AppText>}

                <AppText style={styles.label}>{StringManager.passTxt}</AppText>
                <View style={appTheme.textFilledcontainer}>
                    <PrimaryTextFilled
                        secureTextEntry={!showPassword}
                        placeholder={StringManager.passExmTxt}
                        onChangeText={(text) => validate.passValidate(text, setUserPass, setPassWarn)}
                        placeholderTextColor={ColorManager.greyColor}
                        style={appTheme.textfilled_1}
                    />
                    <IconButton onPress={toggleShowPassword}>
                        <Image style={appTheme.icon} source={showPassword ? unhide : hide} />
                    </IconButton>
                </View>
                {passWarn.length > 0 && <AppText style={appTheme.error}>{passWarn}</AppText>}
            </View>

            <View>
                <PrimaryButton onPress={() => props.navigation.navigate(RoutesName.otpScreen)} label={StringManager.createAccBtnTxt} />
            </View>
        </SafeAreaView>
    );
};

const styles = {
    label: {
        color: ColorManager.greyColor,
        fontSize: 15,
        paddingTop: 5,
        fontFamily: fontFamily.PlusJakartaMedium,
    },
};

export default SingUpScreen;
