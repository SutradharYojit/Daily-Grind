import React from "react";
import { Image, SafeAreaView, ScrollView, TouchableOpacity, View } from "react-native";
import { appTheme } from "../../resources/style";
import AppText from "../../components/primary_text";
import AppBar from "../../components/app_bar";
import { StringManager } from "../../resources/string_manager";
import OptionsIcon from '../../../assets/icons/options.svg';
import Timer from '../../../assets/icons/clock.svg';
import { ColorManager } from "../../resources/color_manager";
import { fontFamily } from "../../resources/assets_manager";
import ViewAllTile from "../../components/view_all";

const PromoScreen = (props: any) => {
    return (
        <SafeAreaView style={appTheme.whiteBackground}>
            <AppBar title={StringManager.promoTxt} nav={() => {
                props.navigation.goBack();
            }}>
                <TouchableOpacity onPress={() => { }}>
                    <OptionsIcon width={30} height={30} />
                </TouchableOpacity>
            </AppBar>
            <ScrollView>
                <View style={appTheme.container}>
                    <AppText style={{
                        color: ColorManager.blackColor,
                        fontSize: 18,
                        fontWeight: '700',
                    }}>{StringManager.hottestpromoTxt}
                    </AppText>
                    {
                        [0, 1, 2].map((data) =>
                            <View
                                key={data}
                                style={{
                                    flexDirection: 'row',
                                    borderRadius: 15,
                                    padding: 19,
                                    marginTop: 8,
                                    backgroundColor: ColorManager.whiteColor,
                                    borderColor: ColorManager.greyColor,
                                    borderWidth: 0.5,
                                }}>
                                <View style={{
                                    borderRadius: 65,
                                    height: 60,
                                    width: 60,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: ColorManager.lightGreenColor,
                                }}>
                                    <Image source={require("../../../assets/images/takeaway-cup.png")}
                                        style={{ width: 50, height: 50, }}>
                                    </Image>
                                </View>
                                <View style={{
                                    paddingLeft: 15,
                                }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <AppText style={{
                                            fontSize: 18,
                                            color: ColorManager.blackColor,
                                            fontWeight: '700'
                                        }}>
                                            Free 1 Coffee
                                        </AppText>
                                        <AppText style={{
                                            fontSize: 16,
                                            color: ColorManager.blackColor,
                                            fontWeight: '700'
                                        }}>
                                            8/10
                                        </AppText>
                                    </View>
                                    <AppText style={{
                                        fontSize: 14,
                                        color: ColorManager.greyColor,
                                    }}>
                                        But 10 Coffees and get 1 Coffee for free
                                    </AppText>
                                    <View style={{
                                        flexDirection: 'row',
                                        paddingTop: 5

                                        // backgroundColor: 'black',
                                    }}>
                                        <Timer width={22} height={22}></Timer>
                                        <AppText style={{
                                            fontSize: 16,
                                            color: ColorManager.redColor,
                                            paddingLeft: 8,
                                        }}>
                                            Ends in 12 hours
                                        </AppText>
                                    </View>
                                </View>
                            </View>
                        )
                    }
                    <ViewAllTile title={StringManager.recomendPromoTxt} onPress={() => {

                    }}></ViewAllTile>
                    {
                        [0, 1, 2, 3].map((data) =>
                            <View
                                key={data}
                                style={{
                                    flexDirection: 'row',
                                    borderRadius: 15,
                                    padding: 19,
                                    marginTop: 8,
                                    backgroundColor: ColorManager.whiteColor,
                                    borderColor: ColorManager.greyColor,
                                    borderWidth: 0.5,
                                }}>
                                <View style={{
                                    borderRadius: 65,
                                    height: 60,
                                    width: 60,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: ColorManager.lightGreenColor,
                                }}>
                                    <Image source={require("../../../assets/images/takeaway-cup.png")}
                                        style={{ width: 50, height: 50, }}>
                                    </Image>
                                </View>
                                <View style={{
                                    paddingLeft: 15,
                                }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <AppText style={{
                                            fontSize: 18,
                                            color: ColorManager.blackColor,
                                            fontWeight: '700'
                                        }}>
                                            Free 1 Coffee
                                        </AppText>
                                        <AppText style={{
                                            fontSize: 16,
                                            color: ColorManager.blackColor,
                                            fontWeight: '700'
                                        }}>
                                            8/10
                                        </AppText>
                                    </View>
                                    <AppText style={{
                                        fontSize: 14,
                                        color: ColorManager.greyColor,
                                    }}>
                                        But 10 Coffees and get 1 Coffee for free
                                    </AppText>
                                    <View style={{
                                        flexDirection: 'row',
                                        paddingTop: 5

                                        // backgroundColor: 'black',
                                    }}>
                                        <Timer width={22} height={22}></Timer>
                                        <AppText style={{
                                            fontSize: 16,
                                            color: ColorManager.redColor,
                                            paddingLeft: 8,
                                        }}>
                                            Ends in 12 hours
                                        </AppText>
                                    </View>
                                </View>
                            </View>
                        )
                    }

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default PromoScreen;
