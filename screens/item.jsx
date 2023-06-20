import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export const ItemScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>
                Welcome to item page!
            </Text>
        </View>
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