import React, { useState } from "react";
import { KeyboardTypeOptions, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { appTheme } from "../../resources/style";
import AppText from "../../components/primary_text";
import AppBar from "../../components/app_bar";
import { StringManager } from "../../resources/string_manager";
import OptionsIcon from '../../../assets/icons/options.svg';
import { ColorManager } from "../../resources/color_manager";
import PrimaryButton from "../../components/buttons/primary_button";
import BillingInfo from "./components/billing_info";
import BookingData from "./components/booking_date";

interface inputs {
    id: number,
    label: string
    keyboardType: KeyboardTypeOptions
}

const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
];

const BookingScreen = (props: any) => {
    let [count, setCount] = useState<number>(1);

    const renderElement = () => {
        if (count == 1) {
            return <BillingInfo></BillingInfo>;
        }
        else if (count == 2) {
            return <BookingData></BookingData>;
        }
        return null;
    }


    return (
        <SafeAreaView style={appTheme.whiteBackground}>
            <AppBar title={StringManager.bookingTxt} nav={() => {
                props.navigation.goBack();
            }}>
                <TouchableOpacity onPress={() => { }}>
                    <OptionsIcon width={30} height={30} />
                </TouchableOpacity>
            </AppBar>
            <View style={appTheme.container}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <View>
                        <AppText style={{
                            color: ColorManager.blackColor,
                            fontSize: 27,
                            fontWeight: '700',
                        }}>
                            Billing Info
                        </AppText>
                        <AppText style={{
                            color: ColorManager.greyColor,
                            fontSize: 15,
                        }}>
                            Please Enter your billing info
                        </AppText>
                    </View>
                    <AppText>
                        Step {count} of 3
                    </AppText>
                </View>
                <View style={{
                    padding: 15,
                    marginTop: 10,
                    borderColor: ColorManager.greyColor,
                    borderWidth: 0.7,
                    borderRadius: 15
                }}>
                    {
                        renderElement()
                    }
                </View>
            </View>
            <View style={appTheme.bottomButtonContainer}>
                <PrimaryButton
                    onPress={() => {
                        count = count + 1;
                        setCount(count);
                    }}
                    label={StringManager.nextBtnTxt}
                />
            </View>
        </SafeAreaView>
    );
}

export default BookingScreen;