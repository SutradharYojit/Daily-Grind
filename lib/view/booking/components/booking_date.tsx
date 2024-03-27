import React, { useState } from "react";
import { View } from "react-native";
import AppText from "../../../components/primary_text";
import DropdownComponent from "../../../components/dropdown";
import { StringManager } from "../../../resources/string_manager";

const BookingData = (props: any) => {
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
    const [value, setValue] = useState('');

    return (
        <View  >
            <AppText>
                {StringManager.participantsTxt}
            </AppText>
            <View style={{
                marginVertical: 8
            }}>
                <DropdownComponent
                    data={data}
                    value={value}
                    placeholder={StringManager.participantsTxt}>
                </DropdownComponent>
            </View>
            <AppText>
                {StringManager.timeTxt}
            </AppText>
            <View style={{
                marginVertical: 8
            }}>
                <DropdownComponent
                    data={data}
                    value={value}
                    placeholder={StringManager.timeTxt}>
                </DropdownComponent>
            </View>
            <AppText>
                {StringManager.durationTxt}
            </AppText>
            <View style={{
                marginVertical: 8
            }}>
                <DropdownComponent
                    data={data}
                    value={value}
                    placeholder={StringManager.durationTxt}>
                </DropdownComponent>
            </View>
            <AppText>
                {StringManager.dateTxt}
            </AppText>
            <View style={{
                marginVertical: 8
            }}>
                <DropdownComponent
                    data={data}
                    value={value}
                    placeholder={StringManager.dateTxt}>
                </DropdownComponent>
            </View>
        </View>
    );
};

export default BookingData;