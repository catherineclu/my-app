import * as React from 'react';
import { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
/*import { StyleSheet, Text, View } from 'react-native';*/
import { HomeScreen } from './screens/home';
import {VendorScreen} from './screens/vendor';
import {CartScreen} from './screens/cart';
import {LoginScreen} from './screens/logins';
import {ItemScreen} from './screens/item';
import { NewLoginScreen } from './screens/login';
import { getAuth, onAuthStateChanged } from "firebase/auth";


const Stack = createNativeStackNavigator();

const MyStack = () => {
    const auth = getAuth();
    const[homeRoute, setHomeRoute] = useState('');
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    setHomeRoute("HomeScreen")
    // ...
  } else {
    // User is signed out
    // ...
    setHomeRoute("NewLoginScreen")
  }
});


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={homeRoute}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="VendorScreen" component={VendorScreen} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ItemScreen" component={ItemScreen} />
        <Stack.Screen name="NewLoginScreen" component={NewLoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;

/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
    <View style={styles.container}>
      <Text>Welcome to my app!</Text>
      <StatusBar style="auto" />
    </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
