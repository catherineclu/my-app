import * as React from 'react';
import { useEffect, useState, useMemo } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
/*import { StyleSheet, Text, View } from 'react-native';*/
import { HomeScreen } from './screens/home';
import {VendorScreen} from './screens/vendor';
import {CartScreen} from './screens/cart';
import {LoginScreen} from './screens/logins';
import {ItemScreen} from './screens/item';
import { CheckoutScreen } from './screens/checkout';
import { NewLoginScreen } from './screens/login';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {useFonts} from "expo-font";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
            <Tab.Screen name="CartScreen" component={CartScreen} options={{ headerShown: false }}/>
        </Tab.Navigator>
    );
}

const MyStack = () => {
    
    const auth = getAuth();
    const user = auth.currentUser;
    const [homeRoute, setHomeRoute] = useState('');
    
    useMemo(()=>{
        if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // ...
            console.log("signed in")
            setHomeRoute("HomeScreen")
            
        } else {
            console.log("signed out")
            setHomeRoute("NewLoginScreen")
            
        // No user is signed in.
        }
        console.log(homeRoute)
    }, [])

    
    // onAuthStateChanged(auth, (user) => {
    // if (user) {
    //     const uid = user.uid;
    //     
    //     // ...
    // } else {
    //     // User is signed out
    //     // ...
    //     
    // }
    // });

    const [fontsLoaded] = useFonts({
        'Fredoka': require('./assets/fonts/fredoka-one.one-regular.ttf'),
      });
    
      if (!fontsLoaded) {
        return null;
      }

  return (
    <NavigationContainer>
        {console.log(homeRoute)}
      <Stack.Navigator initialRouteName={homeRoute}>
        <Stack.Screen name="HomeScreen" component={MyTab} options={{ headerShown: false }}/>
        <Stack.Screen name="VendorScreen" component={VendorScreen}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ItemScreen" component={ItemScreen}/>
        <Stack.Screen name="NewLoginScreen" component={NewLoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="CheckoutScreen" component={CheckoutScreen}/>
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
