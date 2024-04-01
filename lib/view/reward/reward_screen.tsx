import React from "react";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { appTheme } from "../../resources/style";
import AppText from "../../components/primary_text";
import { ColorManager } from "../../resources/color_manager";
import { fontFamily } from "../../resources/assets_manager";

const RewardScreen = (props: any) => {
    return (
        <SafeAreaView style={appTheme.whiteBackground}>
            <View style={appTheme.container}>
                <AppText style={{
                    fontSize: 27,
                    fontFamily: fontFamily.PlusJakartaMedium,
                    color: ColorManager.blackColor,
                }}>
                    Attractive gift for you
                </AppText>
                <AppText style={{
                    fontSize: 13.5,
                    fontFamily: fontFamily.PlusJakartaMedium,
                    color: ColorManager.greyColor,
                    marginTop: 10
                }}>
                    Carry out the missions and enjoy the rewards
                </AppText>

                <View style={{
                    flexDirection: 'row',
                    // justifyContent: 'space-between',
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    backgroundColor: ColorManager.whiteColor,
                    borderRadius: 15,
                }}>
                    <Image source={require("../../../assets/icons/present.png")}
                        style={{
                            width: 50,
                            height: 50,
                        }}>
                    </Image>
                    <View>
                        <AppText style={{
                            fontSize: 18,
                            fontFamily: fontFamily.PlusJakartaBold,
                        }}>
                            350 XP more to get rewards
                        </AppText>
                        <View style={{
                            maxWidth: 250,
                            backgroundColor: ColorManager.lightrgbGreyColor,
                            borderRadius: 20
                        }}>

                            <View style={{
                                maxWidth: 150,
                                backgroundColor: ColorManager.greenColor,
                                borderRadius: 20,
                                padding: 5
                            }}>

                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default RewardScreen;