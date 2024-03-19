import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { appStyles } from "../../../resources/style";
import { Image, ScrollView, StyleSheet, TouchableNativeFeedback, TouchableOpacity, View } from "react-native";
import AppText from "../../../components/primary_text";
import { StringManager } from "../../../resources/string_manager";
import { ColorManager } from "../../../resources/color_manager";
import { fontFamily } from "../../../resources/assets_manager";
import IconButton from "../../../components/buttons/icon_button";
import PrimaryButton from "../../../components/buttons/primary_button";
import CheckBox from 'react-native-check-box';
import PrimaryTextFilled from "../../../components/primary_text_filled";
import { RoutesName } from "../../../routes/routes_name";
import { Validations } from "../../../utils/validation_regex";


const LoginScreen = (props: any) => {
    const validate = new Validations();
    let [userEmail, setMail] = useState<string>('');
    let [userPass, setPass] = useState<string>('');
    let [emailWarn, setEmailWarn] = useState<string>('');
    let [passWarn, setPassWarn] = useState<string>('');
    const [showPassword, setShowPassword] = useState(false);
    const [checked, setChecked] = useState(false);
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
            <ScrollView>
                <View  >
                    <View style={{ paddingVertical: 45 }}>
                        <AppText
                            style={[appStyles.appTitle,
                            {
                                fontFamily: fontFamily.PlusJakartaBold,
                            }
                            ]}>{StringManager.dailyTxt}
                            <AppText style={styles.appTitleGreen}>{StringManager.grindTxt}</AppText></AppText>
                    </View>

                    <View style={{ paddingTop: 15 }}>
                        <AppText style={appStyles.label}>{StringManager.emailTxt}</AppText>
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
                            <AppText style={appStyles.error}>{emailWarn}</AppText>
                        }
                    </View>

                    <View style={{ paddingTop: 8 }}>
                        <AppText style={appStyles.label}>{StringManager.passTxt}</AppText>
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
                                <Image style={appStyles.icon} source={showPassword ? unhide : hide}></Image>
                            </IconButton>
                        </View>
                        {
                            passWarn.length > 0 &&
                            <AppText style={appStyles.error}>{passWarn}</AppText>
                        }
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: "space-between",
                            paddingTop: 5
                        }}>
                            <View style={{ flexDirection: 'row', width: 135 }}>
                                <CheckBox
                                    style={{ flex: 1, }}
                                    onClick={() => {
                                        setChecked(!checked)
                                    }}
                                    isChecked={checked}
                                />
                                <AppText style={{ color: ColorManager.greyColor }}>
                                    {StringManager.remeberTxt}
                                </AppText>
                            </View>

                            <TouchableNativeFeedback onPress={() => {
                                props.navigation.navigate(RoutesName.forgetPassScreen);
                            }}>
                                <AppText style={{ color: ColorManager.greyColor }}>
                                    {StringManager.forgerPassTxt}
                                </AppText>
                            </TouchableNativeFeedback>

                        </View>
                    </View>

                    <View style={{ paddingTop: 50 }}>
                        <PrimaryButton
                            onPress={() => {
                                props.navigation.navigate(RoutesName.signupScreen)
                            }}
                            label={StringManager.createAccBtnTxt}
                            secondryBtnStyle={styles.secondryBtnStyle}
                            secondryTxtStyle={styles.secondryTxtStyle}
                        >
                        </PrimaryButton>
                    </View>

                    <View style={{ paddingTop: 15 }}>
                        <PrimaryButton onPress={() => {
                            props.navigation.replace(RoutesName.dashboardScreen)
                        }}
                            label={StringManager.LoginTxt}>
                        </PrimaryButton>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingTop: 55,
                    }}>
                        <View style={styles.dividerStyle} />
                        <View style={{ paddingHorizontal: 20 }}>
                            <AppText style={{ color: ColorManager.greyColor }}>{StringManager.continueTxt}</AppText>
                        </View>
                        <View style={styles.dividerStyle} />
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
            </ScrollView>
        </SafeAreaView >
    );
}

const CardTile = ({ source, onPress }: any) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.cardTile}>
            <Image style={styles.cardTileIcon} source={source}></Image>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    appTitleGreen: {
        fontSize: 45,
        color: ColorManager.greenColor,
        fontFamily: fontFamily.PlusJakartaBold,
    },
    secondryBtnStyle: {
        backgroundColor: ColorManager.whiteColor,
        borderColor: ColorManager.greyColor,
        borderWidth: 1.0,
    },
    secondryTxtStyle: {
        color: ColorManager.blackColor,
        fontFamily: fontFamily.PlusJakartaMedium,
        fontSize: 20
    },
    cardTile: {
        height: 60,
        borderColor: ColorManager.greyColor,
        justifyContent: 'center',
        borderWidth: 1.0,
        borderRadius: 15,
        padding: 18,
    },
    cardTileIcon: {
        width: 25,
        height: 25,
    },
    dividerStyle: {
        flex: 1,
        backgroundColor: ColorManager.greyColor,
        height: 2.0,
    }
});


export default LoginScreen;