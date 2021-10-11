import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Alert
} from 'react-native';

import globalStyles from '../Global.style';

const showAlert = (navigation: any) =>
    Alert.alert(
        "Notification",
        "Please check your mail to continue",
        [
            {
                text: "OK",
                onPress: () => navigation.push('LoginScreen'),
                style: "default",
            },
        ],
    );

export default function RecoverScreen() {
    const navigation = useNavigation();
    const [text, onChangeText] = useState("");

    return (
        <View style={globalStyles.container}>
            <Text style={[globalStyles.subject]}>Please provide an email address:</Text>

            <SafeAreaView>
                <TextInput
                    style={globalStyles.input}
                    onChangeText={onChangeText}
                    placeholder="E-Mail"
                    keyboardType="email-address"
                    value={text}
                />

                <TouchableOpacity style={[globalStyles.loginBtnWrapper, {marginTop: 40}]} onPress={() =>{
                    console.log('onSubmit:');
                    showAlert(navigation);
                }}>
                    <Text style={[globalStyles.loginBtnText, globalStyles.primaryBtn] }>Submit</Text>
                </TouchableOpacity>

            </SafeAreaView>
        </View>
    );
};