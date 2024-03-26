import React, { useState } from "react";
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import AppText from "../../../components/primary_text";
import { StringManager } from "../../../resources/string_manager";
import PrimaryTextFilled from "../../../components/primary_text_filled";
import { ColorManager } from "../../../resources/color_manager";
import { appTheme } from "../../../resources/style";
import CrossWhite from '../../../../assets/icons/select_cross.svg'
import CrossBlack from '../../../../assets/icons/cross.svg'

const SendPayment = (props: any) => {

    const [userList, addUser] = useState([0]);
    const sendPaymentUser = [0, 1, 2];
    const toggleUser = (item: number) => {
        userList.length = 0;
        addUser([...userList, item])
    }
    return (
        <View>
            <AppText style={appTheme.sectionTitle}>
                {StringManager.sendPaymentTxt}
            </AppText>
            <FlatList
                numColumns={2}
                data={sendPaymentUser}
                renderItem={(data) => (
                    <TouchableOpacity onPress={() => toggleUser(data.item)}>
                        <View style={[
                            appStyles.userItem,
                            {
                                backgroundColor: userList.includes(data.item) ?
                                    ColorManager.greenColor :
                                    ColorManager.whiteColor,
                            }
                        ]}>
                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: 40,
                                height: 40,
                                borderRadius: 26,
                                backgroundColor: ColorManager.whiteColor
                            }}>
                                <Image
                                    borderRadius={50}
                                    source={require("../../../../assets/images/person_1.jpg")}
                                    style={{ width: 35, height: 35, }}
                                >
                                </Image>
                            </View>
                            <AppText style={
                                [appStyles.userName,
                                {
                                    color: userList.includes(data.item) ?
                                        ColorManager.whiteColor :
                                        ColorManager.blackColor
                                }]}>
                                Yojit
                            </AppText>
                            <TouchableOpacity>
                                {
                                    userList.includes(data.item) ?
                                        <CrossWhite width={35} height={35}></CrossWhite> :
                                        <CrossBlack width={35} height={35}></CrossBlack>
                                }
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                )}
            />
            <View style={appStyles.inputContainer}>
                <AppText style={appTheme.label}>
                    {StringManager.enterPhoneTxt}
                </AppText>
                <PrimaryTextFilled
                    keyboardType="number-pad"
                    placeholder={StringManager.phoneExmTxt}
                    onChangeText={(Text: string) => { }}
                    placeholderTextColor={ColorManager.greyColor}
                    style={appTheme.textfilled}
                />
            </View>
        </View>
    );
}


export default SendPayment;


const appStyles = StyleSheet.create({
    userItem: {
        backgroundColor: ColorManager.whiteColor,
        padding: 8,
        borderRadius: 18,
        marginHorizontal: 8,
        marginVertical: 5,
        width: 175,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderColor: ColorManager.greyColor,
        borderWidth: 0.7
    },
    userName: {
        fontSize: 20,
    },
    inputContainer: {
        paddingVertical: 15
    },
});