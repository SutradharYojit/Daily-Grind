import { Text, TouchableOpacity } from "react-native";
import { appTheme } from "../../resources/style";
import { ColorManager } from "../../resources/color_manager";
import AppText from "../primary_text";

const PrimaryButton = (props: any) => {
    const { onPress, label, secondryBtnStyle, secondryTxtStyle } = props;
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[appTheme.buttonStyle, secondryBtnStyle]}>
            <AppText style={[{ color: ColorManager.whiteColor, fontSize: 19 }, secondryTxtStyle]} >{label}</AppText>
        </TouchableOpacity>
    );
}


export default PrimaryButton