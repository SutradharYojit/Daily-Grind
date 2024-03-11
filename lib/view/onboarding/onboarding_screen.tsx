import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground, View } from "react-native";
import AppText from "../../components/primary_text";
import { ColorManager } from "../../resources/color_manager";
import { fontFamily } from "../../resources/assets_manager";
import PrimaryButton from "../../components/buttons/primary_button";
import { RoutesName } from "../../routes/routes_name";
import { StringManager } from "../../resources/string_manager";

const OnBoardingScreen = (props: any) => {

    let [count, setCount] = useState<number>(0);

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
            <ImageBackground source={onBoarding[count].imgSrc}
                style={{
                    flex: 1,
                    padding: 15
                }} >
                <View style={{ flex: 1, justifyContent: 'flex-end', }}>
                    <AppText style={{
                        color: ColorManager.whiteColor,
                        fontSize: 45,
                        fontFamily: fontFamily.PlusJakartaMedium
                    }}>{onBoarding[count].title}
                    </AppText>

                    <AppText style={{
                        color: ColorManager.whiteColor,
                        fontSize: 18,
                        fontFamily: fontFamily.PlusJakartaLight
                    }}>{onBoarding[count].subtitle}
                    </AppText>
                    <ProgressBar count={count}></ProgressBar>
                    <View style={{ paddingBottom: 10 }}>
                        <PrimaryButton onPress={() => {
                            count = count + 1;
                            if (count < 3) {
                                setCount(count);
                            } else {
                                props.navigation.replace(RoutesName.loginScreen)
                            }
                        }} label={count == 2 ? StringManager.getStartBtnTxt : StringManager.nextBtnTxt}>
                        </PrimaryButton>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}


const ProgressBar = ({ count }: any) => {
    const renderProgressBar = (index: number) => {
        const isActive = index === count;
        return (
            <View
                key={index}
                style={{
                    width: 115,
                    backgroundColor: isActive ? ColorManager.greenColor : ColorManager.greyColor,
                    height: 2.5,
                }}
            />
        );
    };

    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
        }}>
            {[0, 1, 2].map((index) => renderProgressBar(index))}
        </View>
    );
};

export default OnBoardingScreen;