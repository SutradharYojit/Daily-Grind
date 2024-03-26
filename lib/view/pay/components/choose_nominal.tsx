import React, { useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import AppText from "../../../components/primary_text";
import { ColorManager } from "../../../resources/color_manager";
import { StringManager } from "../../../resources/string_manager";
import PrimaryTextFilled from "../../../components/primary_text_filled";
import { appTheme } from "../../../resources/style";

const ChooseNominal = (props: any) => {
    const nominalAmount = [50000, 100000, 150000, 200000];
    const [amount, setAmount] = useState([0])

    const toggleAmount = (item: number) => {
        amount.length = 0;
        setAmount([...amount, item])
    }

    return (
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
                )}
            />
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
    );
};

export default ChooseNominal;

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
});