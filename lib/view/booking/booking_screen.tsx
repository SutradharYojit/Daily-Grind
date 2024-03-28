import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
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
import PaymentOption from "./components/payment_option";
import { RoutesName } from "../../routes/routes_name";
import completeProcess from "../../model/complete_process";

const BookingScreen = (props: any) => {
    let [count, setCount] = useState<number>(1);
    const header = [
        { id: 1, title: 'Billing Info', subtitle: 'Please enter your billing info' },
        { id: 2, title: 'Booking Info', subtitle: 'Please select your booking date' },
        { id: 3, title: 'Payment Info', subtitle: 'Please enter payment method' },
    ];
    const data: completeProcess = {
        title: StringManager.successBookedCafeTxt,
        subtitle: StringManager.agreedDateTxt,
        btnTitle: StringManager.goToHomeBtnTxt,
        onPress: (() => {
            props.navigation.replace(RoutesName.dashboardScreen)
        })
    };

    const renderElement = () => {
        if (count == 1) {
            return <BillingInfo></BillingInfo>;
        }
        else if (count == 2) {
            return <BookingData></BookingData>;
        }
        else if (count == 3) {
            return <PaymentOption></PaymentOption>;
        }
        return null;
    }

    return (
        <SafeAreaView style={appTheme.whiteBackground}>
            <AppBar title={StringManager.bookingTxt} nav={() => {
                if (count == 1) {
                    props.navigation.goBack();
                } else {
                    setCount(count - 1);
                }
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
                            {header[count - 1].title}
                        </AppText>
                        <AppText style={{
                            color: ColorManager.greyColor,
                            fontSize: 15,
                        }}>
                            {header[count - 1].subtitle}
                        </AppText>
                    </View>
                    <AppText>
                        Step {count} of 3
                    </AppText>
                </View>
                <View style={{
                    padding: count == 3 ? 0 : 15,
                    marginTop: 10,
                    borderColor: ColorManager.greyColor,
                    borderWidth: count == 3 ? 0 : 0.7,
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
                        if (count == 3) {
                            props.navigation.replace(RoutesName.completeAuthScreen, { "successData": data })
                        }
                        else {
                            count = count + 1;
                            setCount(count);
                        }

                    }}
                    label={count == 3 ? StringManager.bookNowBtnTxt : StringManager.nextBtnTxt}
                />
            </View>
        </SafeAreaView>
    );
}
export default BookingScreen;