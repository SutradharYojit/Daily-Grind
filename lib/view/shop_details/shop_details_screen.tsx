import React, { PropsWithChildren } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppText from "../../components/primary_text";
import BackButton from '../../../assets/icons/left_arrow.svg';
import UnSaved from '../../../assets/icons/saved_outline.svg';
import Saved from '../../../assets/icons/saved_filled.svg';

import { SafeAreaView } from "react-native-safe-area-context";
import { ColorManager } from "../../resources/color_manager";
import { appStyles } from "../../resources/style";
import { fontFamily } from "../../resources/assets_manager";

type AppBarProps = PropsWithChildren<{
    title: string,
    nav: Function,
}>;

const ShopDetailsScreen = (props: any) => {
    const hide = require("../../../assets/icons/hide.png");

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: ColorManager.whiteColor,
        }}>
            <View style={{
                paddingHorizontal: 15,
                height: 55,
                flexDirection: 'row',
                backgroundColor: ColorManager.whiteColor,
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>

                <TouchableOpacity onPress={() => { }}>
                    <BackButton width={30} height={30}></BackButton>

                </TouchableOpacity>
                <Text
                    style={{
                        textAlignVertical: "center",
                        color: ColorManager.blackColor,
                        fontSize: 20,
                        fontWeight: '500',
                    }}>
                    Detail Place
                </Text>
                <TouchableOpacity onPress={() => { }}>
                    <UnSaved width={30} height={30}></UnSaved>
                </TouchableOpacity>

            </View>
            <View style={{ padding: 15 }}>
                <View style={{
                    borderRadius: 65,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: ColorManager.lightGreenColor
                }}>
                    <Image
                        source={require("../../../assets/images/cafe_2.jpg")}
                        style={{ width: "100%", height: 200, borderRadius: 25, }}>
                    </Image>
                </View>
                <View style={{ paddingVertical: 10 }}>
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
                </View>

            </View>

        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    title: {
        color: ColorManager.blackColor,
        fontSize: 25,
    },
    location: {
        color: ColorManager.greyColor,
        fontSize: 15,
        fontFamily: fontFamily.PlusJakartaLight,
    },
    ratingContainer: {
        flexDirection: 'row',
        paddingTop: 10,
        justifyContent: 'space-between',
    },
    ratingText: {
        color: ColorManager.greyColor,
        fontSize: 15,
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
});
export default ShopDetailsScreen;