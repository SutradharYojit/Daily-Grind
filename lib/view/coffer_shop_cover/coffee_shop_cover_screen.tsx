import React from "react";
import { ImageBackground, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppText from "../../components/primary_text";
import { ColorManager } from "../../resources/color_manager";
import { fontFamily } from "../../resources/assets_manager";
import PrimaryButton from "../../components/buttons/primary_button";
import { StringManager } from "../../resources/string_manager";


const CoffeeShopCoerScreen = (props: any) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={require("../../../assets/images/onboarding_5.jpg")}
                style={{
                    flex: 1,
                    padding: 15
                }} >
                <View style={{ flex: 1, justifyContent: 'flex-end', }}>
                    <AppText style={{
                        color: ColorManager.whiteColor,
                        fontSize: 45,
                        fontFamily: fontFamily.PlusJakartaMedium
                    }}>{"Title"}
                    </AppText>

                    <AppText style={{
                        color: ColorManager.whiteColor,
                        fontSize: 18,
                        fontFamily: fontFamily.PlusJakartaLight
                    }}>{"subtitle"}
                    </AppText>
                    <View style={{ paddingBottom: 10 }}>
                        <PrimaryButton onPress={() => { }} label={StringManager.seeMoreBtnTxt}>
                        </PrimaryButton>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

export default CoffeeShopCoerScreen;