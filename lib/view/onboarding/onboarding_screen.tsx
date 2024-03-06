import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground, Text, View } from "react-native";
import AppText from "../../components/primary_text";
import { ColorManager } from "../../resources/color_manager";
import { fontFamily } from "../../resources/assets_manager";
import PrimaryButton from "../../components/buttons/primary_button";
import { Divider, } from "react-native-paper";

const OnBoardingScreen = () => {

    const onBoarding = [
        {
            id: 1,
            imgSrc: require("../../../assets/images/onboarding_1.jpg"),
            title: "Let's explore Kinds of coffee",
            subtitle: "Let's explore various coffe flavors with us with just few clicks"

        },
        {
            id: 2,
            imgSrc: require("../../../assets/images/onboarding_2.jpg"),
            title: "Monitor and visit the cafe",
            subtitle: "Monitor the state of the cafe and visit with your friends"

        },
        {
            id: 3,
            imgSrc: require("../../../assets/images/onboarding_5.jpg"),
            title: "Get ready for the newest coffee",
            subtitle: "Get ready to try the newest coffee variant with your friends"

        },

    ];

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <ImageBackground source={onBoarding[0].imgSrc}
                style={{
                    flex: 1,
                    padding: 15
                }} >
                <View style={{ flex: 1, justifyContent: 'flex-end', }}>
                    <AppText style={{
                        color: ColorManager.whiteColor,
                        fontSize: 45,
                        fontFamily: fontFamily.PlusJakartaMedium
                    }}>{onBoarding[0].title}</AppText>
                    <AppText style={{
                        color: ColorManager.whiteColor,
                        fontSize: 18,
                        fontFamily: fontFamily.PlusJakartaLight
                    }}>{onBoarding[0].subtitle}</AppText>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <Divider style={{ height: 2.5, backgroundColor: ColorManager.blackColor, marginVertical: 5 }}></Divider>

                    </View>
                    <View style={{ paddingBottom: 10 }}>
                        <PrimaryButton onPress={() => {
                            console.log("Next")
                        }} label="Next">
                        </PrimaryButton>
                    </View>
                </View>
            </ImageBackground>

        </SafeAreaView>
    );
}

export default OnBoardingScreen;