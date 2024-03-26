import React from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import AppText from "../../../components/primary_text";
import { ColorManager } from "../../../resources/color_manager";


const CoffeeShopTab = (props: any) => {
    const coffeeMenu = [
        {
            id: 1,
            name: "Vanilla Sweet Cream",
            image: require("../../../../assets/images/coffe_1.png"),
            price: 250.00
        },
        {
            id: 2,
            name: "Salted Caramel Latte",
            image: require("../../../../assets/images/coffe_2.png"),
            price: 100.00
        },
        {
            id: 3,
            name: "Salted Caramel Latte",
            image: require("../../../../assets/images/coffe_3.png"),
            price: 250.00
        },
        {
            id: 4,
            name: "Caramel Macchiato",
            image: require("../../../../assets/images/coffe_4.png"),
            price: 200.00
        },
        {
            id: 5,
            name: "Mocha Frappuccino",
            image: require("../../../../assets/images/coffe_5.png"),
            price: 175.00
        },
    ];

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            {
                coffeeMenu.map((data) => (
                    <View key={data.id} style={styles.menuItem}>
                        <View style={styles.imageContainer}>
                            <Image source={data.image} style={styles.image} />
                        </View>
                        <View style={styles.textContainer}>
                            <AppText style={styles.name}>{data.name}</AppText>
                            <AppText style={styles.price}>IDR {data.price}</AppText>
                        </View>
                    </View>
                )
                )
            }
        </ScrollView>
    );
};

const styles = StyleSheet.create({

    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15,
        padding: 18,
        backgroundColor: ColorManager.whiteColor,
        borderColor: ColorManager.greyColor,
        borderWidth: 0.7,
        marginTop: 10,
    },
    imageContainer: {
        borderRadius: 65,
        height: 70,
        width: 70,
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: ColorManager.lightGreenColor,
    },
    image: {
        width: 55,
        height: 55,
    },
    textContainer: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        color: ColorManager.greyColor,
    },
    price: {
        fontSize: 18,
        paddingTop: 10,
        fontWeight: '700',
        color: ColorManager.blackColor,
    },
});

export default CoffeeShopTab;
