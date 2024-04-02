import { Image, View } from "react-native"
import AppText from "./primary_text"
import React from "react"
import { ColorManager } from "../resources/color_manager"
import Timer from '../../assets/icons/clock.svg';

type GiftCardProps = {
    title: string,
    subtitle: string,
    expTime: string,
    count: string,
    countVisible: boolean
}

const GiftCard = (props: GiftCardProps) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                borderRadius: 15,
                padding: 19,
                marginTop: 8,
                backgroundColor: ColorManager.whiteColor,
                borderColor: ColorManager.greyColor,
                borderWidth: 0.5,
            }}>
            <View style={{
                borderRadius: 65,
                height: 60,
                width: 60,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: ColorManager.lightGreenColor,
            }}>
                <Image source={require("../../assets/images/takeaway-cup.png")}
                    style={{ width: 50, height: 50, }}>
                </Image>
            </View>
            <View style={{
                paddingLeft: 15,
            }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <AppText style={{
                        fontSize: 18,
                        color: ColorManager.blackColor,
                        fontWeight: '700'
                    }}>
                        {props.title}
                    </AppText>
                    {
                        props.countVisible ? <AppText style={{
                            fontSize: 16,
                            color: ColorManager.blackColor,
                            fontWeight: '700'
                        }}>
                            {props.count}
                        </AppText> : <View />
                    }
                </View>
                <AppText style={{
                    fontSize: 14,
                    color: ColorManager.greyColor,
                }}>
                    {props.subtitle}
                </AppText>
                <View style={{
                    flexDirection: 'row',
                    paddingTop: 5
                }}>
                    <Timer width={22} height={22}></Timer>
                    <AppText style={{
                        fontSize: 16,
                        color: ColorManager.redColor,
                        paddingLeft: 8,
                    }}>{props.expTime}
                    </AppText>
                </View>
            </View>
        </View>
    )
}


export default GiftCard;