import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export const HomeScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>
                Home Screen!
            </Text>
            <Button title="Go To Item Page" onPress={() => navigation.navigate('ItemScreen')}/>
        </View>
    );
}

