import React, {useState, useEffect} from 'react';
import { View, Text, Button, Image, SafeAreaView, StyleSheet, Dimensions, Pressable, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { auth } from '../firebaseConfig';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, getDocs, collection, addDoc} from "firebase/firestore";
import {db} from '../firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../style.js';

export const HomeScreen = ({navigation}) => {

    //under construction

    // navigation = useNavigation()
    
    // const handleSignOut = () => {
    //     auth
    //         .signOut()
    //         .then(() => {
    //             navigation.replace("HomeScreen")
    //         })
    //         .catch(error => alert(error.message))
    // }
    const [vendors, setVendors] = useState([]);
    const vendorCollectionRef = collection(db, "vendor");

    const SignOutUser = ()=>{
        signOut(auth)
        .then((re) => {
            AsyncStorage.removeItem('vendor-id')
            AsyncStorage.removeItem('item-id')
            navigation.replace("NewLoginScreen");
            console.log("signed out")
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    const storeData = async (value) => {
        try {
          await AsyncStorage.setItem('vendor-id', value);
          console.log("success home screen", value)
          navigation.navigate('VendorScreen')

        } catch (e) {
          // saving error
        }
      };

    useEffect(() => {
        const getVendors = async () => {
            const vendorData = await getDocs(vendorCollectionRef);
            setVendors(vendorData.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
        }
        getVendors();

    }, []);


    return (
        <SafeAreaView style={styles.layout}>
            <View style={styles.header}>
                <Text style={styles.headerText}>JipBap</Text>
                <Image style={styles.logo} source={require('../assets/logo.png')} />
            </View>

            {vendors.map((vendor) => {
                        return(
            <Pressable style={styles.vendor} key={vendor.id} onPress={() => storeData(vendor.id)}>
                <Image style={styles.vendorImage} source={require("../assets/dumplings.jpeg")}/>
                <View style={styles.vendorTextContainer}>
                    <View style={{marginLeft: 10, flex: 1}}>
                        <Text style={styles.vendorName}>{vendor.name}</Text>
                        {/* <Text>{vendor.id}</Text> */}
                        <Text styles={styles.bodytext}>{vendor.cuisine}</Text>
                    </View>
                    <View style={{alignItems: "flex-end", marginRight: 10, flex: 1}}>
                        <Text styles={styles.bodytext}>{vendor.location}</Text>
                        {/* <Text>[Pickup Time]</Text> */}
                    </View>
                </View>
            </Pressable>
                        );
                    })}


            <View> 
            <TouchableOpacity
                        onPress={SignOutUser}
                        style={styles.button}>
                        <Text style={styles.buttonText} >Sign Out</Text>
            </TouchableOpacity>
            </View>
            
        </SafeAreaView>
    );
}
