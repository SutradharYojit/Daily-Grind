import React from "react";
import { Image, StyleSheet, View } from "react-native";
import AppText from "../../../components/primary_text";
import { ColorManager } from "../../../resources/color_manager";

const DetailCaffeTab = () => {
    return (
        <View>
            <View style={styles.capacityContainer}>
                <AppText>
                    Capacity
                </AppText>
                <View style={styles.capacityText}>
                    <AppText style={{
                        color: ColorManager.whiteColor,
                        textAlign: 'center',
                        fontSize: 15
                    }}>
                        7 Remaining
                    </AppText>
                </View>
            </View>
            <AppText style={styles.descriptionTitle}>
                Description
            </AppText>
            <AppText style={styles.descriptionText}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy teLorem Ipsum has been the industry's standard dummy text ever since the 1500sxt ever since the 1500s, when an unknown printer took a galley of type and scrambled it
            </AppText>

            <View style={styles.reviewContainer}>
                <AppText style={styles.reviewTitle}>
                    Review
                </AppText>
                <View style={styles.reviewCountContainer}>
                    <AppText style={styles.reviewCountText}>
                        13
                    </AppText>
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                paddingTop: 13,
            }}>
                <Image
                    style={styles.reviewerImage}
                    source={require(`../../../../assets/images/person_1.jpg`)}
                />

                <View style={styles.reviewerInfoContainer}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <View>
                            <AppText style={styles.reviewerName}>
                                Alex Stanton
                            </AppText>
                            <AppText style={styles.reviewerPosition}>
                                CEO at Amazon
                            </AppText>
                        </View>
                        <View >
                            <AppText style={styles.reviewDate}>
                                21 July 2022
                            </AppText>
                            <View style={{
                                flexDirection: 'row-reverse',
                                alignItems: 'center',
                                paddingTop: 8
                            }}>
                                {
                                    [1, 2, 3, 4, 5].map((data) => <Image
                                        key={data}
                                        source={require("../../../../assets/icons/gold_start.png")}
                                        style={styles.starImage}
                                    />
                                    )
                                }
                            </View>
                        </View>
                    </View>
                    <AppText style={styles.descriptionText}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    </AppText>
                </View>
            </View>
        </View>
    );

};


export default DetailCaffeTab;


const styles = StyleSheet.create({
    capacityContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    capacityText: {
        backgroundColor: ColorManager.greenColor,
        height: 35,
        width: 110,
        borderRadius: 15,
        padding: 5
    },
    descriptionTitle: {
        fontSize: 19,
        fontWeight: 'bold',
        color: ColorManager.blackColor,
    },
    descriptionText: {
        fontSize: 16,
    },
    reviewContainer: {
        flexDirection: 'row',
        paddingTop: 15,
    },
    reviewTitle: {
        fontSize: 19,
        fontWeight: 'bold',
        color: ColorManager.blackColor,
    },
    reviewCountContainer: {
        backgroundColor: ColorManager.greenColor,
        height: 30,
        width: 50,
        borderRadius: 13,
        padding: 3,
        marginLeft: 10,
    },
    reviewCountText: {
        color: ColorManager.whiteColor,
        textAlign: 'center',
        fontSize: 15,
    },
    reviewerImage: {
        width: 56,
        height: 56,
        borderRadius: 50,
        marginRight: 10,
    },
    reviewerInfoContainer: {
        flex: 1,
    },
    reviewerName: {
        fontSize: 19,
        fontWeight: 'bold',
        color: ColorManager.blackColor,
    },
    reviewerPosition: {
        fontSize: 16,
        paddingTop: 4,
        color: ColorManager.greyColor,
    },
    reviewDate: {
        fontSize: 17,
        color: ColorManager.greyColor,
    },
    starImage: {
        width: 16,
        height: 16,
    },
});