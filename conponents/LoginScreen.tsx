import React, {useState} from 'react';
import {
    Image, Pressable,
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

// @ts-ignore
import book from '../assets/abby.png';
import styles from '../Login.style';
import globalStyles from '../Global.style';

export default function LoginScreen({navigation}:any) {
    const [text, onChangeText] = useState("");
    const [password, onChangePassword] = useState('');

    return (
        <View style={globalStyles.container}>
            <Image source={book} style={{width: 100, height: 60, marginBottom: 40}}/>
            <Text style={[globalStyles.subject]}>ABBY Words Learner</Text>

            <SafeAreaView>
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

                <View style={[styles.loginBtnContainer]}>
                    <TouchableOpacity style={globalStyles.loginBtnWrapper} onPress={() => {
                        console.log('Stub Log In');
                    }}>
                        <Text style={[globalStyles.loginBtnText, globalStyles.primaryBtn]}>Log In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={globalStyles.loginBtnWrapper} onPress={() => {
                        navigation.navigate('ProfileScreen');
                    }}>
                        <Text style={globalStyles.loginBtnText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

                <Pressable onPress={() => {
                    navigation.navigate('RecoverScreen');
                }}>
                    <Text style={styles.recover}>Forgot Password?</Text>
                </Pressable>

            </SafeAreaView>
        </View>
    );
};