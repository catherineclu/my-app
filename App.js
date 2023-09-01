import * as React from 'react';
import { useEffect, useState, useMemo } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from './screens/home';
import {VendorScreen} from './screens/vendor';
import {CartScreen} from './screens/cart';
import {LoginScreen} from './screens/logins';
import {ItemScreen} from './screens/item';
import { CheckoutScreen } from './screens/checkout';
import { NewLoginScreen } from './screens/login';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {useFonts} from "expo-font";
import { initStripe } from '@stripe/stripe-react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {TranslatorProvider} from 'react-native-translator' // here


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = (route, color) => {
    let iconName;
  
    switch (route.name) {
      case 'Home':
        iconName = 'home';
        break;
      case 'Cart':
        iconName = 'shoppingcart';
        break;
      default:
        break;
    }
    return <Icon name={iconName} color={color} size={24} />;
}

const MyTab = () => {
    return (
        <Tab.Navigator screenOptions={({route}) => ({
            tabBarIcon: ({color}) => screenOptions(route, color),
          })} tabBarOptions={{
            activeTintColor: '#1D7151',
            inactiveTintColor: '#8CD195',
            style: {
              borderTopColor: '#66666666',
              backgroundColor: 'transparent',
              elevation: 0,
            },
          }}> 
            <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
            <Tab.Screen name="Cart" component={CartScreen} options={{ headerShown: false }}/>
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
            setHomeRoute("Main")
            
        } else {
            console.log("signed out")
            setHomeRoute("NewLoginScreen")
            
        // No user is signed in.
        }
        console.log(homeRoute)
    }, [])

    useEffect(() => {
        initStripe({
          publishableKey: "pk_test_51NcuFEGCn9Upn7WMRkokFnh1gXtJigvFeeRqUwwmSDWmXGDq4tzsbdveQb5jOnauAFi4F7hwoHvSDjQhyPOxhUdw00d3EqDDL6",
          merchantIdentifier: 'merchant.identifier',
          urlScheme: "your-url-scheme",
        });
      }, []);
    
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
        'Varela': require('./assets/fonts/VarelaRound-Regular.ttf'),
      });
    
      if (!fontsLoaded) {
        return null;
      }

  return (
    <TranslatorProvider>
    <NavigationContainer>
        {console.log(homeRoute)}
    <Stack.Navigator initialRouteName={homeRoute}>
        <Stack.Screen name="Main" component={MyTab} options={{ headerShown: false }}/>
        <Stack.Screen name="VendorScreen" component={VendorScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ItemScreen" component={ItemScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="NewLoginScreen" component={NewLoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
    </NavigationContainer>
    </TranslatorProvider>
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
