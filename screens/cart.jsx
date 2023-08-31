import React, {useState} from 'react';
import { db } from '../firebaseConfig';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity, ScrollView, Text, View, Image, Button, Pressable, StyleSheet, SafeAreaView} from "react-native";
import { useEffect } from 'react';
import { doc, addDoc, getDocs, collection, deleteDoc, setDoc, getDoc, updateDoc } from 'firebase/firestore'; 
import { isReactNative } from '@firebase/util';
import { auth } from '../firebaseConfig.js';
import styles from '../style';
import Icon from 'react-native-vector-icons/EvilIcons';
import { increment } from 'firebase/firestore';


export const CartScreen = ({navigation}) => {

    // //have a use state variable for the collection
    const [cart, setCart] = useState([]);
    const [totalCost, setTotalCost] = useState(0);

    // accesses document for specific user - we need to replace this with a variable for the user signed in
    const usersDocRef = doc(db, "users", auth.currentUser.uid)
    const cartCollectionRef = collection(usersDocRef, "cart")

    const createUser = async () => {
        await //addDoc(usersCollectionRef, { email: "email", password: "password" })
        addDoc(cartCollectionRef, {name: "sample", quantity: 0, note: ""})
    };

    const deleteItem = async(id) => {
        const itemDoc = doc(usersDocRef, "cart", id);
        await deleteDoc(itemDoc)
        navigation.replace('Main', { screen: 'CartScreen' })
        console.log("deleted")
    }

    const addOne = async (id) => {
        const itemDoc = doc(usersDocRef, "cart", id);

        await updateDoc(itemDoc, {
            quantity: increment(1)
        });

    }

    const deleteOne = async (id) => {
        const itemDoc = doc(usersDocRef, "cart", id);

        itemDocData = await getDoc(itemDoc)
        if (itemDocData.data().quantity > 1) {
            await updateDoc(itemDoc, {
                quantity: increment(-1)
            });
        }
        else {
            await deleteDoc(itemDoc)
        }

    }

    useEffect(() => {
        const getCart = async() => {
            const data = await getDocs(cartCollectionRef);
            setCart(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
        };
        
        getCart();
    }, [cart]);

    const getTotalCost = () => {
        const total = cart.reduce((accumulator, item) => {
            return (accumulator + item["price"] * item["quantity"]).toFixed(2);
        }, 0);
        return total;
    };



  
    // const decrement = () => {
    //     if (quantity > 0) {
    //     setQuantity(quantity - 1);
    //     }
    // };

    

    
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
                <Text style={styles.headerText}>JipBap</Text>
                <Image style={styles.logo} source={require('../assets/logo.png')} />
            </View>
            
            <View style={{marginTop: 20, width: '100%'}}>
                {cart.map((item) => {
                    return <View style={[cartstyles.item]}>
                        <View style={{ alignItems: 'flex-start'}}>
                            <Text style={styles.subheading}>{item.name}</Text>
                            <View style={{flexDirection: "row", alignItems: 'center'}}>
                                <Icon style={{marginRight: 10}} name="minus" size={35} color="#1D7151" onPress={() => {deleteOne(item.id)}}/>
                                <Text style={styles.bodytext}>{item.quantity}</Text>
                                <Icon style={{marginRight: 10}} name="plus" size={35} color="#1D7151" onPress={() => {addOne(item.id)}}/>
                            </View>


                        </View>
                        {/* <View style={cartstyles.countercontainer}>
                            <TouchableOpacity style={{width:"20%", height: "100%", justifyContent:"center", alignItems:"center"}} ><Text style={styles.bodytext}>-</Text></TouchableOpacity>
                                <View>
                                <Text>{item.quantity}</Text>
                                </View>
                            <TouchableOpacity style={{width:"20%", height: "100%", justifyContent:"center", alignItems:"center"}} onPress={() => {increment(item.id, item.quantity)}}><Text style={styles.bodytext}>+</Text></TouchableOpacity>
                        </View> */}
                        <View style={{ alignItems: 'flex-end'}}>
                            <Text style={styles.bodytext}>${(item.price * item.quantity).toFixed(2)}</Text>
                            <Icon style={{marginRight: 10}} name="trash" size={35} color="#1D7151" onPress={() => {deleteItem(item.id)}}/>
                        </View>
                    </View>;
            })}
        </View>

        <View style={cartstyles.summary}>
            <Text style={styles.bodytext}>Total</Text>
            <Text style={styles.bodytext}>${getTotalCost()}</Text>
        </View>

        <TouchableOpacity
                        onPress={() => navigation.navigate('CheckoutScreen')}
                        style={[styles.button, {width: '99%'}]}>
                        <Text style={styles.buttonText} >Checkout</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}

const cartstyles = StyleSheet.create({
    item: {
        borderWidth: 0.5,
        borderColor: "#1D7151",
        backgroundColor: "#fffdf0",
        flexDirection: "row",
        alignItems: 'left',
        justifyContent: 'space-between',
        padding: 10,
    },
    summary: {
        width: '100%',
        flexDirection: "row",
        justifyContent: 'space-between',
        padding: 10,
    },
    layout: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    countercontainer:{
        flexDirection: "row",
        backgroundColor: "#fffdf0",
        borderColor: "#1D7151",
        borderWidth: 1,
        width: "50%",
        height: "30%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 10,
    }
  })
