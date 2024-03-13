import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { appStyles } from "../../resources/style";
import { Image, ImageSourcePropType, View } from "react-native";
import { Text } from "react-native-paper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RoutesName } from "../../routes/routes_name";
import HomePageScreen from "../home/home_screen";
import CoffeeScreen from "../coffee/coffee_screen";
import RewardScreen from "../reward/reward_screen";
import UserProfileScreen from "../user_profile/user_profile_screen";
import { ColorManager } from "../../resources/color_manager";



const DashboardScreen = () => {
    const bottomTab = createBottomTabNavigator();

    return (
        <bottomTab.Navigator screenOptions={({ route }) => ({
            tabBarStyle: { height: 70 },
            tabBarShowLabel: false,
            tabBarHideOnKeyboard: true,
            tabBarIcon: ({ focused, color, size }) => {
                let iconName: ImageSourcePropType;
                switch (route.name) {
                    case RoutesName.homeScreen:
                        iconName = focused ? require("../../../assets/icons/home_filled.png") : require("../../../assets/icons/home_outline.png");
                        break;
                    case RoutesName.coffeeScreen:
                        iconName = focused ? require("../../../assets/icons/coffee_filled.png") : require("../../../assets/icons/coffe_outline.png");;
                        break;
                    case RoutesName.rewardScreen:
                        iconName = focused ? require("../../../assets/icons/tag_filled.png") : require("../../../assets/icons/tag_outline.png");;
                        break;
                    case RoutesName.userProfileScreen:
                        iconName = focused ? require("../../../assets/icons/user_filled.png") : require("../../../assets/icons/user_outline.png");;
                        break;
                    default:
                        throw new Error(`Invalid route name: ${route.name}`);
                }
                return <Image style={appStyles.bottomIcon} source={iconName} />

            },
        })}>
            <bottomTab.Screen name={RoutesName.homeScreen} component={HomePageScreen} options={{ headerShown: false }} />
            <bottomTab.Screen name={RoutesName.coffeeScreen} component={CoffeeScreen} options={{ headerShown: false }} />
            <bottomTab.Screen name={RoutesName.rewardScreen} component={RewardScreen} options={{ headerShown: false }} />
            <bottomTab.Screen name={RoutesName.userProfileScreen} component={UserProfileScreen} options={{ headerShown: false }} />
        </bottomTab.Navigator>
    );
};

export default DashboardScreen;
