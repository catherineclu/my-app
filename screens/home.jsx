import React, {useState, useEffect} from 'react';
import { View, Text, Button, Image, SafeAreaView, StyleSheet, Dimensions, Pressable, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { auth } from '../firebaseConfig';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, getDocs, collection, addDoc} from "firebase/firestore";
import {db} from '../firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
            navigation.replace("NewLoginScreen");
            console.log("signed out")
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    const storeData = async (value) => {
        try {
          await AsyncStorage.setItem('my-key', value);
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
                <Text style={{fontSize: 30, fontWeight: "bold", fontFamily: 'Fredoka'}}>JipBap</Text>
                
            </View>

            {vendors.map((vendor) => {
                        return(
            <Pressable style={styles.vendor} key={vendor.id} onPress={() => storeData(vendor.id)}>
                <Image style={{width: "100%", height: "70%"}} source={require("../assets/dumplings.jpeg")}/>
                <View style={{height: "30%", backgroundColor: "white", flexDirection: "row", marginTop: 5}}>
                    <View style={{marginLeft: 5, flex: 1}}>
                        <Text style={{fontSize: 15, fontWeight: "bold"}}>{vendor.name}</Text>
                        <Text>{vendor.id}</Text>
                        <Text>{vendor.cuisine}</Text>
                    </View>
                    <View style={{alignItems: "flex-end", marginRight: 5, flex: 1}}>
                        <Text>{vendor.location}</Text>
                        <Text>[Pickup Time]</Text>
                    </View>
                </View>
            </Pressable>
                        );
                    })}

            {/* <Pressable onPress={() => navigation.navigate('NewLoginScreen')}>
                <Text style={styles.vendor}>Link to Login Page</Text>
                </Pressable> */}

            <View> 
                <Button styles={styles.button} onPress={SignOutUser} title="Sign out">
                </Button>
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
    vendor: {
        width: 350,
        height: 250,
        backgroundColor: 'white',
        margin: 16,
        borderRadius: 2,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 1,
        shadowOffset: { height: 1, width: 0.3 }
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
        fontSize: 16
    },
  })

