import { StyleSheet, View } from "react-native";
import { ColorManager } from "../resources/color_manager";
import React from "react";
import { Dropdown } from "react-native-element-dropdown";
import { DropdownProps } from "react-native-element-dropdown/lib/typescript/components/Dropdown/model";

type DropdownOptions = {
    data: any,
    value: any,
    placeholder: string
    onChange?: (item: any) => void
}

const DropdownComponent = (props: DropdownOptions) => {

    return (
        <View style={styles.container}>
            <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                iconStyle={styles.iconStyle}
                data={props.data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={props.placeholder}
                value={props.value}
                onChange={(item) => {
                    // setValue(item.value);
                    // console.log(item.value);

                }}
            />
        </View>
    );
}

export default DropdownComponent;


const styles = StyleSheet.create({
    container: {
        backgroundColor: ColorManager.lightrgbGreyColor,
        borderRadius: 10,
    },
    dropdown: {
        height: 60,
        borderColor: ColorManager.lightrgbGreyColor,
        borderWidth: 0.7,
        borderRadius: 10,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});