import React from "react";
import { Image, ImageBackground, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppText from "../../components/primary_text";
import { ColorManager } from "../../resources/color_manager";
import { fontFamily } from "../../resources/assets_manager";
import PrimaryButton from "../../components/buttons/primary_button";
import { StringManager } from "../../resources/string_manager";
import { appStyles } from "../../resources/style";


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
                        fontSize: 25,
                    }}>Coffee Bean
                    </AppText>

                    <AppText style={{
                        color: ColorManager.whiteColor,
                        fontSize: 14,
                        fontFamily: fontFamily.PlusJakartaLight
                    }}>Bali ,Indonesia
                    </AppText>

                    <View style={{ flexDirection: 'row', paddingTop: 10, justifyContent: 'space-between', }}>
                        <AppText style={{
                            color: ColorManager.whiteColor,
                            fontSize: 12,
                            fontFamily: fontFamily.PlusJakartaLight
                        }}> 1000+ people have explored
                        </AppText>
                        <View style={{ flexDirection: 'row-reverse', }}>
                            {
                                [0, 1, 2, 3,].map((data) => <Image style={[appStyles.icon_demo, { borderRadius: 50, position: 'relative', zIndex: 0, right: 15 * data }]} source={require(`../../../assets/images/cafe_1.jpg`)}></Image>
                                )
                            }
                        </View>

                    </View>
                    <View
                        style={{
                            backgroundColor: ColorManager.whiteColor,
                            height: 2.0,
                            borderRadius: 5,
                            marginVertical: 15
                        }}
                    />
                    <AppText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                    </AppText>

                    <View style={{ paddingVertical: 10 }}>
                        <PrimaryButton onPress={() => { }} label={StringManager.seeMoreBtnTxt}>
                        </PrimaryButton>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView >
    );
};

export default CoffeeShopCoerScreen;