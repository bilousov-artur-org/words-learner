import React from 'react';

import LoginScreen from "./conponents/LoginScreen";
import RecoverScreen from "./conponents/RecoverScreen";
import {View} from "react-native";

import styles from "./Global.style";


export default function App() {

    return (
        <View style={styles.container}>
            {/*<LoginScreen/>*/}
            <RecoverScreen/>
        </View>
    );
};