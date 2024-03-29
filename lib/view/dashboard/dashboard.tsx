import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RoutesName } from "../../routes/routes_name";
import HomePageScreen from "../home/home_screen";
import CoffeeScreen from "../coffee/coffee_screen";
import RewardScreen from "../reward/reward_screen";
import UserProfileScreen from "../user_profile/user_profile_screen";
import HomeOutline from "../../../assets/icons/home_outline.svg";
import HomeFilled from "../../../assets/icons/home_filled.svg";
import CoffeOutline from "../../../assets/icons/coffee_outline.svg";
import CoffeFilled from "../../../assets/icons/coffee_filled.svg";
import UserFilled from "../../../assets/icons/user_filled.svg";
import UserOutline from "../../../assets/icons/user_outline.svg";
import TagOutline from "../../../assets/icons/tag_outline.svg";
import TagFilled from "../../../assets/icons/tag_filled.svg";

const DashboardScreen = () => {
    const bottomTab = createBottomTabNavigator();

    return (
        <bottomTab.Navigator screenOptions={({ route }) => ({
            tabBarStyle: { height: 70 },
            tabBarShowLabel: false,
            tabBarHideOnKeyboard: true,
            tabBarIcon: ({ focused, color, size }) => {
                let iconName: any;
                switch (route.name) {
                    case RoutesName.homeScreen:
                        iconName = focused ? <HomeFilled width={30} height={30} /> : <HomeOutline width={30} height={30} />;
                        break;
                    case RoutesName.coffeeScreen:
                        iconName = focused ? <CoffeFilled width={30} height={30} /> : <CoffeOutline width={30} height={30} />;
                        break;
                    case RoutesName.rewardScreen:
                        iconName = focused ? <TagFilled width={30} height={30} /> : <TagOutline width={30} height={30} />;
                        break;
                    case RoutesName.userProfileScreen:
                        iconName = focused ? <UserFilled width={30} height={30} /> : <UserOutline width={30} height={30} />;
                        break;
                    default:
                        throw new Error(`Invalid route name: ${route.name}`);
                }
                return iconName;
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