import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { appTheme } from "../../resources/style";
import AppText from "../../components/primary_text";

const UserProfileScreen = (props: any) => {
    return (
        <SafeAreaView style={appTheme.container}>
            <View style={appTheme.viewStyle}>
                <AppText>
                    User Profile Screen
                </AppText>
            </View>
        </SafeAreaView>
    );
}

export default UserProfileScreen;