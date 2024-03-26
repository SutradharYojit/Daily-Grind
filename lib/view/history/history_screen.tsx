import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppBar from "../../components/app_bar";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import OptionsIcon from "../../../assets/icons/options.svg";
import { appTheme } from "../../resources/style";
import AppText from "../../components/primary_text";
import { fontFamily } from "../../resources/assets_manager";
import { ColorManager } from "../../resources/color_manager";
import MoneyReceiveIcon from "../../../assets/icons/money_recive.svg";
import MoneySendIcon from "../../../assets/icons/mony_send.svg";
import { StringManager } from "../../resources/string_manager";

const HistoryScreen = (props: any) => {
    const coffeePurchase = [
        {
            id: 1,
            buyCoffee: "Vanilla Sweet Cream",
            topUp: false,
            price: 250.00
        },
        {
            id: 2,
            buyCoffee: "",
            topUp: true,
            price: 100.00
        },
        {
            id: 3,
            buyCoffee: "Salted Caramel Latte",
            topUp: false,
            price: 250.00
        },
        {
            id: 4,
            buyCoffee: "Caramel Macchiato",
            topUp: false,
            price: 200.00
        },
        {
            id: 5,
            buyCoffee: "",
            topUp: true,
            price: 175.00
        },
    ];


    return (
        <SafeAreaView style={appTheme.whiteBackground}>
            <AppBar title={StringManager.historyTxt} nav={() => { props.navigation.goBack(); }}>
                <TouchableOpacity onPress={() => { }}>
                    <OptionsIcon width={30} height={30} />
                </TouchableOpacity>
            </AppBar>
            <View style={{ padding: 15 }}>
                <AppText style={styles.title}>Recent activity</AppText>
                {
                    coffeePurchase.map((data) => <TransactionCard key={data.id} topUp={data.topUp} buyCoffee={data.buyCoffee} price={data.price}></TransactionCard>)
                }
            </View>
        </SafeAreaView >
    );
};

const TransactionCard = ({ buyCoffee, topUp, price }:
    { buyCoffee: string; topUp: boolean; price: number; }) => {
    return (
        <View style={styles.transactionCard}>
            <View style={[styles.iconContainer, { backgroundColor: topUp ? ColorManager.greenColor : ColorManager.redColor }]}>
                {!topUp ? <MoneySendIcon width={30} height={30} /> : <MoneyReceiveIcon width={30} height={30} />}
            </View>
            <View style={styles.textContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <AppText style={styles.title}>{topUp ? `${StringManager.topUpIdrTxt}${price}` : buyCoffee}</AppText>
                    <AppText style={{
                        color: ColorManager.greyColor,
                        fontSize: 16
                    }}>{topUp ? "" : `-IDR ${price}`}</AppText>
                </View>
                <AppText style={styles.description}>{topUp ? StringManager.topUpCongTxt : StringManager.buyCoffeeCongTxt}</AppText>
                <AppText style={styles.date}>22 July 2022, 10.30AM</AppText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 17,
        fontFamily: fontFamily.PlusJakartaBold,
        color: ColorManager.blackColor,
    },
    transactionCard: {
        flexDirection: 'row',
        borderRadius: 15,
        padding: 10,
        backgroundColor: ColorManager.whiteColor,
        borderColor: ColorManager.greyColor,
        borderWidth: 0.7,
        marginTop: 10,
    },
    iconContainer: {
        borderRadius: 65,
        height: 50,
        width: 50,
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
    },
    description: {
        fontSize: 16,
        color: ColorManager.greyColor,
        maxWidth: "90%",
    },
    date: {
        fontSize: 15,
        color: ColorManager.lightGreyColor,
    }
});

export default HistoryScreen;
