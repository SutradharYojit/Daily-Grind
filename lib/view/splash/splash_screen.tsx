import React, { useEffect } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { appTheme } from "../../resources/style";
import { ColorManager } from "../../resources/color_manager";
import AppText from "../../components/primary_text";
import { fontFamily } from "../../resources/assets_manager";
import { RoutesName } from "../../routes/routes_name";


const SplashScreen = (props: any) => {
    const handleClick = async () => {

        setTimeout(() => {
            props.navigation.replace(RoutesName.onBoardingScreen);
        }, 2000
        );

    };

    useEffect(() => {
        handleClick();
    }, [])


    return (
        <SafeAreaView style={appTheme.container}>
            <View style={[appTheme.viewStyle,]}>
                <AppText style={appTheme.appTitle}>Daily<AppText style={{
                    fontSize: 45,
                    color: ColorManager.greenColor,
                    fontFamily: fontFamily.PlusJakartaMedium,
                }}>Grind</AppText></AppText>
            </View>
        </SafeAreaView>
    );
}
export default SplashScreen;