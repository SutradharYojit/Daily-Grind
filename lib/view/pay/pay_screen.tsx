import React, { useState } from "react";
import AppBar from "../../components/app_bar";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { StringManager } from "../../resources/string_manager";
import OptionsIcon from "../../../assets/icons/options.svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { appStyles } from "../../resources/style";
import AppText from "../../components/primary_text";
import { ColorManager } from "../../resources/color_manager";
import PrimaryButton from "../../components/buttons/primary_button";
import CrossWhite from '../../../assets/icons/select_cross.svg'
import CrossBlack from '../../../assets/icons/cross.svg'
import PrimaryTextFilled from "../../components/primary_text_filled";
import { RadioButton } from 'react-native-paper';

const PayScreen = (props: any) => {
    const sendPaymentUser = [0, 1, 2,];
    const [userList, addUser] = useState([0])
    const nominalAmount = [50000, 100000, 150000, 200000];
    const [amount, setAmount] = useState([0])
    const [selectedValue, setSelectedValue] = useState('option1');


    return (
        <SafeAreaView style={appStyles.whiteBackground}>
            <AppBar title={StringManager.payTxt} nav={() => {
                props.navigation.goBack();
            }}>
                <TouchableOpacity onPress={() => { }}>
                    <OptionsIcon width={30} height={30} />
                </TouchableOpacity>
            </AppBar>
            <View style={{
                padding: 15,
                flex: 1
            }}>
                <AppText style={{
                    fontSize: 18,
                    color: ColorManager.blackColor,
                    fontWeight: '700'
                }}>
                    Send Payment to:
                </AppText>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>

                    <FlatList
                        numColumns={2}
                        data={sendPaymentUser}
                        renderItem={(data) =>
                            <TouchableOpacity onPress={() => {
                                userList.length = 0;
                                addUser([...userList, data.item])
                            }}>
                                <View style={{
                                    backgroundColor: userList.includes(data.item) ? ColorManager.greenColor : ColorManager.whiteColor,
                                    padding: 8,
                                    borderRadius: 18,
                                    marginHorizontal: 8,
                                    marginVertical: 5,
                                    width: 175,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-around',
                                    borderColor: ColorManager.greenColor,
                                    borderWidth: 0.7
                                }}>
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
                                            source={require("../../../assets/images/person_1.jpg")}
                                            style={{ width: 35, height: 35, }}>
                                        </Image>
                                    </View>
                                    <AppText style={{
                                        fontSize: 20,
                                        color: userList.includes(data.item) ? ColorManager.whiteColor : ColorManager.blackColor
                                    }}>
                                        Yojit
                                    </AppText>
                                    <TouchableOpacity onPress={() => { }}>
                                        {
                                            userList.includes(data.item) ? <CrossWhite width={35} height={35}></CrossWhite> : <CrossBlack width={35} height={35}></CrossBlack>
                                        }
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        }>

                    </FlatList>
                </View>

                <View style={{ paddingVertical: 15 }}>
                    <AppText style={appStyles.label}>{
                        StringManager.enterPhoneTxt}
                    </AppText>
                    <PrimaryTextFilled
                        keyboardType="number-pad"
                        placeholder={StringManager.phoneExmTxt}
                        onChangeText={(Text) => { }}
                        placeholderTextColor={ColorManager.greyColor}
                        style={appStyles.textfilled}
                    ></PrimaryTextFilled>
                </View>

                <AppText style={{
                    fontSize: 18,
                    color: ColorManager.blackColor,
                    fontWeight: '700'
                }}>
                    Chooose Nominal Payment
                </AppText>

                <View>
                    <FlatList
                        numColumns={2}
                        data={nominalAmount}
                        renderItem={(data) =>
                            <TouchableOpacity onPress={() => {
                                amount.length = 0;
                                setAmount([...amount, data.item])
                            }}>
                                <View
                                    style={{
                                        backgroundColor: amount.includes(data.item) ? ColorManager.greenColor : ColorManager.whiteColor,
                                        padding: 8,
                                        borderRadius: 18,
                                        marginHorizontal: 8,
                                        marginVertical: 5,
                                        width: 140,
                                        alignItems: 'center',
                                        borderColor: ColorManager.greenColor,
                                        borderWidth: 0.7
                                    }}>
                                    <AppText style={{
                                        fontSize: 16,
                                        color: amount.includes(data.item) ? ColorManager.whiteColor : ColorManager.blackColor,
                                    }}>
                                        IDR {data.item}
                                    </AppText>
                                </View>
                            </TouchableOpacity>
                        }>
                    </FlatList>
                </View>

                <View style={{ paddingVertical: 15 }}>
                    <AppText style={appStyles.label}>{
                        StringManager.enterNominalTxt}
                    </AppText>
                    <PrimaryTextFilled
                        keyboardType="number-pad"
                        placeholder={StringManager.nominalAmountExmTxt}
                        onChangeText={(Text) => { }}
                        placeholderTextColor={ColorManager.greyColor}
                        style={appStyles.textfilled}
                    ></PrimaryTextFilled>
                </View>
                <AppText style={{
                    fontSize: 18,
                    color: ColorManager.blackColor,
                    fontWeight: '700'
                }}>
                    Chooose Payment Method
                </AppText>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <RadioButton.Android
                        value="option1"
                        status={selectedValue === 'option1' ?
                            'checked' : 'unchecked'}
                        onPress={() => { }}
                        color="#007BFF"
                    />
                    <Text style={{
                        marginLeft: 8,
                        fontSize: 16,
                        color: '#333',
                    }}>
                        ReactJS
                    </Text>
                </View>

            </View >
            <View style={{
                padding: 15,
            }}>
                <PrimaryButton onPress={() => {
                }}
                    label={StringManager.payNowBtnTxt}>
                </PrimaryButton>
            </View>
        </SafeAreaView >
    );
}

export default PayScreen;