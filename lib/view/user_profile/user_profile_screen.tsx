import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { appTheme } from "../../resources/style";
import AppText from "../../components/primary_text";
import { StringManager } from "../../resources/string_manager";
import { fontFamily } from "../../resources/assets_manager";
import { ColorManager } from "../../resources/color_manager";
import Camera from "../../../assets/icons/camera.svg"
import Account from "../../../assets/icons/user_outline.svg";
import Notification from "../../../assets/icons/notification.svg"
import Pay from "../../../assets/icons/card.svg"
import Bookmark from "../../../assets/icons/bookmark.svg"
import Security from "../../../assets/icons/security.svg"
import { RoutesName } from "../../routes/routes_name";
import UserOptions from "../../components/user_options_card";

const UserProfileScreen = (props: any) => {

    const userOpptions = [
        {
            id: 1,
            icon: <Account width={30} height={30}></Account>,
            onPress: () => {
                console.log(props.navigation.navigate(RoutesName.accountScreen))
            },
            title: "Account",
            subtitle: "Manage and protect your account"
        },
        {
            id: 2,
            icon: <Notification width={30} height={30} />,
            onPress: () => { },
            title: "Notifications",
            subtitle: "Set your notifications"
        }, {
            id: 3,
            icon: <Pay width={30} height={30} />,
            onPress: () => { },
            title: "Payment",
            subtitle: "Manage and protect your payment"
        }, {
            id: 4,
            icon: <Bookmark width={30} height={30} />,
            onPress: () => { },
            title: "Bookmark",
            subtitle: "Set bookmark"
        }, {
            id: 5,
            icon: <Security width={30} height={30} />,
            onPress: () => { },
            title: "Privacy and policy",
            subtitle: "Privacy and policy"
        },
    ];

    return (
        <SafeAreaView style={[appTheme.whiteBackground, { padding: 15 }]}>
            <View style={{}}>
                <AppText style={{
                    fontSize: 25,
                    fontFamily: fontFamily.PlusJakartaBold,
                    color: ColorManager.greenColor,
                }}>
                    {StringManager.myApp}
                </AppText>
                <View style={{
                    marginTop: 10,
                    alignItems: 'center'
                }}>
                    <View style={{
                        backgroundColor: ColorManager.lightrgbGreyColor,
                        width: 111,
                        height: 111,
                        borderRadius: 100,
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                        zIndex: 0
                    }}>
                        <Image
                            style={{
                                width: 100,
                                height: 100,
                                borderRadius: 50,
                                position: 'relative',
                                zIndex: 0,
                            }}
                            source={require(`../../../assets/images/person_2.jpg`)}
                        />
                    </View>
                    <View style={{
                        backgroundColor: ColorManager.whiteColor,
                        width: 45,
                        height: 45,
                        borderRadius: 100,
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1,
                        bottom: 25
                    }}>
                        <View style={{
                            backgroundColor: ColorManager.blackColor,
                            width: 37,
                            height: 37,
                            borderRadius: 100,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Camera width={30} height={30}></Camera>
                        </View>
                    </View>
                </View>
                <View style={{
                    alignItems: 'center',
                    marginBottom: 30
                }}>

                    <AppText style={{
                        color: ColorManager.blackColor,
                        fontSize: 25,
                        fontWeight: '700'
                    }}>
                        Brain Robinson
                    </AppText>
                    <AppText style={{
                        color: ColorManager.greyColor,
                        fontSize: 16,
                    }}>
                        CEO at Amazon
                    </AppText>
                </View>
                <View>

                    {
                        userOpptions.map((data) =>
                            <UserOptions
                                key={data.id}
                                icon={data.icon}
                                onPress={data.onPress}
                                title={data.title}
                                subtitle={data.subtitle}>
                            </UserOptions>
                        )
                    }
                </View>
            </View>
        </SafeAreaView>
    );
}

export default UserProfileScreen;