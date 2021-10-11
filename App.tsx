import React from 'react';

import ChatScreen from "./conponents/ChatScreen";
import LoginScreen from "./conponents/LoginScreen";
import RecoverScreen from "./conponents/RecoverScreen";
import ProfileScreen from "./conponents/ProfileScreen";
import { SafeAreaView} from "react-native";

import styles from "./Global.style";


export default function App() {

    return (
        <SafeAreaView style={styles.container}>
            <ChatScreen />
        </SafeAreaView>
        /*<View style={styles.container}>
            {/!*<LoginScreen/>*!/}
            {/!*<RecoverScreen/>*!/}
            {/!*<ProfileScreen/>*!/}
        </View>*/
    );
};