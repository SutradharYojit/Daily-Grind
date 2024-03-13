import React from "react";
import { FlatList, Image, ImageBackground, ScrollView, TouchableNativeFeedback, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { appStyles } from "../../resources/style";
import AppText from "../../components/primary_text";
import { ColorManager } from "../../resources/color_manager";
import { StringManager } from "../../resources/string_manager";
import { fontFamily } from "../../resources/assets_manager";


const HomePageScreen = (props: any) => {

    const cardOptionsData = [
        {
            id: 1,
            icon: require("../../../assets/icons/top_up.png"),
            onPress: () => { },
            subtitle: "Top Up",
        }, {
            id: 2,
            icon: require("../../../assets/icons/pay.png"),
            onPress: () => { },
            subtitle: "Pay",
        }, {
            id: 3,
            icon: require("../../../assets/icons/promo.png"),
            onPress: () => { },
            subtitle: "Promo",
        }, {
            id: 4,
            icon: require("../../../assets/icons/history.png"),
            onPress: () => { },
            subtitle: "History",
        },
    ];

    return (
        <SafeAreaView style={{ flex: 1 }} >
            <ScrollView>
                <View style={{ flex: 1 }} >
                    <View style={{
                        minHeight: 200,
                        maxHeight: 500,
                        backgroundColor: ColorManager.greenColor,
                        padding: 15,
                        position: 'relative',
                        zIndex: 1
                    }}>
                        <AppText style={{
                            color: ColorManager.whiteColor,
                            fontSize: 25,
                            fontFamily: fontFamily.PlusJakartaMedium,
                        }}>
                            {StringManager.myApp}
                        </AppText>

                    </View>
                    <View style={{
                        backgroundColor: ColorManager.whiteColor,
                        padding: 20,
                        borderRadius: 20,
                        position: 'absolute',
                        width: "92%",
                        alignSelf: 'center',
                        top: 95,
                        zIndex: 2
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                            <AppText style={{ fontSize: 17, color: ColorManager.greyColor }}>
                                Your card balance
                            </AppText>
                            <AppText style={{ fontSize: 18, color: ColorManager.blackColor, fontWeight: '600' }}>
                                $240.00
                            </AppText>
                        </View>
                        <View style={{
                            marginVertical: 12,
                            height: 0,
                            flexDirection: 'row',
                            borderWidth: 1,
                            borderStyle: 'dashed',
                            borderColor: ColorManager.greenColor,
                        }}>
                        </View>
                        <View style={{
                            paddingTop: 10,
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                            {
                                cardOptionsData.map((data) => <CardOptions
                                    key={data.id}
                                    source={data.icon}
                                    onPress={data.onPress}
                                    subtitle={data.subtitle}>


                                </CardOptions>)
                            }

                        </View>
                    </View>

                    <View style={[appStyles.container, { paddingTop: 60 }]}>
                        <ViewAllTile title={"My Reward"} onPress={() => { }}></ViewAllTile>
                        <View style={{
                            flexDirection: 'row',
                            borderRadius: 15,
                            padding: 10,
                            backgroundColor: ColorManager.whiteColor,
                            borderColor: ColorManager.greyColor,
                            borderWidth: 0.5,

                        }}>
                            <View style={{
                                borderRadius: 65,
                                height: 55,
                                width: 55,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: ColorManager.lightGreenColor
                            }}>
                                <Image source={require("../../../assets/images/takeaway-cup.png")}
                                    style={{ width: 45, height: 45, }}>
                                </Image>
                            </View>
                            <View style={{
                                paddingLeft: 15,
                            }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <AppText style={{
                                        fontSize: 16,
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
                            </View>
                        </View>
                        <ViewAllTile title={"Favorite Place"} onPress={() => { }}></ViewAllTile>
                        <FlatList
                            horizontal={true}
                            data={cardOptionsData}
                            renderItem={(data) =>
                                <View style={{
                                    height: 220,
                                    width: 160,
                                    paddingHorizontal: 5
                                }}>
                                    <ImageBackground
                                        style={{ flex: 1, }}
                                        imageStyle={{ borderRadius: 17 }}
                                        source={require("../../../assets/images/onboarding_2.jpg")} >
                                        <View style={{ flex: 1, padding: 15, justifyContent: 'flex-end' }}>
                                            <AppText style={{
                                                fontSize: 17,
                                                color: ColorManager.whiteColor,
                                            }}>
                                                Coffee Bean
                                            </AppText>
                                            <AppText style={{
                                                fontSize: 17,
                                                color: ColorManager.whiteColor,
                                            }}>
                                                Bali, Indonesia
                                            </AppText>
                                        </View>

                                    </ImageBackground>
                                </View>
                            }>

                        </FlatList>

                        <ViewAllTile title={"Popular Place"} onPress={() => { }}></ViewAllTile>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
}

const CardOptions = ({ source, onPress, subtitle }: any) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{ alignItems: 'center' }}>
                <Image source={source} style={{ width: 35, height: 35 }}></Image>
                <AppText style={{ fontSize: 17, color: ColorManager.greyColor }}>
                    {subtitle}
                </AppText>
            </View>
        </TouchableOpacity>
    );
};

const ViewAllTile = ({ title, onPress }: any) => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 11,

        }}>
            <AppText style={{
                fontSize: 18,
                fontWeight: '700',
                color: ColorManager.blackColor,
                fontFamily: fontFamily.PlusJakartaMedium
            }}>
                {title}
            </AppText>
            <TouchableOpacity onPress={onPress}>
                <AppText style={{ fontSize: 16, color: ColorManager.greenColor, fontWeight: '600' }}>
                    View all
                </AppText>
            </TouchableOpacity>
        </View>
    );
}


export default HomePageScreen;