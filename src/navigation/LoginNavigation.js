import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../screens';

const Stack = createNativeStackNavigator();

function LoginNavigation() {
    console.log(Stack);
    return (
        <Stack.Navigator initialRouteName="SignIn">
            <Stack.Screen name="SignIn" component={Login} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}

export default LoginNavigation;