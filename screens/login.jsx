//Used tutorial: https://www.youtube.com/watch?v=20TSEoJkg5k
//for contributor

import React, {useEffect, useState} from 'react';
import { KeyboardAvoidingView, View, Text, TextInput, Button, Image, SafeAreaView, StyleSheet, Dimensions, Pressable, TouchableOpacity, StatusBar, useColorScheme } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import { auth } from '../firebaseConfig.js';
import styles from '../style.js';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { db } from '../firebaseConfig';
import { doc, setDoc, addDoc, collection } from 'firebase/firestore';
import { useFonts } from 'expo-font';

export const NewLoginScreen = ({navigation}) => {
    const[isSignedIn, setIsSignedIn] = useState('');
    // text input states
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const [users, setUsers] = useState([]);
    const [newDeliveryAddress, setDeliveryAddress] = useState("")

    const [newCart, setCart] = useState([])

    const RegisterUser = ()=>{
        
        createUserWithEmailAndPassword(auth, email, password)
        .then((re)=>{
            setIsSignedIn(true);
            setDoc(doc(db, "users", auth.currentUser.uid), {email: email, password: password, address: newDeliveryAddress })
            console.log("signed in")
            navigation.replace("HomeScreen")
        })
        .catch((re)=>{
            console.log(re);
        })
        
    }
    const LogInUser = ()=>{
        signInWithEmailAndPassword(auth, email, password)
        .then((re)=>{
            setIsSignedIn(true);
            navigation.replace("HomeScreen")
        })
        .catch((re)=>{
            console.log(re);
        })
    }

    const SignOutUser = ()=>{
        signOut(auth)
        .then((re) => {
            setIsSignedIn(false);
        })
        .catch((err)=>{
            console.log(err);
        })
    }


    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.header}>
                <Text onPress={() => navigation.navigate('HomeScreen')} style={styles.headerText}>JipBap</Text>
                {/* <Pressable onPress={() => navigation.navigate('CartScreen')}>
                    <Image style={{width: 40, height: 40, marginLeft: 50, justifyContent: "flex-end"}} source={require('../assets/cart.png')} alt="cart"/>
                </Pressable> */}
                
            </View>
            
            <KeyboardAvoidingView style={styles.container} behavior="padding">

            {/* the following text won't get styled for some reason: */}
            <Text styles={styles.bodytext}>Welcome to JipBap! Please log in to get started.</Text>
                <View style={styles.inputContainer}>
                    <TextInput placeholder="Email" 
                                value={email} 
                                onChangeText={text => setEmail(text)} 
                                style={styles.input}
                                />
                    <TextInput placeholder="Password" 
                                value={password} 
                                onChangeText={text => setPassword(text)} 
                                style={styles.input}
                                secureTextEntry={true}
                                />
                </View>

                <View style={styles.buttonContainer}>

                {/* <View> */}
                    <TouchableOpacity
                        onPress={LogInUser}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={RegisterUser}
                        style={[styles.button, styles.buttonOutline]}>
                        <Text style={styles.buttonOutlineText} >Register</Text>
                    </TouchableOpacity>
                {/* </View> */}
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
