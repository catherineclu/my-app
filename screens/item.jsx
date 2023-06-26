import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, Box, ScrollView, Text, View, Image, Flex} from "native-base";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import styles from '../style.js'

export const ItemScreen = ({navigation}) => {
    return (
        <NativeBaseProvider>
        <Box safeArea flex={1} bg={Colors.white}>
            {/* header - lowkey wasnt working anyways :( */}
            <View style={styles.header}>
            <Text>Header, we might not need this so we can delete</Text>
            </View>
            <ScrollView px={5} showsVerticalScrollIndicator={false} style={{backgroundColor: 'orange'}}>
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
                    <Text style={styles.heading}>Cucumber Chef</Text>
                    </View>
                {/* first line of text + cost/location text */}
                    <View style={itemstyles.container}>
                    <Text style={[styles.bodytext, {textAlign: 'right'}]}>Cost, Location</Text>
                    </View>
                </View>
                {/* vendor information */}
                <View style={itemstyles.container}>
                    <Text style={styles.subheading}>Information:</Text>
                    <Text style={styles.bodytext}>The Nile is a river in Egypt.</Text>
                </View>
                {/* contact info, to come*/}
                
                {/* MENU */}
                <Text style={[styles.heading, {textAlign: 'center'}]}>Menu</Text>
                <Flex style={itemstyles.flex}>
                <Image source={require("../assets/images/banchan.jpg")} 
                               alt="banchan1"
                               w="full"
                               h={24}
                               resizeMode="contain"/>
                        <Text>Item Name</Text>
                        <Image source={require("../assets/images/banchan.jpg")} 
                               alt="banchan2"
                               w="full"
                               h={24}
                               resizeMode="contain"/>
                        <Text>Item Name</Text>


                    {/* Pressables are causing problems */}
                    {/* <Pressable style={itemstyles.pressable}>
                    </Pressable>
                    <Pressable style={itemstyles.pressable}>
                    </Pressable> */}
                </Flex>
            </ScrollView>
        </Box>
        </NativeBaseProvider>
    );
}

const itemstyles = StyleSheet.create({
    //can replace with native base container
    container: {
      flex: 1,
      backgroundColor: '#fff',
      //alignItems: 'left',
      justifyContent: 'center',
      padding: 10,
      borderColor: 'black',
      borderWidth: 1
    },
    flex: {
        flexWrap: "wrap",
        direction: "row",
        justifyContent: "space-between",
        px: 6
    },
    pressable: {
        w: '47%', 
        bg: "white",
        rounded: "md",
        shadow: 2,
        pt: 0.3,
        my: 3,
        pb: 2,
        overflow: "hidden"
    }
});