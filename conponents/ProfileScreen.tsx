import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

import LoginScreen from "./LoginScreen";

import globalStyles from '../Global.style';

export default function RecoverScreen({navigation}: any) {
    const [name, onChangeName] = useState("");
    const [secondName, onChangeSecondName] = useState("");
    const [email, onChangeEmail] = useState("");
    const [password, onChangePassword] = useState('');
    // const navigation = useNavigation();

    return (
        <View style={globalStyles.container}>
            <Text style={[globalStyles.subject]}>Please provide profile data:</Text>

            <SafeAreaView>
                <TextInput
                    style={globalStyles.input}
                    onChangeText={onChangeName}
                    placeholder="Name"
                    keyboardType="default"
                    value={name}
                />

                <TextInput
                    style={globalStyles.input}
                    onChangeText={onChangeSecondName}
                    placeholder="Second Name"
                    keyboardType="default"
                    value={secondName}
                />

                <TextInput
                    style={globalStyles.input}
                    onChangeText={onChangeEmail}
                    placeholder="E-Mail"
                    keyboardType="email-address"
                    value={email}
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
                    navigation.push('LoginScreen');
                }}>
                    <Text style={[globalStyles.loginBtnText, globalStyles.primaryBtn]}>Save</Text>
                </TouchableOpacity>

            </SafeAreaView>
        </View>
    );
};