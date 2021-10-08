import React from 'react';

import LoginScreen from "./conponents/LoginScreen";
import RecoverScreen from "./conponents/RecoverScreen";
import ProfileScreen from "./conponents/ProfileScreen";

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();


export default function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="LoginScreen" component={LoginScreen}/>
                <Stack.Screen name="RecoverScreen" component={RecoverScreen}/>
                <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};