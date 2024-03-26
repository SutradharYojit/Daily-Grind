import React, { useState } from "react";
import {
    FlatList,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";
import { appTheme } from "../../resources/style";
import AppText from "../../components/primary_text";
import AppBar from "../../components/app_bar";
import { StringManager } from "../../resources/string_manager";
import OptionsIcon from '../../../assets/icons/options.svg';
import { ColorManager } from "../../resources/color_manager";
import PrimaryTextFilled from "../../components/primary_text_filled";
import CreditCard from '../../../assets/images/visa.svg'
import Bitcoin from '../../../assets/images/bitcoin.svg'
import Paypal from '../../../assets/images/paypal.svg'
import { RadioButton } from "react-native-paper";
import PrimaryButton from "../../components/buttons/primary_button";

const TopUpScreen = (props: any) => {
    const nominalAmount = [50000, 100000, 150000, 200000];
    const [amount, setAmount] = useState([0])

    const toggleAmount = (item: number) => {
        amount.length = 0;
        setAmount([...amount, item])
    }
    const [selectedValue, setSelectedValue] = useState('option1');

    const paymentOptions = [
        { label: 'Credit Card', value: 'option1', icon: <CreditCard width={100} height={30} /> },
        { label: 'PayPal', value: 'option2', icon: <Paypal width={100} height={30} /> },
        { label: 'Bitcoin', value: 'option3', icon: <Bitcoin width={100} height={30} /> }
    ]

    return (
        <SafeAreaView style={appTheme.whiteBackground}>
            <AppBar title={StringManager.topUpTxt} nav={() => {
                props.navigation.goBack();
            }}>
                <TouchableOpacity onPress={() => { }}>
                    <OptionsIcon width={30} height={30} />
                </TouchableOpacity>
            </AppBar>
            <ScrollView>
                <View style={appTheme.container}>
                    <View>
                        <AppText style={appTheme.sectionTitle}>
                            {StringManager.choosenominalPayTxt}
                        </AppText>
                        <FlatList
                            numColumns={2}
                            data={nominalAmount}
                            renderItem={(data) => (
                                <TouchableOpacity onPress={() => toggleAmount(data.item)}>
                                    <View style={[
                                        appStyles.amountItem,
                                        {
                                            backgroundColor: amount.includes(data.item) ?
                                                ColorManager.greenColor :
                                                ColorManager.whiteColor
                                        }
                                    ]}>
                                        <AppText style={[
                                            appStyles.amountText,
                                            {
                                                color: amount.includes(data.item) ?
                                                    ColorManager.whiteColor :
                                                    ColorManager.blackColor
                                            }
                                        ]}>
                                            IDR {data.item}
                                        </AppText>
                                    </View>
                                </TouchableOpacity>
                            )} />
                        <View style={appStyles.inputContainer}>
                            <AppText style={appTheme.label}>
                                {StringManager.enterNominalTxt}
                            </AppText>
                            <PrimaryTextFilled
                                keyboardType="number-pad"
                                placeholder={StringManager.nominalAmountExmTxt}
                                onChangeText={(Text: string) => { }}
                                placeholderTextColor={ColorManager.greyColor}
                                style={appTheme.textfilled}
                            />
                        </View>
                    </View>
                    <View>
                        <AppText style={appTheme.sectionTitle}>
                            {StringManager.choosePaymentTxt}
                        </AppText>
                        {
                            paymentOptions.map((method) => (
                                <TouchableWithoutFeedback onPress={() => {
                                    setSelectedValue(method.value)
                                    console.log("method " + method.value)
                                    console.log("selected " + selectedValue)
                                }}>
                                    <View style={{
                                        borderColor: ColorManager.greyColor,
                                        borderRadius: 10,
                                        borderWidth: 0.7,
                                        marginVertical: 6,
                                        padding: 13,
                                    }}>
                                        <View key={method.value} style={[
                                            appStyles.methodContainer, {
                                                maxHeight: method.value == 'option1' ? 400 : null
                                            }]}>
                                            <View style={appStyles.methodText}>
                                                <RadioButton.Android
                                                    value={method.value}
                                                    status={selectedValue === method.value ? 'checked' : 'unchecked'}
                                                    onPress={() => setSelectedValue(method.value)}
                                                    color="#007BFF"
                                                />
                                                <AppText style={appStyles.methodLabel}>
                                                    {method.label}
                                                </AppText>
                                            </View>
                                            {method.icon}
                                        </View>
                                        {
                                            selectedValue === method.value ?
                                                method.value == 'option1' &&
                                                <View>
                                                    <View style={appStyles.inputContainer}>
                                                        <AppText style={appTheme.label}>
                                                            {StringManager.cardNumTxt}
                                                        </AppText>
                                                        <PrimaryTextFilled
                                                            keyboardType="number-pad"
                                                            placeholder={StringManager.cardNumTxt}
                                                            onChangeText={(Text: string) => { }}
                                                            placeholderTextColor={ColorManager.greyColor}
                                                            style={[appTheme.textfilled, { backgroundColor: ColorManager.lightrgbGreyColor }]}
                                                        />
                                                    </View>
                                                    <View style={appStyles.inputContainer}>
                                                        <AppText style={appTheme.label}>
                                                            {StringManager.cardHolTxt}
                                                        </AppText>
                                                        <PrimaryTextFilled
                                                            keyboardType="number-pad"
                                                            placeholder={StringManager.cardHolTxt}
                                                            onChangeText={(Text: string) => { }}
                                                            placeholderTextColor={ColorManager.greyColor}
                                                            style={[appTheme.textfilled, { backgroundColor: ColorManager.lightrgbGreyColor }]}
                                                        />
                                                    </View>
                                                    <View style={appStyles.inputContainer}>
                                                        <AppText style={appTheme.label}>
                                                            {StringManager.expDateTxt}
                                                        </AppText>
                                                        <PrimaryTextFilled
                                                            keyboardType="number-pad"
                                                            placeholder={StringManager.expDateTxt}
                                                            onChangeText={(Text: string) => { }}
                                                            placeholderTextColor={ColorManager.greyColor}
                                                            style={[appTheme.textfilled, { backgroundColor: ColorManager.lightrgbGreyColor }]}
                                                        />
                                                    </View>
                                                    <View style={appStyles.inputContainer}>
                                                        <AppText style={appTheme.label}>
                                                            {StringManager.cvcTxt}
                                                        </AppText>
                                                        <PrimaryTextFilled
                                                            keyboardType="number-pad"
                                                            placeholder={StringManager.cvcTxt}
                                                            onChangeText={(Text: string) => { }}
                                                            placeholderTextColor={ColorManager.greyColor}
                                                            style={[appTheme.textfilled, { backgroundColor: ColorManager.lightrgbGreyColor }]}
                                                        />
                                                    </View>
                                                </View> :
                                                <View>

                                                </View>
                                        }
                                    </View>
                                </TouchableWithoutFeedback  >
                            )
                            )
                        }
                    </View>
                </View>
            </ScrollView>
            <View style={appTheme.bottomButtonContainer}>
                <PrimaryButton
                    onPress={() => { }}
                    label={StringManager.payNowBtnTxt}
                />
            </View>
        </SafeAreaView>
    );
}

export default TopUpScreen;


const appStyles = StyleSheet.create({
    inputContainer: {
        paddingVertical: 15
    },
    amountItem: {
        backgroundColor: ColorManager.whiteColor,
        padding: 8,
        borderRadius: 18,
        marginHorizontal: 8,
        marginVertical: 5,
        width: 140,
        alignItems: 'center',
        borderColor: ColorManager.greyColor,
        borderWidth: 0.7
    },
    amountText: {
        fontSize: 16,
    },
    methodContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    methodText: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    methodLabel: {
        fontSize: 18,
        color: ColorManager.blackColor,
        fontWeight: '700',
        marginLeft: 10
    },
});