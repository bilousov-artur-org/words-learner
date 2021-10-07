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
    const [password, onChangePassword] = useState('');

    return (
        <View style={globalStyles.container}>
            <Text style={[globalStyles.subject]}>Please provide profile data:</Text>

            <SafeAreaView>
                <TextInput
                    style={globalStyles.input}
                    onChangeText={onChangeText}
                    placeholder="Name"
                    keyboardType="default"
                    value={text}
                />

                <TextInput
                    style={globalStyles.input}
                    onChangeText={onChangeText}
                    placeholder="Second Name"
                    keyboardType="default"
                    value={text}
                />

                <TextInput
                    style={globalStyles.input}
                    onChangeText={onChangeText}
                    placeholder="E-Mail"
                    keyboardType="email-address"
                    value={text}
                />

                <TextInput
                    style={globalStyles.input}
                    onChangeText={onChangePassword}
                    placeholder="Password"
                    secureTextEntry={true}
                    value={password}
                />

                <TouchableOpacity style={[globalStyles.loginBtnWrapper, {marginTop: 50}]} onPress={() => {
                    console.log('Stub Save');
                }}>
                    <Text style={[globalStyles.loginBtnText, globalStyles.primaryBtn]}>Save</Text>
                </TouchableOpacity>

            </SafeAreaView>
        </View>
    );
};