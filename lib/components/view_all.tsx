import React from "react";
import { fontFamily } from "../resources/assets_manager";
import { ColorManager } from "../resources/color_manager";
import AppText from "./primary_text";
import { TouchableOpacity, View } from "react-native";

type ViewAllProps = {
    title: string,
    onPress?: () => void,
};

const ViewAllTile = ({ title, onPress }: ViewAllProps) => {
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
                <AppText style={{
                    fontSize: 16,
                    color: ColorManager.greenColor,
                    fontWeight: '600'
                }}>
                    View all
                </AppText>
            </TouchableOpacity>
        </View>
    );
}

export default ViewAllTile;