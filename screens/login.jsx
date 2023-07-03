import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { NativeBaseProvider, Box, ScrollView, Text, View, Image, Flex} from "native-base";
import { View, Text, Button, Image, Dimensions, } from 'react-native';
import { SafeAreaView} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import styles from '../style.js'

export const LoginScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.layout}>
            <View style={styles.header}>
                <Text onPress={() => navigation.navigate('HomeScreen')} style={{fontSize: 30, fontWeight: "bold", textAlign: "center", marginLeft: 110}}>[App Name]</Text>
                <Pressable onPress={() => navigation.navigate('CartScreen')}>
                    <Image style={{width: 40, height: 40, marginLeft: 50, justifyContent: "flex-end"}} source={require('../assets/cart.png')} alt="cart"/>
                </Pressable>
            </View>
            <Text>Login</Text>
        </SafeAreaView>
    );
}