import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, Box, ScrollView, Text, View, Image, Flex} from "native-base";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import styles from '../style.js'

export const ItemScreen = ({navigation}) => {
    return (
        <NativeBaseProvider>
        <View style={styles.layout}> 
        <View style={styles.header}>
                <Text style={{fontSize: 30, fontWeight: "bold", textAlign: "center", marginLeft: 110}}>[App Name]</Text>
                <Pressable onPress={() => navigation.navigate('CartScreen')}>
                    <Image style={{width: 40, height: 40, marginLeft: 50, justifyContent: "flex-end"}} source={require('../assets/cart.png')} alt="cart"/>
                </Pressable>
                
        </View>
        <Box safeArea flex={1}>
            {/* header - lowkey wasnt working anyways :( */}
            {/* <View style={styles.header}>
            <Text>Header, we might not need this so we can delete</Text>
            </View> */}
            <ScrollView px={5} showsVerticalScrollIndicator={false} >
                <Image source={require("../assets/images/cucumber.jpg")} 
                        alt="cucumber image" 
                        w="full" 
                        h={300} 
                        resizeMode="contain"
                        style={itemstyles.container}
                />
                {/* first line of text + vendor */}
                {/* figure out how to make enter only on new words */}
                <View style={{flexDirection:'row'}}>
                    <View style={itemstyles.container}>
                    <Text style={styles.heading}>[Vendor]</Text>
                    </View>
                {/* first line of text + cost/location text */}
                    <View style={itemstyles.container}>
                    <Text style={[styles.bodytext, {textAlign: 'right'}]}>[Cost], [Location]</Text>
                    </View>
                </View>
                {/* vendor information */}
                <View style={itemstyles.container}>
                    <Text style={styles.subheading}>Information:</Text>
                    <Text style={styles.bodytext}>[Vendor Description]</Text>
                </View>
                {/* contact info, to come*/}
                
                {/* MENU */}
                <Text style={[styles.heading, {textAlign: 'center'}]}>Menu</Text>
                <Flex flexWrap= "wrap"
                        direction= "row"
                        justifyContent= "space-between"
                        px= {6}>
                    {/* Pressables are causing problems */}
                    <Pressable style={itemstyles.pressable}>
                    <Box>
                        <Image source={require("../assets/images/banchan.jpg")} 
                               alt="banchan1"
                               w="full"
                               h={24}
                               resizeMode="contain"/>
                        <Text>Item Name</Text>
                    </Box>
                    </Pressable>

                    <Pressable style={itemstyles.pressable}>
                        <Box>
                        <Image source={require("../assets/images/banchan.jpg")} 
                               alt="banchan2"
                               w="full"
                               h={24}
                               resizeMode="contain"/>
                        <Text>Item Name</Text>
                        </Box>
                    </Pressable>

                    <Pressable style={itemstyles.pressable}>
                        <Box>
                        <Image source={require("../assets/images/banchan.jpg")} 
                               alt="banchan2"
                               w="full"
                               h={24}
                               resizeMode="contain"/>
                        <Text>Item Name</Text>
                        </Box>
                    </Pressable>

                    <Pressable style={itemstyles.pressable}>
                        <Box>
                        <Image source={require("../assets/images/banchan.jpg")} 
                               alt="banchan2"
                               w="full"
                               h={24}
                               resizeMode="contain"/>
                        <Text>Item Name</Text>
                        </Box>
                    </Pressable>
                    
                    <Pressable style={itemstyles.pressable}>
                        <Box>
                        <Image source={require("../assets/images/banchan.jpg")} 
                               alt="banchan2"
                               w="full"
                               h={24}
                               resizeMode="contain"/>
                        <Text>Item Name</Text>
                        </Box>
                    </Pressable>
                    
                    <Pressable style={itemstyles.pressable}>
                        <Box>
                        <Image source={require("../assets/images/banchan.jpg")} 
                               alt="banchan2"
                               w="full"
                               h={24}
                               resizeMode="contain"/>
                        <Text>Item Name</Text>
                        </Box>
                    </Pressable>
                </Flex>
            </ScrollView>
        </Box>
        </View>
        </NativeBaseProvider>

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
        margin: 2,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10
    },
    
});