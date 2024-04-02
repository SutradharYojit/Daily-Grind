import React from "react";
import { Image, SafeAreaView, ScrollView, TouchableOpacity, View } from "react-native";
import { appTheme } from "../../resources/style";
import AppText from "../../components/primary_text";
import AppBar from "../../components/app_bar";
import { StringManager } from "../../resources/string_manager";
import OptionsIcon from '../../../assets/icons/options.svg';
import Timer from '../../../assets/icons/clock.svg';
import { ColorManager } from "../../resources/color_manager";
import ViewAllTile from "../../components/view_all";
import GiftCard from "../../components/gift_card";

const PromoScreen = (props: any) => {
    return (
        <SafeAreaView style={appTheme.whiteBackground}>
            <AppBar title={StringManager.promoTxt} nav={() => {
                props.navigation.goBack();
            }}>
                <TouchableOpacity onPress={() => { }}>
                    <OptionsIcon width={30} height={30} />
                </TouchableOpacity>
            </AppBar>
            <ScrollView>
                <View style={appTheme.container}>
                    <AppText style={{
                        color: ColorManager.blackColor,
                        fontSize: 18,
                        fontWeight: '700',
                    }}>{StringManager.hottestpromoTxt}
                    </AppText>
                    {
                        [0, 1, 2].map((data) =>
                            <GiftCard
                                key={data}
                                count="10/15"
                                countVisible={true}
                                title="Free 1 Coffee"
                                subtitle="But 10 Coffees and get 1 Coffee for free"
                                expTime="Ends in 12 hours"
                            />
                        )
                    }
                    <ViewAllTile title={StringManager.recomendPromoTxt} onPress={() => {

                    }}></ViewAllTile>
                    {
                        [0, 1, 2, 3].map((data) => <GiftCard
                            key={data}
                            count="9/15"
                            countVisible={true}
                            title="Free 1 Coffee"
                            subtitle="But 10 Coffees and get 1 Coffee for free"
                            expTime="Ends in 2 hours"
                        />

                        )
                    }

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default PromoScreen;


