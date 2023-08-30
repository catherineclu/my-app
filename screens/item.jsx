import React, {useState, useEffect} from 'react';
import { TouchableOpacity, ScrollView, View, Text, Button, Image, SafeAreaView, StyleSheet, Dimensions, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import styles from '../style.js';
import { doc, addDoc, getDoc, collection, setDoc } from 'firebase/firestore'; 
import { auth } from '../firebaseConfig.js';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { db } from '../firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/AntDesign';


export const ItemScreen = ({navigation}) => {
    const usersDocRef = doc(db, "users", auth.currentUser.uid)
    //const cartCollectionRef = collection(usersDocRef, "cart")
    const [quantity, setQuantity] = useState(0);
    const [itemInfo, setItemInfo] = useState("");
    const [errorMessage, setErrorMessage] = useState("")

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
            const cartItemDocSnap = await getDoc(doc(usersDocRef, "cart", itemId))

            if (itemDocSnap.exists()) {
                console.log("Item document data:", itemDocSnap.data());
                setItemInfo(itemDocSnap.data());
                
            } else {
                // docSnap.data() will be undefined in this case
                console.log("No such document!");
                setVendorInfo()
            }

            if (cartItemDocSnap.exists()) {
                console.log("item already added to cart", cartItemDocSnap.data())
                setQuantity(cartItemDocSnap.data().quantity);
            }
        }
        getItem();
    }, [])

    const createItem = async (itemName, itemPrice) => {
        const itemId = await getItemId();
        console.log("item id:", itemId);
        //add item id as name
        if (quantity > 0) {
        await setDoc(doc(usersDocRef, "cart", itemId), {name: itemName, quantity: quantity, price: itemPrice}); //figure out how to update item quantity
        console.log("success, added to cart")
        //navigation.replace("VendorScreen");
        navigation.goBack()
        } else {
            console.log("item quantity must be more than 0 to add to cart");
            showError("item quantity must be more than 0 to add to cart");
        }
    };

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
            <View style={[styles.header, {justifyContent: 'space-between'}]}>
                <Icon marginLeft={10} name="left" size={25} color="#fffdf0" onPress={() => navigation.navigate('VendorScreen')} />
                <View style={{flexDirection: "row"}}>
                    <Text onPress={() => navigation.navigate('Main')} style={styles.headerText}>JipBap</Text>
                    <Image style={styles.logo} source={require('../assets/logo.png')} />
                </View>
                <Icon marginRight={10} name="left" size={25} color="#1D7151" />

            </View>
            <ScrollView styles={{width: "100%"}} showsVerticalScrollIndicator={false} >
            <View style={styles.container}>
                <Image source={require("../assets/images/cucumber.jpg")} 
                       styles={styles.banner}
                        ></Image>
                <Text style={styles.headerTwoText}>{itemInfo.name}</Text>
                <Text style={styles.bodytext}>Item description: {itemInfo.description}</Text>
                <Text style={styles.bodytext}>Item price: ${itemInfo.price}</Text>

                <View style={counterStyles.countercontainer}>
                    {/* NEED TO MAKE TOUCHABLE OPACITY THICKER */}
                    <TouchableOpacity style={{width:"20%", height: "100%", justifyContent:"center", alignItems:"center"}} onPress={decrement}><Text style={ItemStyles.buttonText}>-</Text></TouchableOpacity>
                    {/* <Button title="-" style={counterStyles.button} onPress={decrement} /> */}
                    <View>
                    <Text>{quantity}</Text>
                    </View>
                    {/* <Button title="+" style={counterStyles.button} onPress={increment} /> */}
                    <TouchableOpacity style={{width:"20%", height: "100%", justifyContent:"center", alignItems:"center"}} onPress={increment}><Text style={ItemStyles.buttonText}>+</Text></TouchableOpacity>
                </View>
            </View>
            
            </ScrollView>
            <View style={ItemStyles.buttonContainer}>
            <Text style={styles.errortext}>{errorMessage}</Text>
                <TouchableOpacity
                        onPress={() => createItem(itemInfo.name, itemInfo.price)}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Add to Cart</Text>
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
        color: "black",
        fontWeight: "700",
        fontSize: 25
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
        backgroundColor: "#fffdf0",
        borderColor: "#1D7151",
        borderWidth: 1,
        width: "60%",
        height: "20%",
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

