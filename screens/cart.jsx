import React, {useState} from 'react';
import { db } from '../firebaseConfig';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView, Text, View, Image, Button, Pressable, StyleSheet, SafeAreaView} from "react-native";
import { useEffect } from 'react';
import { doc, addDoc, getDocs, collection, deleteDoc } from 'firebase/firestore'; 
import { isReactNative } from '@firebase/util';
import { auth } from '../firebaseConfig.js';


export const CartScreen = ({navigation}) => {

    // //have a use state variable for the collection
    const [cart, setCart] = useState([]);

    // accesses document for specific user - we need to replace this with a variable for the user signed in
    const usersDocRef = doc(db, "users", auth.currentUser.uid)
    const cartCollectionRef = collection(usersDocRef, "cart")

    const createUser = async () => {
        await //addDoc(usersCollectionRef, { email: "email", password: "password" })
        addDoc(cartCollectionRef, {name: "sample", quantity: 0, note: ""})
    };

    const deleteItem = async(id) => {
        const itemDoc = doc(usersDocRef, "cart", id);
        if (id.quantity > 1) {
            await addDoc(cartCollectionRef, {name: itemName, quantity: quantity - 1, price: itemPrice})
        }

        await deleteDoc(itemDoc)
        navigation.replace('HomeScreen', { screen: 'CartScreen' })
        console.log("deleted")
    }

    useEffect(() => {
        const getCart = async() => {
            const data = await getDocs(cartCollectionRef);
            setCart(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
        };

        getCart();
    }, []);


    
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
        <SafeAreaView style={styles.layout}>
            <View style={styles.header}>
                <Text style={{fontSize: 30, fontWeight: "bold", textAlign: "center"}}>Cart</Text>
            </View>


            {cart.map((item) => {
                return <View> 
                    <Text>Item: {item.name}</Text>
                    <Text>Quantity: {item.quantity}</Text>
                    <Text>Price: {item.quantity}</Text>
                    <Button title="Delete" onPress={() => {deleteItem(item.id)}}></Button>
                </View>;
        })}

        <View>
            <Text>Order Summary</Text>
            <Text>Subtotal: </Text>
            <Text>Tax: </Text>
            <Text>Tip: </Text>
            <Text>Total: </Text>
            <Button title="Checkout" onPress={() => navigation.navigate('CheckoutScreen')}></Button>
        </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 75,
        backgroundColor: "#FFF9A6",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
    },
    layout: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
  })
