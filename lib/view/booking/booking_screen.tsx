import React from "react";
import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { appTheme } from "../../resources/style";
import AppText from "../../components/primary_text";
import AppBar from "../../components/app_bar";
import { StringManager } from "../../resources/string_manager";
import OptionsIcon from '../../../assets/icons/options.svg';

const BookingScreen = (props: any) => {
    return (
        <SafeAreaView style={appTheme.whiteBackground}>
            <AppBar title={StringManager.bookingTxt} nav={() => {
                props.navigation.goBack();
            }}>
                <TouchableOpacity onPress={() => { }}>
                    <OptionsIcon width={30} height={30} />
                </TouchableOpacity>
            </AppBar>
            <View style={appTheme.container}>
                <AppText>
                    Booking Screen
                </AppText>
            </View>
        </SafeAreaView>
    );
}

export default BookingScreen;