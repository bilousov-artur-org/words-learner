import React from 'react';

import ChatScreen from "./conponents/ChatScreen";
import LoginScreen from "./conponents/LoginScreen";
import RecoverScreen from "./conponents/RecoverScreen";
import ProfileScreen from "./conponents/ProfileScreen";
import { SafeAreaView} from "react-native";

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import styles from "./Global.style";

const Stack = createNativeStackNavigator();


export default function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="LoginScreen" component={LoginScreen}/>
                <Stack.Screen name="RecoverScreen" component={RecoverScreen}/>
                <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
                <Stack.Screen name="ChatScreen" component={ChatScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};