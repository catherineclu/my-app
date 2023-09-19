import React, {useState, useEffect} from 'react';
import { View, Text, Button, Image, SafeAreaView, StyleSheet, Dimensions, Pressable, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { auth } from '../firebaseConfig';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, getDocs, collection, addDoc} from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
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
    const [vendorImages, setVendorImages] = useState({});

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

    const createImage = async (id) => {
        try {
            // Get a reference to the storage service, which is used to create references in your storage bucket
            const storage = getStorage();

            // Create a reference to the file we want to download
            const imgLink = "images/" + id + ".png"
            console.log("image link", imgLink)
            const imgRef = ref(storage, imgLink);  

            const url = await getDownloadURL(imgRef);
            await setImgurl(url)
            console.log("url", imgurl)

            // // Get the download URL
            // getDownloadURL(imgRef)
            // .then((url) => {
            // // save url somewhere...
            // setImgurl(url)
            // console.log("url", url)
            // })
            // .catch((error) => {
            // // A full list of error codes is available at
            // // https://firebase.google.com/docs/storage/web/handle-errors
            // switch (error.code) {
            //     case 'storage/object-not-found':
            //     // File doesn't exist
            //     break;
            //     case 'storage/unauthorized':
            //     // User doesn't have permission to access the object
            //     break;
            //     case 'storage/canceled':
            //     // User canceled the upload
            //     break;

            //     // ...

            //     case 'storage/unknown':
            //     // Unknown error occurred, inspect the server response
            //     break;
            // }
            // }

            // )
  
          } catch (e) {
            console.log(e)
          }
    }

    useEffect(() => {
        const getVendors = async () => {
            const storage = getStorage();
            const vendorData = await getDocs(vendorCollectionRef);
            const vendorsWithImages = {};
            
            for (const doc of vendorData.docs) {
                const vendor = { ...doc.data(), id: doc.id };
                const imgLink = "images/" + vendor.name + ".png";
                const imgRef = ref(storage, imgLink);

                try {
                    const url = await getDownloadURL(imgRef);
                    vendorsWithImages[vendor.id] = url;
                } catch (error) {
                    // Handle any errors (e.g., image not found)
                    console.error("Error fetching image:", error);
                }
            }

            setVendorImages(vendorsWithImages);
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
                        console.log(vendorImages[vendor.id])
                        return(
            <Pressable style={styles.vendor} key={vendor.id} onPress={() => storeData(vendor.id)}>
                <Image style={styles.vendorImage} source={{ uri: vendorImages[vendor.id] }}/> 
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
