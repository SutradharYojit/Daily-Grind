import { Text, TouchableOpacity } from "react-native";
import { appStyles } from "../../resources/style";
import { ColorManager } from "../../resources/color_manager";
import AppText from "../primary_text";

const PrimaryButton = (props: any) => {
    const { onPress, label } = props;
    return (<TouchableOpacity
        onPress={onPress}
        style={appStyles.buttonStyle}>
        <AppText style={{ color: ColorManager.whiteColor, fontSize: 19 }} >{label}</AppText>
    </TouchableOpacity>);
}


export default PrimaryButton