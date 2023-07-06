import React from 'react';
import { View, Text, Button, Image, SafeAreaView, StyleSheet, Dimensions, Pressable } from 'react-native';
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
            {/* <Pressable>
                <Text style={styles.vendor} onPress={() => navigation.navigate('LoginScreen')}>Link to Login Page</Text>
            </Pressable> */}
        </SafeAreaView>
    );
}