import {StyleSheet} from "react-native";

import {Color} from './Global.style';

export default StyleSheet.create({
    loginBtnContainer: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    recover: {
        marginTop: 40,
        color: Color.default,
        alignSelf: 'center',
    },
});
