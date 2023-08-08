import React, {useState, useEffect} from 'react';
import { TouchableOpacity, ScrollView, View, Text, Button, Image, SafeAreaView, StyleSheet, Dimensions, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import styles from '../style.js';
import Counter from "./counter.jsx"
import { doc, addDoc, getDoc, collection } from 'firebase/firestore'; 
import { auth } from '../firebaseConfig.js';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { db } from '../firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ItemScreen = ({navigation}) => {
    const usersDocRef = doc(db, "users", auth.currentUser.uid)
    const cartCollectionRef = collection(usersDocRef, "cart")
    const [quantity, setQuantity] = useState(0);
    const [itemInfo, setItemInfo] = useState("");

    const getItemId = async () => {
        try {
          const value = await AsyncStorage.getItem('item-id');
          if (value !== null) {
            console.log("success getting item screen", value)
            return value
            //return value
          }
        } catch (e) {
            console.log(e)
          // error reading value
        }
      };
    
      const getVendor = async () => {
        try {
          const value = await AsyncStorage.getItem('vendor-id');
          if (value !== null) {
            console.log("success getting vendor value item screen", value)
            return value
            //return value
          }
        } catch (e) {
            console.log(e)
          // error reading value
        }
      };

    useEffect(() => {
        const getItem = async () => {
            const itemId = await getItemId();
            const vendorId = await getVendor();

            const vendorDocRef = await doc(db, "vendor", vendorId);
            const itemDocRef = await doc(vendorDocRef, "Menu", itemId);
            const itemDocSnap = await getDoc(itemDocRef);

            if (itemDocSnap.exists()) {
                console.log("Item document data:", itemDocSnap.data());
                setItemInfo(itemDocSnap.data());
                
            } else {
                // docSnap.data() will be undefined in this case
                console.log("No such document!");
                setVendorInfo()
            }
        }
        getItem();
    }, [])

    const createItem = async (itemName) => {
        await addDoc(cartCollectionRef, {name: itemName, quantity: quantity}, ID); //figure out how to update item quantity
        console.log("success, added to cart")
        navigation.replace("VendorScreen");
    };
    
    const increment = () => {
        setQuantity(quantity + 1);
    };
  
    const decrement = () => {
        if (quantity > 0) {
        setQuantity(quantity - 1);
        }
    };

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
                <Text style={styles.heading}>{itemInfo.name}</Text>
                <Text style={styles.bodytext}>Item description: {itemInfo.description}</Text>
                <View style={counterStyles.countercontainer}>
                <Button title="-" style={counterStyles.button} onPress={decrement} />
                <View>
                <Text>{quantity}</Text>
                </View>
                <Button title="+" style={counterStyles.button} onPress={increment} />
                </View>
            </View>
            
            </ScrollView>
            <View style={ItemStyles.buttonContainer}>
                <TouchableOpacity
                        onPress={() => createItem(itemInfo.name)}
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

  const counterStyles = StyleSheet.create({
    countercontainer:{
        flexDirection: "row",
        backgroundColor: "#FFF9A6",
        width: "40%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    button:{
        flexDirection: 'row',
    }
})

