import React from "react";
import { StyleProp, TextInput, TextStyle } from "react-native";

type textFilledProps = {
    placeholderTextColor: string;
    style: StyleProp<TextStyle>;
    onChangeText: (Text: string) => void;
    placeholder: string;
    secureTextEntry?: boolean;
}

const PrimaryTextFilled = (props: textFilledProps) => {
    return (
        <TextInput
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