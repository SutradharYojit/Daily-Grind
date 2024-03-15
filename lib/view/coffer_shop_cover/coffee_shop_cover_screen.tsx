import React, { PropsWithChildren } from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppText from "../../components/primary_text";
import { ColorManager } from "../../resources/color_manager";
import { fontFamily } from "../../resources/assets_manager";
import PrimaryButton from "../../components/buttons/primary_button";
import { StringManager } from "../../resources/string_manager";
import { appStyles } from "../../resources/style";
import { RoutesName } from "../../routes/routes_name";




const CoffeeShopCoverScreen = (props: any) => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require("../../../assets/images/onboarding_5.jpg")}
                style={styles.backgroundImage}
            >
                <View style={styles.contentContainer}>
                    <AppText style={styles.title}>Coffee Bean</AppText>
                    <AppText style={styles.location}>Bali, Indonesia</AppText>
                    <View style={styles.ratingContainer}>
                        <AppText style={styles.ratingText}>1000+ people have explored</AppText>
                        <View style={styles.ratingImagesContainer}>
                            {[0, 1, 2, 3].map((data) => (
                                <Image
                                    key={data}
                                    style={[styles.ratingImage, { right: 15 * data }]}
                                    source={require(`../../../assets/images/cafe_4.jpg`)}
                                />
                            ))}
                        </View>
                    </View>
                    <View style={styles.separator} />
                    <AppText style={styles.description}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
                    </AppText>
                    <PrimaryButton onPress={() => {
                        props.navigation.navigate(RoutesName.shopDetailsScreen)
                    }} label={StringManager.seeMoreBtnTxt} />
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        padding: 15,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    title: {
        color: ColorManager.whiteColor,
        fontSize: 25,
    },
    location: {
        color: ColorManager.whiteColor,
        fontSize: 14,
        fontFamily: fontFamily.PlusJakartaLight,
    },
    ratingContainer: {
        flexDirection: 'row',
        paddingTop: 10,
        justifyContent: 'space-between',
    },
    ratingText: {
        color: ColorManager.whiteColor,
        fontSize: 12,
        fontFamily: fontFamily.PlusJakartaLight,
    },
    ratingImagesContainer: {
        flexDirection: 'row-reverse',
    },
    ratingImage: {
        width: 30,
        height: 30,
        borderRadius: 50,
        position: 'relative',
        zIndex: 0,
    },
    separator: {
        backgroundColor: ColorManager.whiteColor,
        height: 2.0,
        borderRadius: 5,
        marginVertical: 15,
    },
    description: {
        color: ColorManager.whiteColor,
        marginBottom: 10,
    },
});

export default CoffeeShopCoverScreen;
