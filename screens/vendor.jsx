import React, { useEffect, useState } from 'react';
import { Dimensions, ScrollView, Pressable, StyleSheet, SafeAreaView, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, Flex} from "native-base";
import { doc, getDoc, getDocs, collection, addDoc} from "firebase/firestore";
import {db} from '../firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts } from 'expo-font';

const screenWidth = Dimensions.get('window').width;

import { Colors } from 'react-native/Libraries/NewAppScreen';
import styles from '../style.js'

const VendorScreen = ({navigation}) => {

    const [vendorInfo, setVendorInfo] = useState("");
    const [menu, setMenu] = useState([]);
    const [itemId, setItemId] = useState("");
    const [vendorId, setVendorId] = useState("");
    const [vendorDocRef, setVendorDocRef] = useState();
    const [menuCollectionRef, setMenuCollectionRef] = useState();

    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('vendor-id');
          if (value !== null) {
            console.log("success vendor screen", value)
            return value
            //return value
          }
        } catch (e) {
            console.log(e)
          // error reading value
        }
      };

    useEffect(() => {
        

        // const vendorDocRef = doc(db, "vendor", "5Ln5vKIXNa7ZNshoMDTQ");
        // const menuCollectionRef = collection(vendorDocRef, "Menu");
        
        const getVendor = async () => {
            const value = await getData();

            const vendorDocRef = doc(db, "vendor", value);
            const menuCollectionRef = collection(vendorDocRef, "Menu");

            const docSnap = await getDoc(vendorDocRef);

            if (docSnap.exists()) {
                // console.log("Document data:", docSnap.data());
                setVendorInfo(docSnap.data());
                
            } else {
                // docSnap.data() will be undefined in this case
                console.log("No such document!");
                setVendorInfo()
            }
            const menuData = await getDocs(menuCollectionRef);
            setMenu(menuData.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
        };
        getVendor();

    }, []);

    const storeData = async (value) => {
        try {
          await AsyncStorage.setItem('item-id', value);
          console.log("success vendor screen storage", value)
          navigation.navigate('ItemScreen')

        } catch (e) {
          // saving error
        }
      };
      
    return (

        <SafeAreaView style={styles.layout}>
            <View style={styles.header}>
                <Text style={styles.headerText}>JipBap</Text>
                <Pressable onPress={() => navigation.navigate('CartScreen')}>
                    <Image style={{ height: 40, marginLeft: 50, justifyContent: "flex-end"}} source={require('../assets/cart.png')} alt="cart"/>
                </Pressable>
            </View>

            {/* <Pressable onPress={getVendor}>
                <Text>get vendor</Text>
            </Pressable> */}

            <ScrollView width="100%" showsVerticalScrollIndicator={false}>
                
                <View style={styles.container}>
                <Image source={require("../assets/images/cucumber.jpg")} 
                        alt="cucumber image" 
                        w="100%" 
                        h="100%" 
                        resizeMode="contain"
                />

                <View style={{ width:"100%", flexDirection:'row'}}>
                     <View style={styles.container}>
                     <Text style={styles.subheading}>{vendorInfo.name}</Text>
                    </View>

                    <View style={styles.container}>
                     <Text style={[styles.bodytext, {textAlign: 'right'}]}>{vendorInfo.location}</Text>
                     </View>
                </View>
                <View style={[styles.container, {paddingBottom: 10}]}>
                     <Text style={styles.subheadingTwo}>Information:</Text>
                     <Text style={styles.bodytext}>{vendorInfo.description}</Text>
                 </View>
                 </View>

                 {/* contact info, to come*/}
                 {/* MENU */}
                <Text style={[styles.headerTwoText, {textAlign: 'center'}]} >Menu</Text>
                    <View >

                    {menu.map((item) => {
                        return(
                        <View key={item.id}>
                        <Pressable style={styles.pressable} onPress={() => storeData(item.id)}>
                        
                        <Image source={require("../assets/images/banchan.jpg")} 
                               alt="banchan1"
                               w="full"
                               h={24}
                               resizeMode="contain"/>
                        <Text styles={styles.headerTwoText}>{item.name}</Text>
                        </Pressable>
                        </View>
                        );
                   
                    })}
                    
                    </View>

            </ScrollView>
        </SafeAreaView>

    );
}

export {VendorScreen}