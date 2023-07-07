import React from 'react';
import { KeyboardAvoidingView, View, Text, TextInput, Button, Image, SafeAreaView, StyleSheet, Dimensions, Pressable, TouchableOpacity } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import styles from '../style.js'

export const LoginScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.layout}>
            <View style={styles.header}>
                <Text style={{fontSize: 30, fontWeight: "bold", textAlign: "center", marginLeft: 110}}>[App Name]</Text>
                <Pressable onPress={() => navigation.navigate('CartScreen')}>
                    <Image style={{width: 40, height: 40, marginLeft: 50, justifyContent: "flex-end"}} source={require('../assets/cart.png')} alt="cart"/>
                </Pressable>
                
            </View>
            <Text>Login</Text>
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <View style={loginstyles.inputContainer}>
                    <TextInput placeholder="Email" 
                                // value={} 
                                // onChangeText={text => } 
                                style={loginstyles.input}
                                />
                    <TextInput placeholder="Password" 
                                // value={} 
                                // onChangeText={text => } 
                                style={loginstyles.input}
                                secureTextEntry
                                />
                </View>

                <View style={loginstyles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => { }}
                        style={loginstyles.button}>
                        <Text style={loginstyles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { }}
                        style={[loginstyles.button, loginstyles.buttonOutline]}>
                        <Text style={loginstyles.buttonOutlineText} >Register</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const loginstyles = StyleSheet.create({
    inputContainer: {
        width: '80%', 
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius:10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%', //probably need to adjust this
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: "blue",
        width: "100%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center"
    },
    buttonText:{
        color: "white",
        fontWeight: "700",
        fontSize: 16
    },
    buttonOutline: {
        backgroundColor: "white",
        marginTop: 5,
        borderColor: "blue",
    },
    buttonOutlineText: {
        color: "blue",
        fontWeight: "700",
        fontSize: 16
    },
})