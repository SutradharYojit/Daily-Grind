import React from "react";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { appTheme } from "../../resources/style";
import AppText from "../../components/primary_text";
import { StringManager } from "../../resources/string_manager";
import { fontFamily } from "../../resources/assets_manager";
import { ColorManager } from "../../resources/color_manager";
import Camera from "../../../assets/icons/camera.svg"
import Account from "../../../assets/icons/user_outline.svg";

const UserProfileScreen = (props: any) => {
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
                    alignItems: 'center'
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

                    <View style={{
                        flexDirection: 'row',
                        backgroundColor: 'green',
                    }}>
                        <View style={{
                            borderWidth: 1,
                            borderRadius: 100,
                            padding: 15,
                            borderColor: ColorManager.greenColor
                        }}>
                            <Account width={30} height={30}></Account>
                        </View>
                        <View style={{}}>
                            <AppText style={{
                                color: ColorManager.blackColor,
                                fontSize: 22,
                                fontFamily: fontFamily.PlusJakartaMedium
                            }}>
                                Account
                            </AppText>
                            <AppText style={{
                                color: ColorManager.greyColor,
                                fontSize: 16,
                            }}>
                                CEO at Amazon
                            </AppText>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default UserProfileScreen;