import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { appTheme } from "../../resources/style";
import AppText from "../../components/primary_text";

const RewardScreen = (props: any) => {
    return (
        <SafeAreaView style={appTheme.container}>
            <View style={appTheme.viewStyle}>
                <AppText>
                    Reward Screen
                </AppText>
            </View>
        </SafeAreaView>
    );
}

export default RewardScreen;