import React, { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppText from "../../../components/primary_text";
import { fontFamily } from "../../../resources/assets_manager";
import { ColorManager } from "../../../resources/color_manager";
import { appStyles } from "../../../resources/style";

const SingUpScreen = (props: any) => {
    let [userName, setUserName] = useState<string>('');
    let [userEmail, setMail] = useState<string>('');
    let [userPass, setPass] = useState<string>('');
    let [userWarn, setuserWarn] = useState<string>('');
    let [emailWarn, setEmailWarn] = useState<string>('');
    let [passWarn, setPassWarn] = useState<string>('');
    const [showPassword, setShowPassword] = useState(false);
    return (
        <SafeAreaView style={appStyles.container}>
            <View style={{}}>
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

                </View>
            </View>
        </SafeAreaView>
    );
}

export default SingUpScreen;