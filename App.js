import * as React from 'react';
import { useEffect, useState, useMemo } from 'react';
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
import {useFonts} from "expo-font";


const Stack = createNativeStackNavigator();

const MyStack = () => {
    // const [fontsLoaded] = useFonts({
    //     'Fredoka': require('./assets/fonts/fredoka-one.one-regular.ttf'),
    //   });
    
    //   if (!fontsLoaded) {
    //     return null;
    //   }
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


  return (
    <NavigationContainer>
        {console.log(homeRoute)}
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
