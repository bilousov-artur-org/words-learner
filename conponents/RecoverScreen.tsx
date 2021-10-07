import React, {useState} from 'react';
import {
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

import globalStyles from '../Global.style';

export default function RecoverScreen() {
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

                <TouchableOpacity style={[globalStyles.loginBtnWrapper, {marginTop: 40}]} onPress={() => {
                    console.log('Stub Submit');
                }}>
                    <Text style={[globalStyles.loginBtnText, globalStyles.primaryBtn]}>Submit</Text>
                </TouchableOpacity>

            </SafeAreaView>
        </View>
    );
};