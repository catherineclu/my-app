import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
/*import { StyleSheet, Text, View } from 'react-native';*/
import { HomeScreen } from './screens/home';
import {VendorScreen} from './screens/vendor';
import {CartScreen} from './screens/cart';
import {LoginScreen} from './screens/logins';


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ItemScreen" component={VendorScreen} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        
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
