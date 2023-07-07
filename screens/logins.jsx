import { KeyboardAvoidingView } from 'native-base';
import React from 'react';
import { KeyboardAvoidingView, View, Text, TextInput, Button, Image, SafeAreaView, StyleSheet, Dimensions, Pressable, TextInput, TouchableOpacity } from 'react-native';
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
                        <Text style={loginstyles.button}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { }}
                        style={[loginstyles.button, loginstyles.buttonOutline]}>
                        <Text styles={loginstyles.buttonOutlineText} >Login</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const loginstyles = StyleSheet.create({

})