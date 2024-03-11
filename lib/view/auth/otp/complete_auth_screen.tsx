import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { appStyles } from "../../../resources/style";
import { Image, View } from "react-native";
import AppText from "../../../components/primary_text";
import { ColorManager } from "../../../resources/color_manager";
import PrimaryButton from "../../../components/buttons/primary_button";
import { RoutesName } from "../../../routes/routes_name";
import { StringManager } from "../../../resources/string_manager";

const ComepleAuthScreen = (props: any) => {
    return (
        <SafeAreaView style={appStyles.container}>
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <View style={{ paddingHorizontal: 45 }}>
                    <Image style={{ width: '110%', height: "53%" }} source={require("../../../../assets/images/complete_auth.png")}></Image>

                    <AppText
                        style={{ fontSize: 30, color: ColorManager.blackColor, }}>
                        Successfully created an account
                    </AppText>
                    <AppText
                        style={{ fontSize: 15, color: ColorManager.greyColor, paddingTop: 4 }}>
                        After this you can explore our services and enjoy our products. Have fun and enjoy it!
                    </AppText>
                </View>
                <View style={{ paddingTop: 50 }} >
                    <PrimaryButton onPress={() => {
                        props.navigation.replace(RoutesName.dashboardScreen)
                    }}
                        label={StringManager.exploreBtnTxt}>
                    </PrimaryButton>
                </View>

            </View>
        </SafeAreaView>
    );
}

export default ComepleAuthScreen;