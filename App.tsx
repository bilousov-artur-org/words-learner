import React from 'react';

import LoginScreen from "./conponents/LoginScreen";
import RecoverScreen from "./conponents/RecoverScreen";
import ProfileScreen from "./conponents/ProfileScreen";

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const MainStack = createNativeStackNavigator();

export default function App() {

    return (
        // <LoginScreen/>
        <NavigationContainer>
            <MainStack.Screen name="LoginScreen" component={LoginScreen}/>
            <MainStack.Screen name="RecoverScreen" component={RecoverScreen}/>
            <MainStack.Screen name="ProfileScreen" component={ProfileScreen}/>
        </NavigationContainer>
    );
};