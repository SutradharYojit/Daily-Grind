import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../../../components/primary_text";
import { RadioButton } from "react-native-paper";
import { ColorManager } from "../../../resources/color_manager";
import CreditCard from '../../../../assets/images/visa.svg'
import Bitcoin from '../../../../assets/images/bitcoin.svg'
import Paypal from '../../../../assets/images/paypal.svg'
import { StringManager } from "../../../resources/string_manager";
import { appTheme } from "../../../resources/style";

const PaymentMethod = (props: any) => {
    const [selectedValue, setSelectedValue] = useState('option1');

    const paymentOptions = [
        { label: 'Credit Card', value: 'option1', icon: <CreditCard width={100} height={30} /> },
        { label: 'PayPal', value: 'option2', icon: <Paypal width={100} height={30} /> },
        { label: 'Bitcoin', value: 'option3', icon: <Bitcoin width={100} height={30} /> }
    ]
    return (
        <View>
            <AppText style={appTheme.sectionTitle}>
                {StringManager.choosePaymentTxt}
            </AppText>
            {
                paymentOptions.map((method) => (
                    <View key={method.value} style={appStyles.methodContainer}>
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
                ))
            }
        </View>
    );
}

export default PaymentMethod;

const appStyles = StyleSheet.create({
    
    methodContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: ColorManager.greyColor,
        borderRadius: 10,
        borderWidth: 0.7,
        marginVertical: 6,
        padding: 13,
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