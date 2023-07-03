import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, Box, ScrollView, Text, View, Image, Flex} from "native-base";

export const CartScreen = ({navigation}) => {
    return (
        <NativeBaseProvider>
        <View>
            <Text>Cart</Text>
        </View>
        </NativeBaseProvider>
    );
}