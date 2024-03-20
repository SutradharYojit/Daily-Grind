import React from "react";
import { KeyboardTypeOptions, StyleProp, TextInput, TextStyle } from "react-native";

type textFilledProps = {
    placeholderTextColor: string;
    style: StyleProp<TextStyle>;
    onChangeText: (Text: string) => void;
    placeholder: string;
    secureTextEntry?: boolean;
    keyboardType?: KeyboardTypeOptions
}

const PrimaryTextFilled = (props: textFilledProps) => {
    return (
        <TextInput
            keyboardType={props.keyboardType ?? "default"}
            secureTextEntry={props.secureTextEntry == null ? false : props.secureTextEntry}
            placeholderTextColor={props.placeholderTextColor}
            style={props.style}
            onChangeText={props.onChangeText}
            placeholder={props.placeholder}
        >
        </TextInput >
    );
}

export default PrimaryTextFilled;