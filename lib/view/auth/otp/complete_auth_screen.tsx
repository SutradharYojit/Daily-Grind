import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { appTheme } from "../../../resources/style";
import { Image, View } from "react-native";
import AppText from "../../../components/primary_text";
import { ColorManager } from "../../../resources/color_manager";
import PrimaryButton from "../../../components/buttons/primary_button";
import completeProcess from "../../../model/complete_process";

const ComepleAuthScreen = (props: any) => {
    const { successData } = props.route.params;
    const data: completeProcess = successData;
    return (
        <SafeAreaView style={appTheme.container}>
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <View style={{ paddingHorizontal: 45 }}>
                    <Image
                        style={{ width: '110%', height: "53%" }}
                        source={require("../../../../assets/images/complete_auth.png")}>
                    </Image>
                    <AppText
                        style={{ fontSize: 30, color: ColorManager.blackColor, }}>
                        {data.title}
                    </AppText>
                    <AppText
                        style={{
                            fontSize: 15,
                            color: ColorManager.greyColor,
                            paddingTop: 4
                        }}>
                        {data.subtitle}
                    </AppText>
                </View>
                <View style={{ paddingTop: 50 }} >
                    <PrimaryButton onPress={data.onPress}
                        label={data.btnTitle}>
                    </PrimaryButton>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default ComepleAuthScreen;