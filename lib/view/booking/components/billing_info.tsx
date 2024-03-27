import React from "react";
import { KeyboardTypeOptions, View } from "react-native";
import { StringManager } from "../../../resources/string_manager";
import AppText from "../../../components/primary_text";
import { appTheme } from "../../../resources/style";
import PrimaryTextFilled from "../../../components/primary_text_filled";
import { ColorManager } from "../../../resources/color_manager";

interface inputs {
    id: number,
    label: string
    keyboardType: KeyboardTypeOptions
}

const BillingInfo = () => {
    const textfilledInputs: inputs[] = [
        {
            id: 1,
            label: StringManager.nameTxt,
            keyboardType: "number-pad"
        },
        {
            id: 2,
            label: StringManager.phoneNumTxt,
            keyboardType: "number-pad"
        },
        {
            id: 3,
            label: StringManager.addressTxt,
            keyboardType: "default"
        }
    ];

    return (
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
        </View>
    );
}



export default BillingInfo;