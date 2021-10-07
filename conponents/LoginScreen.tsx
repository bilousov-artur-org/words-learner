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

export default function Login() {
    const [text, onChangeText] = useState("");
    const [password, onChangePassword] = useState('');

    return (
        <View style={globalStyles.container}>
            <Image source={book} style={{width: 100, height: 60, marginBottom: 40}}/>
            <Text style={[styles.subject]}>ABBY Words Learner</Text>

            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    placeholder="E-Mail"
                    keyboardType="email-address"
                    value={text}
                />

                <TextInput
                    style={styles.input}
                    onChangeText={onChangePassword}
                    placeholder="Password"
                    secureTextEntry={true}
                    value={password}
                />

                <View style={[styles.loginBtnContainer]}>
                    <TouchableOpacity style={styles.loginBtnWrapper} onPress={() => {
                        console.log('Stub Log In')
                    }}>
                        <Text style={[styles.loginBtnText, styles.primaryBtn]}>Log In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginBtnWrapper} onPress={() => {
                        console.log('Stub Sign Up')
                    }}>
                        <Text style={styles.loginBtnText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

                <Pressable onPress={() => {
                    console.log('Stub Reset Password')
                }}>
                    <Text style={styles.forgot}>Forgot Password?</Text>
                </Pressable>

            </SafeAreaView>
        </View>
    );
};