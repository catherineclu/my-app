import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, Box, ScrollView, Text, View, Image} from "native-base";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import styles from '../style.js'

export const ItemScreen = ({navigation}) => {
    return (
        <NativeBaseProvider>
        <Box safeArea flex={1} bg={Colors.white}>Welcome to item page
            <ScrollView px={5} showsVerticalScrollIndicator={false}>
                <Image source={require("../assets/images/cucumber.jpg")} 
                        alt="cucumber image" 
                        w="full" 
                        h={300} 
                        resizeMode="contain"
                />
                <Text style={styles.heading}>Vendor name: The Cucumber Chef</Text>
                <Text>Cost, Location</Text>
                <Text>Menu coming below lol</Text>
            </ScrollView>
        </Box>
        </NativeBaseProvider>
    );
}

const itemstyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});