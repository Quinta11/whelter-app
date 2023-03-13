import * as React from 'react';
// import {SafeAreaView, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import LoginNavigation from './src/navigation/LoginNavigation';

function App() {
    // isAuthenticated = is...
    return (
        <NavigationContainer>
            {/* {isAuthenticated ? AuthNavigator : DrawerNavigator } */}
            <LoginNavigation />
        </NavigationContainer>
    );
}

export default App;