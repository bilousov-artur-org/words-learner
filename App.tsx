import React from 'react';

import Login from "./conponents/LoginScreen";
import {View} from "react-native";

import styles from "./Global.style";


export default function App() {

    return (
        <View style={styles.container}>
            <Login/>
        </View>
    );
};