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

    const [errorMessage, setErrorMessage] = useState("")

    const RegisterUser = ()=>{
        
        createUserWithEmailAndPassword(auth, email, password)
        .then((re)=>{
            setIsSignedIn(true);
            setDoc(doc(db, "users", auth.currentUser.uid), {email: email, password: password, address: newDeliveryAddress })
            console.log("signed in")
            navigation.replace("Main")
        })
        .catch((re)=>{
            console.log(re.message);
            showError(re.message);
        })
        
    }
    const LogInUser = ()=>{
        signInWithEmailAndPassword(auth, email, password)
        .then((re)=>{
            setIsSignedIn(true);
            navigation.replace("Main")
        })
        .catch((re)=>{
            console.log(re.message);
            showError(re.message);
        })
    }

    const SignOutUser = ()=>{
        signOut(auth)
        .then((re) => {
            setIsSignedIn(false);
        })
        .catch((err)=>{
            console.log(err);
            showError(err);
        })
    }

    const showError = (re) => {
        setErrorMessage(re)
        .then((error)=>{ //raises a type error, I don't know why.
            navigation.replace('NewLoginScreen');
            console.log(errorMessage);
        })
        .catch ((error)=>{
            console.log(error)
        })
    };

    return (
        <SafeAreaView style={styles.layout}>
            <View style={{width: '100%', height: '40%', backgroundColor: "#1D7151", justifyContent: 'center', alignItems: 'center'}}>
                <Image style={{width: 100, height: 100}} source={require('../assets/logo.png')} />
                <Text style={loginstyles.headerText}>JipBap</Text>
            </View>
            
            {/* <KeyboardAvoidingView style={styles.container} behavior="padding"> */}

            {/* the following text won't get styled for some reason: */}
            <Text style={[styles.subheading, {paddingTop: 20, paddingBottom: 10}]}>Welcome to JipBap!</Text>
            <Text style={styles.bodytext}>Please log in to get started.</Text>

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
                <Text style={styles.errortext}>{errorMessage}</Text>
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
            {/* </KeyboardAvoidingView> */}
        </SafeAreaView>
    );
}

const loginstyles = StyleSheet.create({
    headerText: {
        fontSize: 50, 
        fontWeight: "bold", 
        fontFamily: 'Fredoka',
        color: "#fffdf0",
    },
})