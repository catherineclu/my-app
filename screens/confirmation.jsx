import React, {useState} from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../style";
import Icon from 'react-native-vector-icons/AntDesign';


export const ConfirmationScreen = ({navigation}) => {

    return (
        <SafeAreaView style={styles.layout}>
            <View style={[styles.header, {justifyContent: 'center', flexDirection: 'row'}]}>
                <Text onPress={() => navigation.navigate('Main')} style={styles.headerText}>JipBap</Text>
                <Image style={styles.logo} source={require('../assets/logo.png')} />
            </View>
            <Text style={styles.subheading}>Order Confirmed</Text>
            <Text style={styles.bodytext}>Thank you for your order!</Text>
            
            <Text onPress={() => navigation.replace('Main', { screen: 'HomeScreen' })} style={[styles.bodytext, {textDecorationLine: 'underline'}]}>Back to explore</Text>

        </SafeAreaView>

    );

}