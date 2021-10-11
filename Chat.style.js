import {StyleSheet} from "react-native";

import {CustomColor} from './Global.style';

export default StyleSheet.create({
    itemContainer: {
        width: '100%',
        height: 50,
        borderBottomWidth: 2,
        borderColor: CustomColor.defaultBorder,
        flexDirection: 'row',
        paddingHorizontal: 10,

        alignItems: 'center',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1, //StyleSheet.hairlineWidth,
        borderColor: CustomColor.defaultBorder,
    },
    name: {
        marginLeft: 25,
    },
});