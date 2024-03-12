import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { appStyles } from "../../../resources/style";
import { Image, View } from "react-native";
import PrimaryButton from "../../../components/buttons/primary_button";
import AppText from "../../../components/primary_text";
import { ColorManager } from "../../../resources/color_manager";
import { fontFamily } from "../../../resources/assets_manager";
import { StringManager } from "../../../resources/string_manager";
import PrimaryTextFilled from "../../../components/primary_text_filled";
import { Validations } from "../../../utils/validation_regex";
import IconButton from "../../../components/buttons/icon_button";
import { RoutesName } from "../../../routes/routes_name";

const NewPasswordScreen = (props: any) => {
    const validate = new Validations();
    const [password, setPassword] = useState<string>('');
    const [passWarn, setPassWarn] = useState<string>('');
    const [confirm, setConfirm] = useState<string>('');
    const [confirmWarn, setConfirmWarn] = useState<string>('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const hide = require("../../../../assets/icons/hide.png");
    const unhide = require("../../../../assets/icons/un_hide.png");

    const toggleShowPassword = () => setShowPassword(!showPassword);
    const toggleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

    return (
        <SafeAreaView style={appStyles.container}>
            <View style={{ flex: 1, paddingTop: 50 }}>
                <AppText style={appStyles.title}>{StringManager.createNewPassTxt}</AppText>
                <AppText style={appStyles.subtitle}>{StringManager.inputNewPassTxt}</AppText>

                <View style={{ paddingTop: 8 }}>
                    <AppText style={appStyles.label}>{StringManager.passTxt}</AppText>
                    <View style={appStyles.textFilledcontainer}>
                        <PrimaryTextFilled
                            secureTextEntry={!showPassword}
                            placeholder={StringManager.passExmTxt}
                            onChangeText={(text) => validate.passValidate(text, setPassword, setPassWarn)}
                            placeholderTextColor={ColorManager.greyColor}
                            style={appStyles.textfilled_1}
                        />
                        <IconButton onPress={toggleShowPassword}>
                            <Image style={appStyles.icon} source={showPassword ? unhide : hide} />
                        </IconButton>
                    </View>
                    {passWarn.length > 0 && <AppText style={appStyles.error}>{passWarn}</AppText>}
                </View>

                <View style={{ paddingTop: 8 }}>
                    <AppText style={appStyles.label}>{StringManager.confirmPassTxt}</AppText>
                    <View style={appStyles.textFilledcontainer}>
                        <PrimaryTextFilled
                            secureTextEntry={!showConfirmPassword}
                            placeholder={StringManager.passExmTxt}
                            onChangeText={(text) => validate.passValidate(text, setConfirm, setConfirmWarn)}
                            placeholderTextColor={ColorManager.greyColor}
                            style={appStyles.textfilled_1}
                        />
                        <IconButton onPress={toggleShowConfirmPassword}>
                            <Image style={appStyles.icon} source={showConfirmPassword ? unhide : hide} />
                        </IconButton>
                    </View>
                    {confirmWarn.length > 0 && <AppText style={appStyles.error}>{confirmWarn}</AppText>}
                </View>

                <AppText style={styles.passwordRequirements}>
                    {StringManager.requriedPassTxt}
                </AppText>
            </View>

            <View style={{}} >
                <PrimaryButton onPress={() => {
                    props.navigation.navigate(RoutesName.newPassScreen)
                }}
                    label={StringManager.submitBtnTxt}>
                </PrimaryButton>
            </View>
        </SafeAreaView>
    );
};

const styles = {
    passwordRequirements: {
        color: ColorManager.greyColor,
        fontSize: 15,
        fontFamily: fontFamily.PlusJakartaMedium,
    },

};

export default NewPasswordScreen;
