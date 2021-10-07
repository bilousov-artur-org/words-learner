import React from 'react';

import LoginScreen from "./conponents/LoginScreen";
import RecoverScreen from "./conponents/RecoverScreen";
import ProfileScreen from "./conponents/ProfileScreen";
import {View} from "react-native";

import styles from "./Global.style";


export default function App() {

    return (
        <View style={styles.container}>
            {/*<LoginScreen/>*/}
            {/*<RecoverScreen/>*/}
            <ProfileScreen/>
        </View>
    );
};