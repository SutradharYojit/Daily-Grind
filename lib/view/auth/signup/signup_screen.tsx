import React, { useState } from "react";
import { Image, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppText from "../../../components/primary_text";
import { fontFamily } from "../../../resources/assets_manager";
import { ColorManager } from "../../../resources/color_manager";
import { appStyles } from "../../../resources/style";
import PrimaryTextFilled from "../../../components/primary_text_filled";
import { StringManager } from "../../../resources/string_manager";
import PrimaryButton from "../../../components/buttons/primary_button";
import { Validations } from "../../../utils/validation_regex";
import IconButton from "../../../components/buttons/icon_button";
import { RoutesName } from "../../../routes/routes_name";

const SingUpScreen = (props: any) => {
    const validate = new Validations();
    let [userName, setUserName] = useState<string>('');
    let [userWarn, setuserWarn] = useState<string>('');
    let [userEmail, setMail] = useState<string>('');
    let [emailWarn, setEmailWarn] = useState<string>('');
    let [userPass, setPass] = useState<string>('');
    let [passWarn, setPassWarn] = useState<string>('');
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const hide = require("../../../../assets/icons/hide.png");
    const unhide = require("../../../../assets/icons/un_hide.png");


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
                        Input Your Account Detais
                    </AppText>
                    <AppText style={{
                        color: ColorManager.greyColor,
                        fontSize: 15,
                        paddingTop: 50,
                        fontFamily: fontFamily.PlusJakartaMedium
                    }}>{StringManager.userNameLabelTxt}</AppText>
                    <PrimaryTextFilled
                        placeholder={StringManager.userNameLabelTxt}
                        onChangeText={(Text) => {

                        }}
                        placeholderTextColor={ColorManager.greyColor}
                        style={appStyles.textfilled}
                    ></PrimaryTextFilled>
                    <AppText style={{
                        color: ColorManager.greyColor,
                        fontSize: 15,
                        paddingTop: 7,
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

                    {
                        emailWarn.length > 0 &&
                        <AppText style={{
                            color: ColorManager.redColor,
                            fontSize: 16,
                            fontFamily: fontFamily.PlusJakartaMedium
                        }}>{emailWarn}</AppText>
                    }
                    <AppText style={{
                        color: ColorManager.greyColor,
                        fontSize: 15,
                        paddingTop: 7,
                        fontFamily: fontFamily.PlusJakartaMedium
                    }}>{StringManager.passTxt}</AppText>
                    <View style={appStyles.textFilledcontainer}>
                        <PrimaryTextFilled
                            secureTextEntry={!showPassword}
                            placeholder={StringManager.passExmTxt}
                            onChangeText={(Text) => {
                                validate.passValidate(Text, setPass, setPassWarn);
                            }}
                            placeholderTextColor={ColorManager.greyColor}
                            style={appStyles.textfilled_1}
                        ></PrimaryTextFilled>
                        <IconButton onPress={() => toggleShowPassword()}>
                            <Image style={{ width: 22, height: 22 }} source={showPassword ? unhide : hide}></Image>
                        </IconButton>
                    </View>
                    {
                        passWarn.length > 0 &&
                        <AppText style={{
                            color: ColorManager.redColor,
                            fontSize: 16,
                            fontFamily: fontFamily.PlusJakartaMedium,
                        }}>{passWarn}</AppText>
                    }
                </View>
                <View style={{}} >
                    <PrimaryButton onPress={() => {
                        props.navigation.navigate(RoutesName.otpScreen)

                    }}
                        label={StringManager.createAccBtnTxt}>
                    </PrimaryButton>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default SingUpScreen;