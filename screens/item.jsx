import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, Box } from "native-base";

export const ItemScreen = ({navigation}) => {
    return (
        <NativeBaseProvider>
        {/* <View style={styles.container}> */}
            <Box>Welcome to item page</Box>
        {/* </View> */}
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});