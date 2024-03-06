import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { fontFamily } from '../resources/assets_manager';

const AppText = (props: any) => {
    const { style, ...otherProps } = props;
    return (
        <Text style={[styles.text, style]} {...otherProps}>
            {props.children}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontFamily: fontFamily.PlusJakartaRegular, // Set your desired font family here
    },
});

AppText.defaultProps = {
    style: {},
};

export default AppText;
