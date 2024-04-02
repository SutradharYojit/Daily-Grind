import React from "react";
import { Image, ScrollView, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { appTheme } from "../../resources/style";
import AppText from "../../components/primary_text";
import { ColorManager } from "../../resources/color_manager";
import { fontFamily } from "../../resources/assets_manager";
import RightArrow from '../../../assets/icons/right_arrow.svg';
import ViewAllTile from "../../components/view_all";
import GiftCard from "../../components/gift_card";
import { TouchableRipple } from "react-native-paper";
import { RoutesName } from "../../routes/routes_name";

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
                    justifyContent: 'space-between',
                    alignItems: 'center',
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
                            marginBottom: 10
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
                                padding: 4
                            }}>

                            </View>
                        </View>
                    </View>
                    <RightArrow></RightArrow>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: 20
                    }}>
                    <VouchersCardView
                        vouchersCount={11}
                        remainingCount="5 will Expire"
                        title="Vouchers" />
                    <VouchersCardView
                        vouchersCount={17}
                        remainingCount="3 in progress"
                        title="Missions" />

                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                        <ViewAllTile title="Voucher for you"></ViewAllTile>
                        <TouchableOpacity onPress={() => {
                            props.navigation.navigate(RoutesName.voucherDetailsScreen)
                        }}>
                            <GiftCard
                                count="10/15"
                                countVisible={true}
                                title="Free 1 Coffee"
                                subtitle="But 10 Coffees and get 1 Coffee for free"
                                expTime="Ends in 12 hours"
                            />
                        </TouchableOpacity>
                        <ViewAllTile title="Missions for you"></ViewAllTile>
                        {
                            [0, 1, 2].map((data) =>
                                <GiftCard
                                    key={data}
                                    count="10/15"
                                    countVisible={true}
                                    title="Free 1 Coffee"
                                    subtitle="But 10 Coffees and get 1 Coffee for free"
                                    expTime="Ends in 12 hours"
                                />
                            )
                        }
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

export default RewardScreen;

type VouchersCardProps = {
    vouchersCount: number,
    title: string,
    remainingCount: string
};

const VouchersCardView = (props: VouchersCardProps) => {
    return (
        <View
            style={{
                padding: 10,
                borderRadius: 10,
                borderWidth: 0.7,
                borderColor: ColorManager.greyColor
            }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <AppText style={{
                    fontSize: 25,
                    color: ColorManager.blackColor
                }}>
                    {props.vouchersCount}
                </AppText>
                <RightArrow></RightArrow>
            </View>
            <AppText style={{
                fontSize: 20,
                color: ColorManager.blackColor,
                fontFamily: fontFamily.PlusJakartaBold,
                marginBottom: 12
            }}>
                {props.title}
            </AppText>
            <View style={{
                width: 160,
                backgroundColor: ColorManager.lightrgbGreyColor,
                borderRadius: 20
            }}>

                <View style={{
                    width: 75,
                    backgroundColor: ColorManager.greenColor,
                    borderRadius: 20,
                    padding: 4
                }}>

                </View>
            </View>
            <AppText style={{
                fontSize: 18,
                marginTop: 5,
                color: ColorManager.greyColor,
            }}>
                {props.remainingCount}
            </AppText>
        </View>
    );

}