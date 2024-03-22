import React, { PropsWithChildren } from "react";
import {
    FlatList,
    Image,
    ImageBackground,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppText from "../../components/primary_text";
import { ColorManager } from "../../resources/color_manager";
import { StringManager } from "../../resources/string_manager";
import { fontFamily } from "../../resources/assets_manager";
import { RoutesName } from "../../routes/routes_name";
import History from "../../../assets/icons/history.svg";
import Pay from "../../../assets/icons/pay.svg";
import Promo from "../../../assets/icons/promo.svg";
import TopUp from "../../../assets/icons/top_up.svg";

import ViewAllTile from "../../components/view_all";

const HomePageScreen = (props: any) => {

    const cardOptionsData = [
        {
            id: 1,
            icon: <TopUp width={35} height={35}></TopUp>,
            onPress: () => {
                props.navigation.navigate(RoutesName.topUpScreen);
            },
            subtitle: "Top Up",
        }, {
            id: 2,
            icon: <Pay width={35} height={35}></Pay>,
            onPress: () => {
                props.navigation.navigate(RoutesName.payScreen);
            },
            subtitle: "Pay",
        }, {
            id: 3,
            icon: <Promo width={35} height={35}></Promo>,
            onPress: () => {
                props.navigation.navigate(RoutesName.promoScreen);
            },
            subtitle: "Promo",
        }, {
            id: 4,
            icon: <History width={35} height={35}></History>,
            onPress: () => {
                props.navigation.navigate(RoutesName.historyScreen);
            },
            subtitle: "History",
        },
    ];

    return (
        <SafeAreaView style={styles.container} >
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.container} >
                    <View style={styles.header}>
                        <AppText style={styles.headerText}>
                            {StringManager.myApp}
                        </AppText>

                    </View>
                    <View style={styles.balanceContainer}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                            <AppText style={styles.balanceLabel}>
                                Your card balance
                            </AppText>
                            <AppText style={styles.balanceAmount}>
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
                                    children={data.icon}
                                    onPress={data.onPress}
                                    title={data.subtitle} >
                                </CardOptions>)
                            }

                        </View>
                    </View>
                    <View style={{ paddingTop: 60, backgroundColor: ColorManager.whiteColor }}>
                        <View style={{ paddingHorizontal: 15 }}>
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
                        </View>
                        <FlatList
                            keyExtractor={(cardOptionsData) => cardOptionsData.id.toString()}
                            horizontal={true}
                            data={cardOptionsData}
                            showsHorizontalScrollIndicator={false}
                            renderItem={(data) =>
                                <TouchableOpacity onPress={() => {
                                    props.navigation.navigate(RoutesName.coffeeShopCoverScreen);
                                }}>
                                    <View style={{
                                        height: 220,
                                        width: 160,
                                    }}>
                                        <ImageBackground
                                            style={{ flex: 1, marginHorizontal: 7 }}
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
                                </TouchableOpacity>
                            }>

                        </FlatList>

                        <View style={{ paddingHorizontal: 15 }}>
                            <ViewAllTile title={"Popular Place"} onPress={() => { }}></ViewAllTile>
                            <FlatList
                                keyExtractor={(cardOptionsData) => cardOptionsData.id.toString()}
                                data={cardOptionsData}
                                scrollEnabled={false}
                                renderItem={(data) =>
                                    <View style={{
                                        backgroundColor: ColorManager.whiteColor,
                                        borderColor: ColorManager.greyColor,
                                        borderWidth: 0.5,
                                        borderRadius: 25,
                                        padding: 15,
                                        marginBottom: 12,
                                        flexDirection: 'row'
                                    }}>
                                        <Image source={require("../../../assets/images/cafe_1.jpg")}
                                            style={{
                                                width: 100,
                                                height: 130,
                                                borderRadius: 25,
                                            }}>
                                        </Image>
                                        <View style={{ paddingHorizontal: 10 }}>
                                            <AppText style={{
                                                fontSize: 18,
                                                flexWrap: 'wrap',
                                                color: ColorManager.blackColor,
                                                fontFamily: fontFamily.PlusJakartaBold,
                                                width: 215
                                            }}>
                                                Coffee Bean - Resort Kuta
                                            </AppText>

                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                {
                                                    [1, 2, 3, 4, 5].map((data) => <Image
                                                        key={data}
                                                        source={require("../../../assets/icons/gold_start.png")}
                                                        style={{ width: 14, height: 14 }}></Image>
                                                    )
                                                }
                                                <AppText style={{
                                                    fontSize: 15,
                                                    paddingLeft: 7,
                                                    flexWrap: 'wrap',
                                                    color: ColorManager.blackColor,
                                                    fontFamily: fontFamily.PlusJakartaBold,
                                                }}>
                                                    4.5
                                                </AppText>
                                            </View>

                                            <AppText style={{
                                                fontSize: 16,
                                                flexWrap: 'wrap',
                                                fontFamily: fontFamily.PlusJakartaMedium,
                                                width: 220,
                                                color: ColorManager.greyColor
                                            }} numberOfLines={2}>
                                                Coffee Bean - Resort Kuta
                                            </AppText>


                                        </View>

                                    </View>
                                }
                            >

                            </FlatList>
                        </View>

                    </View>

                </View>
            </ScrollView>
        </SafeAreaView >
    );
}

type CardProps = PropsWithChildren<{
    title: string,
    onPress: Function,
}>;

const CardOptions = ({ children, onPress, title, }: CardProps) => {
    return (
        <TouchableOpacity onPress={() => onPress()} >
            <View style={{ alignItems: 'center' }}>
                {children}
                <AppText style={{ fontSize: 17, color: ColorManager.greyColor }}>
                    {title}
                </AppText>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        minHeight: 200,
        maxHeight: 500,
        backgroundColor: ColorManager.greenColor,
        padding: 15,
        position: 'relative',
        zIndex: 1,
    },
    headerText: {
        color: ColorManager.whiteColor,
        fontSize: 25,
        fontFamily: fontFamily.PlusJakartaMedium,
    },
    balanceContainer: {
        backgroundColor: ColorManager.whiteColor,
        padding: 20,
        borderRadius: 20,
        position: 'absolute',
        width: "92%",
        alignSelf: 'center',
        top: 95,
        zIndex: 2,
    },
    balanceLabel: {
        fontSize: 17,
        color: ColorManager.greyColor,
    },
    balanceAmount: {
        fontSize: 18,
        color: ColorManager.blackColor,
        fontWeight: '600',
    },
    cardOption: {
        alignItems: 'center',
    },
    cardOptionIcon: {
        width: 35,
        height: 35,
    },
    cardOptionText: {
        fontSize: 17,
        color: ColorManager.greyColor,
    },
});
export default HomePageScreen;