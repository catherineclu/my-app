import React, {useState} from 'react';
import { db } from '../firebaseConfig';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView, Text, View, Image, Button, Pressable} from "react-native";
import { useEffect } from 'react';
import { doc, addDoc, getDocs, collection } from 'firebase/firestore'; // or get doc
import { isReactNative } from '@firebase/util';
import { auth } from '../firebaseConfig.js';


export const CartScreen = ({navigation}) => {

    // //have a use state variable for the collection

    // accesses document for specific user - we need to replace this with a variable for the user signed in
    const usersDocRef = doc(db, "users", auth.currentUser.uid)
    const cartCollectionRef = collection(usersDocRef, "cart")

    const createUser = async () => {
        await //addDoc(usersCollectionRef, { email: "email", password: "password" })
        addDoc(cartCollectionRef, {name: "sample", quantity: 0, note: ""})
    };
    
    
    // useEffect(() => {
    //     //function to access data through use effect async function
    //     const getUser = async () => {
    //         try {
    //         const data = await getDocs(userCollectionRef);
    //         //sets use state variable to [{attribute: "data", collection_id: "id", etc. }]
    //         setUser(data.docs.map((doc)=> ({...doc.data(), id: doc.id})));
    //         }
    //         catch(e) {
    //             console.error(e)
    //         }
    //         //prints collection use state variable to console
    //         console.log("user", user); 
    //     }
    //     //calls function
    //     getUser();
    // }, [])
    
    
    return (
        <View>
            <Text>Cart</Text>
            <Pressable onPress={createUser}>
                <Text>add</Text>
            </Pressable>
            {/* <View>
               
                {user.map((oneuser) => { 
                    return (
                    <View>
                        
                        <Text>Item 1: {oneuser.cart[0]}</Text>
                    </View>
                    );

                })}
            </View> */}
        </View>
    );
}
