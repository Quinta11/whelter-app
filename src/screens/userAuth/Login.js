import React, { Component } from 'react';
import {StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity, Alert, Button} from 'react-native';

class Login extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            username: '',
            password: '',
        };
    }

    

    onLogin() {
        const { username, password } = this.state;
        //Alert.alert('Credentials', `${username} + ${password}`);
        // Add if statement that checks if login is in database.
        this.props.navigation.navigate('Home');
    }
    
    render() { 
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Whelter</Text>

                <TextInput
                    value={this.state.username}
                    onChangeText={(username) => this.setState({ username })}
                    placeholder={'Username'}
                    style={styles.input}
                />

                <TextInput
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                    placeholder={'Password'}
                    secureTextEntry={true}
                    style={styles.input}
                />

                <Button
                    title={'Login'}
                    style={styles.input}
                    onPress={this.onLogin.bind(this)}
                />

                <View
                    style={styles.space}
                />

                <Button
                    title={'Register'}
                    style={styles.input}
                    onPress={() => this.props.navigation.navigate('SignUp')}
                />
            </View>
        );
    }
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    input: {
        width: 200,
        height: 35,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
    text: {
        fontSize: 30,
        lineHeight: 75,
        color: 'black',
        fontWeight: 'bold',
    },
    space: {
        width: 20,
        height: 7,
    },
});