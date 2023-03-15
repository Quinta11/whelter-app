import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Account, Map, Info, Settings, Shelters} from '../screens';

const Tab = createBottomTabNavigator();

function HomeNavigation() {
    console.log(Tab);
    return (
        <Tab.Navigator initialRouteName="Map">
            <Tab.Screen name="Account" component={Account}/>
            <Tab.Screen name="Shelters" component={Shelters}/>
            <Tab.Screen name="Map" component={Map}/>
            <Tab.Screen name="Info" component={Info}/>
            <Tab.Screen name="Settings" component={Settings}/>
        </Tab.Navigator>
    );
}

export default HomeNavigation;