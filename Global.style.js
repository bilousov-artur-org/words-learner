import {StyleSheet} from "react-native";

export const CustomColor = {
    default: '#C60305',
    white: '#fff',
    defaultBorder: 'rgba(198,3,5,0.5)',
    defaultText: '#696969'
};

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CustomColor.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    subject: {
        color: CustomColor.defaultText,
        marginBottom: 50
    },
    input: {
        width: 200,
        height: 30,
        borderBottomColor: CustomColor.defaultBorder,
        borderBottomWidth: 1,
        marginBottom: 20
    },
    loginBtnWrapper: {
        alignSelf: 'center',
    },
    primaryBtn: {
        color: CustomColor.white,
        backgroundColor: CustomColor.default,
        borderRadius: 8,
        overflow: 'hidden'
    },
    loginBtnText: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18,
        color: CustomColor.default,
        borderColor: CustomColor.default,
        borderWidth: 1,
        borderRadius: 8,
    },
});
