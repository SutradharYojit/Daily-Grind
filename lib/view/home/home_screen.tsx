import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { appStyles } from "../../resources/style";
import AppText from "../../components/primary_text";

const HomePageScreen = (props: any) => {
    return (
        <SafeAreaView style={appStyles.container}>
            <View style={appStyles.viewStyle}>
                <AppText>
                    Home Screen
                </AppText>
            </View>
        </SafeAreaView>
    );
}

export default HomePageScreen;