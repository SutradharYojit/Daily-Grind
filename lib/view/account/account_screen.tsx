import React from "react";
import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { appTheme } from "../../resources/style";
import AppBar from "../../components/app_bar";
import { StringManager } from "../../resources/string_manager";
import OptionsIcon from "../../../assets/icons/options.svg";
import Privacy from "../../../assets/icons/lock.svg";
import Security from "../../../assets/icons/securoty_1.svg";
import SecondStepVeri from "../../../assets/icons/2-step-veri.svg";
import Content from "../../../assets/icons/content.svg";
import Delete from "../../../assets/icons/trash.svg";
import UserOptions from "../../components/user_options_card";

const AccountScreen = (props: any) => {

    const accountOpptions = [
        {
            id: 1,
            icon: <Privacy width={30} height={30} />,
            onPress: () => { },
            title: "Privacy",
            subtitle: "Set and protect your privacy"
        },
        {
            id: 2,
            icon: <Security width={30} height={30} />,
            onPress: () => { },
            title: "2-step verification",
            subtitle: "2-step verification of your security"
        }, {
            id: 3,
            icon: <SecondStepVeri width={30} height={30} />,
            onPress: () => { },
            title: "Payment",
            subtitle: "Manage and protect your payment"
        }, {
            id: 4,
            icon: <Content width={30} height={30} />,
            onPress: () => { },
            title: "Request account info",
            subtitle: "Request your account info"
        }, {
            id: 5,
            icon: <Delete width={30} height={30} />,
            onPress: () => { },
            title: "Delete your account",
            subtitle: "Delete your account"
        },
    ];



    return (
        <SafeAreaView
            style={appTheme.whiteBackground}>
            <AppBar title={StringManager.accountTxt} nav={() => {
                props.navigation.goBack();
            }}>
                <TouchableOpacity onPress={() => { }}>
                    <OptionsIcon width={30} height={30} />
                </TouchableOpacity>
            </AppBar>
            <View style={appTheme.container}>

                <View>

                    {
                        accountOpptions.map((data) =>
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

export default AccountScreen;