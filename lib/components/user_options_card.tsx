import React from "react";
import { SvgProps } from "react-native-svg";
import AppText from "./primary_text";
import { ColorManager } from "../resources/color_manager";
import { TouchableOpacity, View } from "react-native";
import { fontFamily } from "../resources/assets_manager";

type UserActions = {
    icon?: any,
    onPress?: () => void,
    title?: string,
    subtitle: string,
}

const UserOptions = (props: UserActions) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={{
                marginBottom: 15,

            }}>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <View style={{
                        borderWidth: 1,
                        borderRadius: 100,
                        padding: 15,
                        borderColor: ColorManager.lightrgbGreyColor
                    }}>
                        {props.icon}
                    </View>
                    <View style={{
                        marginLeft: 10
                    }}>
                        <AppText style={{
                            color: ColorManager.blackColor,
                            fontSize: 22,
                            fontFamily: fontFamily.PlusJakartaMedium
                        }}>
                            {props.title}
                        </AppText>
                        <AppText style={{
                            color: ColorManager.greyColor,
                            fontSize: 16,
                        }}>
                            {props.subtitle}
                        </AppText>
                    </View>
                </View>
                <View style={{
                    marginTop: 10,
                    backgroundColor: ColorManager.lightrgbGreyColor,
                    height: 1.0,
                }} />
            </View>
        </TouchableOpacity>
    );
}


export default UserOptions;