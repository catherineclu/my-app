import React from 'react';
import { TouchableOpacity, ScrollView, View, Text, Button, Image, SafeAreaView, StyleSheet, Dimensions, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import styles from '../style.js';
import Counter from "./counter.jsx"

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NativeBaseProvider, HStack, NumericInput } from 'native-base';

export const ItemScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.layout}>
            <View style={styles.header}>
                <Text style={{fontSize: 30, fontWeight: "bold", textAlign: "center", marginLeft: 110}}>[App Name]</Text>
                <Pressable onPress={() => navigation.navigate('CartScreen')}>
                    <Image style={{height: 40, marginLeft: 50, justifyContent: "flex-end"}} source={require('../assets/cart.png')} alt="cart"/>
                </Pressable>
            </View>
            <ScrollView px={5} showsVerticalScrollIndicator={false} >
            <View style={ItemStyles.imagecontainer}>
                <Image source={require("../assets/images/cucumber.jpg")} 
                        alt="cucumber image" 
                        w="full" 
                        h={300} 
                        resizeMode="contain"
                        ></Image>
                <Text style={styles.heading}>Cucumber Kimchi</Text>
                <Text style={styles.bodytext}>Item description: Cucumber kimchi is a refreshing Korean side dish</Text>

            </View>
            <Counter />
            </ScrollView>
            <View style={ItemStyles.buttonContainer}>
                <TouchableOpacity
                        onPress={() => navigation.navigate('CartScreen')}
                        style={ItemStyles.button}>
                        <Text style={ItemStyles.buttonText}>Add to Cart</Text>
                    </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const ItemStyles = StyleSheet.create({
    header: {
        width: "100%",
        height: 75,
        backgroundColor: "#FFF9A6",
        alignItems: 'center',
        flexDirection: "row",
    },
    imagecontainer:{
        //backgroundColor: 'blue',
        alignItems: 'center',
        padding: "5%",
        //justifyContent: 'center',
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


    // informationContainer: {
        
    //     flex:1,
    // },
    // vendor: {
    //     width: 350,
    //     height: 250,
    //     backgroundColor: 'white',
    //     margin: 16,
    //     borderRadius: 2,
    //     shadowColor: 'black',
    //     shadowOpacity: 0.3,
    //     shadowRadius: 1,
    //     shadowOffset: { height: 1, width: 0.3 }

    // }
  })

