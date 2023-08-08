import React, { useEffect, useState } from 'react';
import { Dimensions, ScrollView, Pressable, StyleSheet, SafeAreaView, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, Flex} from "native-base";
import { doc, getDoc, getDocs, collection, addDoc} from "firebase/firestore";
import {db} from '../firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
          const value = await AsyncStorage.getItem('my-key');
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

    async function itemClick() {
        // setItemId("hello"); 
        // console.log(itemId)
        navigation.navigate('ItemScreen')
    };
      
    return (

        <SafeAreaView style={styles.layout}>
            <View style={styles.header}>
                <Text style={{fontSize: 30, fontWeight: "bold", textAlign: "center", marginLeft: 110}}>[App Name]</Text>
                <Pressable onPress={() => navigation.navigate('CartScreen')}>
                    <Image style={{ height: 40, marginLeft: 50, justifyContent: "flex-end"}} source={require('../assets/cart.png')} alt="cart"/>
                </Pressable>
            </View>

            {/* <Pressable onPress={getVendor}>
                <Text>get vendor</Text>
            </Pressable> */}

            <ScrollView width={screenWidth} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                <Image source={require("../assets/images/cucumber.jpg")} 
                        alt="cucumber image" 
                        w="100%" 
                        h={300} 
                        resizeMode="contain"
                        style={itemstyles.container}
                        
                />

                <View style={{flexDirection:'row'}}>
                     <View style={itemstyles.container}>
                     <Text style={styles.heading}>{vendorInfo.name}</Text>
                    </View>

                    <View style={itemstyles.container}>
                     <Text style={[styles.bodytext, {textAlign: 'right'}]}>{vendorInfo.location}</Text>
                     </View>
                </View>
                <View style={itemstyles.container}>
                     <Text style={styles.subheading}>Information:</Text>
                     <Text style={styles.bodytext}>{vendorInfo.description}</Text>
                 </View>
                 </View>
                 {/* contact info, to come*/}
                 {/* MENU */}
                <Text style={[styles.heading, {textAlign: 'center'}]} onPress={() => navigation.navigate('ItemScreen')}>Menu</Text>
                    <View>

                    {menu.map((item) => {
                        return(
                        <View key={item.id}>
                        <Pressable style={itemstyles.pressable} onPress={itemClick}>
                        
                        <Image source={require("../assets/images/banchan.jpg")} 
                               alt="banchan1"
                               w="full"
                               h={24}
                               resizeMode="contain"/>
                        <Text>{item.name}</Text>
                        </Pressable>
                        </View>
                        );
                   
                    })}
                    
                    </View>

            </ScrollView>
        </SafeAreaView>

    );
}

const itemstyles = StyleSheet.create({
    //can replace with native base container
    container: {
      flex: 1, 
      //backgroundColor: '#fff',
      //alignItems: 'left',
      justifyContent: 'center',
      padding: 10,
      borderColor: 'black',
      borderWidth: 1
    },

    //doesn't like flex here for some reason

    flex: {
        flexWrap: "wrap",
        direction: "row",
        justifyContent: "space-between",
        px: 6
    },
    pressable: {
        w: '47%', 
        backgroundColor: "white",
        rounded: "md",
        shadow: 2,
        pt: 0.3,
        my: 3,
        pb: 2,
        overflow: "hidden",
        padding: 10,
        margin: 10,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
    },
    
});

export {VendorScreen}