import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Register} from '../screens';
import HomeNavigation from './HomeNavigation';

const Stack = createNativeStackNavigator();

function LoginNavigation() {
    console.log(Stack);
    return (
        <Stack.Navigator initialRouteName="SignIn">
            <Stack.Screen name="SignIn" component={Login} options={{headerShown: false}}/>
            <Stack.Screen name="SignUp" component={Register} options={{headerShown: false}}/>
            <Stack.Screen name="Home" component={HomeNavigation} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}

export default LoginNavigation;