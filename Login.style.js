import {StyleSheet} from "react-native";

export default StyleSheet.create({
    input: {
        width: 200,
        height: 30,
        borderBottomColor: 'rgba(198,3,5,0.5)',
        borderBottomWidth: 1,
        marginBottom: 20
    },
    subject: {
        color: '#696969',
        marginBottom: 50
    },
    loginBtnText: {
        marginRight: 10,
        marginLeft: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18,
        color: '#C60305',
        borderColor: '#C60305',
        borderWidth: 1,
        borderRadius: 8,
    },
    loginBtnContainer: {
        marginTop: 40,
        flexDirection: 'row'
    },
    loginBtnWrapper: {
        alignSelf: 'center',
    },
    forgot: {
        marginTop: 40,
        color: '#C60305',
        alignSelf: 'center',
    },
    primaryBtn: {
        color: '#fff',
        backgroundColor: '#C60305',
        borderRadius: 8,
        overflow: 'hidden'
    }
});
