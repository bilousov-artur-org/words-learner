import React, {useState} from 'react';
import {
    Image, Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

// @ts-ignore
import book from './assets/abby.png';

export default function App() {
    const [text, onChangeText] = useState("");
    const [password, onChangePassword] = useState('');

    return (
        <View style={styles.container}>
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
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
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
