import React from 'react';
import { Dimensions, ScrollView, Pressable, StyleSheet, SafeAreaView, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, Flex} from "native-base";


const screenWidth = Dimensions.get('window').width;

import { Colors } from 'react-native/Libraries/NewAppScreen';
import styles from '../style.js'

export const VendorScreen = ({navigation}) => {
    return (

        <SafeAreaView style={styles.layout}>
            
            <View style={styles.header}>
                <Text style={{fontSize: 30, fontWeight: "bold", textAlign: "center", marginLeft: 110}}>[App Name]</Text>
                <Pressable onPress={() => navigation.navigate('CartScreen')}>
                    <Image style={{width: 40, height: 40, marginLeft: 50, justifyContent: "flex-end"}} source={require('../assets/cart.png')} alt="cart"/>
                </Pressable>
            </View>

            
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
                     <Text style={styles.heading}>[Vendor]</Text>
                    </View>

                    <View style={itemstyles.container}>
                     <Text style={[styles.bodytext, {textAlign: 'right'}]}>[Cost], [Location]</Text>
                     </View>
                </View>
                <View style={itemstyles.container}>
                     <Text style={styles.subheading}>Information:</Text>
                     <Text style={styles.bodytext}>[Vendor Description]</Text>
                 </View>
                 </View>
                 {/* contact info, to come*/}
                 {/* MENU */}
                <Text style={[styles.heading, {textAlign: 'center'}]} onPress={() => navigation.navigate('ItemScreen')}>Menu</Text>
                    <View>
                     <Pressable style={itemstyles.pressable} onPress={() => navigation.navigate('ItemScreen')}>
                        
                         <Image source={require("../assets/images/banchan.jpg")} 
                                alt="banchan1"
                                w="full"
                                h={24}
                                resizeMode="contain"/>
                         <Text>Item Name</Text>
                        
                     </Pressable>
                     <Pressable style={itemstyles.pressable} onPress={() => navigation.navigate('ItemScreen')}>
                         <Image source={require("../assets/images/banchan.jpg")} 
                                alt="banchan1"
                                w="full"
                                h={24}
                                resizeMode="contain"/>
                         <Text>Item Name</Text>
                     </Pressable>
                     <Pressable style={itemstyles.pressable} onPress={() => navigation.navigate('ItemScreen')}>
                         <Image source={require("../assets/images/banchan.jpg")} 
                                alt="banchan1"
                                width="100%"
                                h={24}
                                resizeMode="contain"/>
                         <Text>Item Name</Text>
                     </Pressable>
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