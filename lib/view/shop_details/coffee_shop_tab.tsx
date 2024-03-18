import React from "react";
import { Image, View } from "react-native";
import AppText from "../../components/primary_text";
import { ColorManager } from "../../resources/color_manager";

const CoffeeShopTab = () => {
    return (
        <View
            style={{

            }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: 15,
                paddingHorizontal: 18,
                paddingVertical: 18,
                backgroundColor: ColorManager.whiteColor,
                borderColor: ColorManager.greyColor,
                borderWidth: 0.5,
            }}>
                <View style={{
                    borderRadius: 65,
                    height: 75,
                    width: 75,
                    marginRight: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: ColorManager.lightGreenColor
                }}>
                    <Image source={require("../../../assets/images/coffe_1.png")}
                        style={{ width: 95, height: 95, }}>
                    </Image>
                </View>
                <View style={{}}>
                    <AppText style={{
                        fontSize: 19,
                        color: ColorManager.greyColor,
                    }}>
                        Vanilla Sweet Cream
                    </AppText>
                    <AppText style={{
                        fontSize: 19,
                        fontWeight: '600',
                        color: ColorManager.blackColor,
                    }}>
                        IDR 25.000
                    </AppText>
                </View>
            </View>
            <View style={{

                backgroundColor: ColorManager.redColor,
                height: 100,
                width: '100%'
            }}>

            </View>
        </View>
    );
};

export default CoffeeShopTab;
