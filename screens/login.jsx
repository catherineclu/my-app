//Used tutorial: https://www.youtube.com/watch?v=20TSEoJkg5k
//for contributor

import React, {useEffect, useState} from 'react';
import { KeyboardAvoidingView, View, Text, TextInput, Button, Image, SafeAreaView, StyleSheet, Dimensions, Pressable, TouchableOpacity, StatusBar, useColorScheme } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import { auth } from '../firebaseConfig.js';
import styles from '../style.js'
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
    //const usersCollectionRef = collection(db, "users")

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
        <SafeAreaView style={styles.layout}>
            <View style={styles.header}>
                <Text onPress={() => navigation.navigate('HomeScreen')} style={{fontSize: 30, fontFamily: 'Fredoka', fontWeight: "bold"}}>JipBap</Text>
                {/* <Pressable onPress={() => navigation.navigate('CartScreen')}>
                    <Image style={{width: 40, height: 40, marginLeft: 50, justifyContent: "flex-end"}} source={require('../assets/cart.png')} alt="cart"/>
                </Pressable> */}
                
            </View>
            {/* <Text>Login</Text> */}
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <View style={loginstyles.inputContainer}>
                    <TextInput placeholder="Email" 
                                value={email} 
                                onChangeText={text => setEmail(text)} 
                                style={loginstyles.input}
                                />
                    <TextInput placeholder="Password" 
                                value={password} 
                                onChangeText={text => setPassword(text)} 
                                style={loginstyles.input}
                                secureTextEntry={true}
                                />
                </View>

                <View style={loginstyles.buttonContainer}>

                <View>
                    <TouchableOpacity
                        onPress={LogInUser}
                        style={loginstyles.button}>
                        <Text style={loginstyles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={RegisterUser}
                        style={[loginstyles.button, loginstyles.buttonOutline]}>
                        <Text style={loginstyles.buttonOutlineText} >Register</Text>
                    </TouchableOpacity>
                </View>

                    {/* {isSignedIn === false?
                    :
                    <TouchableOpacity
                        onPress={SignOutUser}
                        style={[loginstyles.button, loginstyles.buttonOutline]}>
                        <Text style={loginstyles.buttonOutlineText} >Sign Out</Text>
                    </TouchableOpacity>
                    }                    */}
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
        alignItems: "center",
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
