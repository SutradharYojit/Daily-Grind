import React, { useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import AppText from "../../../components/primary_text";
import CreditCard from '../../../../assets/images/visa.svg'
import Bitcoin from '../../../../assets/images/bitcoin.svg'
import Paypal from '../../../../assets/images/paypal.svg'
import { appTheme } from "../../../resources/style";
import { RadioButton } from "react-native-paper";
import PrimaryTextFilled from "../../../components/primary_text_filled";
import { ColorManager } from "../../../resources/color_manager";
import { StringManager } from "../../../resources/string_manager";
import inputs from "../../../model/textfilled_input_model";
import completeProcess from "../../../model/complete_process";
import { RoutesName } from "../../../routes/routes_name";

const PaymentOption = (props: any) => {
    
    const paymentOptions = [
        { label: 'Credit Card', value: 'option1', icon: <CreditCard width={100} height={30} /> },
        { label: 'PayPal', value: 'option2', icon: <Paypal width={100} height={30} /> },
        { label: 'Bitcoin', value: 'option3', icon: <Bitcoin width={100} height={30} /> }
    ]
    const [selectedValue, setSelectedValue] = useState('option1');

    const textfilledInputs: inputs[] = [
        {
            id: 1,
            label: StringManager.cardNumTxt,
            keyboardType: "number-pad"
        },
        {
            id: 2,
            label: StringManager.cardHolTxt,
            keyboardType: "number-pad"
        },
        {
            id: 3,
            label: StringManager.expDateTxt,
            keyboardType: "number-pad"
        },
        {
            id: 4,
            label: StringManager.cvcTxt,
            keyboardType: "number-pad"
        }
    ];
    return (
        <View >
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
                                        {
                                            textfilledInputs.map((data) => <View style={{
                                                paddingBottom: 10,
                                            }}>
                                                <AppText style={appTheme.label}>
                                                    {data.label}
                                                </AppText>
                                                <PrimaryTextFilled
                                                    keyboardType={data.keyboardType}
                                                    placeholder={data.label}
                                                    onChangeText={(Text: string) => { }}
                                                    placeholderTextColor={ColorManager.greyColor}
                                                    style={[appTheme.textfilled, {
                                                        backgroundColor: ColorManager.lightrgbGreyColor,
                                                        borderColor: ColorManager.lightrgbGreyColor
                                                    }]}
                                                />
                                            </View>
                                            )
                                        }
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
    );
}

export default PaymentOption;

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