import React, {useEffect, useState} from 'react';
import { KeyboardAvoidingView, View, Text, TextInput, Button, Image, SafeAreaView, StyleSheet, Dimensions, Pressable, TouchableOpacity } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
// import { auth } from '../firebaseConfig.js';
import styles from '../style.js'
import { useNavigation } from '@react-navigation/native';

export const NewLoginScreen = ({navigation}) => {
    return (
        <View>
            <Text>New Login Screen</Text>
        </View>
    );
}