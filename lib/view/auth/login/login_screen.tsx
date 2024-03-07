import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { appStyles } from "../../../resources/style";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import AppText from "../../../components/primary_text";
import { StringManager } from "../../../resources/string_manager";
import { ColorManager } from "../../../resources/color_manager";
import { fontFamily } from "../../../resources/assets_manager";
import IconButton from "../../../components/buttons/icon_button";
import { Text } from "react-native-paper";
import PrimaryButton from "../../../components/buttons/primary_button";

const LoginScreen = (props: any) => {
    let [userEmail, setMail] = useState<string>('');
    let [userPass, setPass] = useState<string>('');
    let [emailWarn, setEmailWarn] = useState<string>('');
    let [passWarn, setPassWarn] = useState<string>('');

    const [visible3, setVisible3] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState(false);

    const hide = require("../../../../assets/icons/hide.png");
    const unhide = require("../../../../assets/icons/un_hide.png");

    const google = require("../../../../assets/icons/google-symbol.png");
    const apple = require("../../../../assets/icons/apple.png");
    const facebook = require("../../../../assets/icons/facebook.png");



    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <SafeAreaView style={appStyles.container}>
            <View style={{}}>
                <View style={{ paddingVertical: 25 }}>
                    <AppText style={[appStyles.appTitle, { fontFamily: fontFamily.PlusJakartaBold, }]}>{StringManager.dailyTxt}<AppText style={{
                        fontSize: 45,
                        color: ColorManager.greenColor,
                        fontFamily: fontFamily.PlusJakartaBold,
                    }}>{StringManager.grindTxt}</AppText></AppText>
                </View>
                <View style={{ paddingTop: 15 }}>
                    <AppText style={{
                        color: ColorManager.greyColor,
                        fontSize: 15,
                        fontFamily: fontFamily.PlusJakartaMedium
                    }}>{StringManager.emailTxt}</AppText>
                    <TextInput
                        placeholderTextColor={ColorManager.greyColor}
                        style={appStyles.textfilled}
                        onChangeText={(Text) => {
                            setMail(Text)
                            if (Text === "") {
                                setEmailWarn("Eamil is required")
                            }
                            else {

                            }
                        }}
                        placeholder={StringManager.emailExmTxt}
                    >
                    </TextInput>
                    <AppText style={{
                        color: ColorManager.redColor,
                        fontSize: 16,
                        fontFamily: fontFamily.PlusJakartaMedium,
                    }}>{emailWarn}</AppText>

                </View>

                <View style={{ paddingTop: 15 }}>
                    <AppText style={{
                        color: ColorManager.greyColor,
                        fontSize: 15,
                        fontFamily: fontFamily.PlusJakartaMedium
                    }}>{StringManager.passTxt}</AppText>
                    <View style={appStyles.textFilledcontainer}>
                        <TextInput
                            secureTextEntry={!showPassword}
                            placeholderTextColor={ColorManager.greyColor}
                            style={appStyles.textfilled_1}
                            onChangeText={(Text) => {
                                setPass(Text)
                            }}
                            placeholder={StringManager.passExmTxt}
                        >
                        </TextInput>
                        <IconButton onPress={() => toggleShowPassword()}>
                            <Image style={{ width: 22, height: 22 }} source={showPassword ? unhide : hide}></Image>
                        </IconButton>
                    </View>
                </View>
                <View style={{ paddingTop: 50 }}>
                    <PrimaryButton
                        onPress={() => { }}
                        label={StringManager.createAccBtnTxt}
                        secondryBtnStyle={{
                            backgroundColor: ColorManager.whiteColor,
                            borderColor: ColorManager.greyColor,
                            borderWidth: 1.0,
                        }}
                        secondryTxtStyle={{
                            color: ColorManager.blackColor,
                            fontFamily: fontFamily.PlusJakartaMedium,
                            fontSize: 20
                        }}
                    >
                    </PrimaryButton>
                </View>
                <View style={{ paddingTop: 15 }}>
                    <PrimaryButton onPress={() => { }}
                        label={StringManager.LoginTxt}>
                    </PrimaryButton>
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: 55,
                }}>
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: ColorManager.greyColor,
                            height: 2.0,
                        }}
                    />
                    <View style={{ paddingHorizontal: 20 }}>
                        <AppText>or continue with</AppText>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: ColorManager.greyColor,
                            height: 2.0,
                        }}
                    />
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    paddingTop: 45,
                }}>
                    <CardTile source={google} onPress={() => { }}></CardTile>
                    <CardTile source={apple} onPress={() => { }}></CardTile>
                    <CardTile source={facebook} onPress={() => { }}></CardTile>
                </View>
            </View>
        </SafeAreaView >
    );
}

const CardTile = ({ source, onPress }: any) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                height: 60,
                borderColor: ColorManager.greyColor,
                justifyContent: 'center',
                borderWidth: 1.0,
                borderRadius: 15,
                padding: 18
            }}>
            <Image style={{ width: 25, height: 25 }} source={source}></Image>
        </TouchableOpacity>
    );
}

export default LoginScreen;