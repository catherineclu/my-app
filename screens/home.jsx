import React from 'react';
import { View, Text, Button, Image, SafeAreaView, StyleSheet, Dimensions, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.layout}>
            <View style={styles.header}>
                <Text style={{fontSize: 30, fontWeight: "bold", textAlign: "center", marginLeft: 110}}>[App Name]</Text>
                <Pressable onPress={() => navigation.navigate('CartScreen')}>
                    <Image style={{width: 40, height: 40, marginLeft: 50, justifyContent: "flex-end"}} source={require('/Users/catherinelu/my-app/assets/cart.png')}/>
                </Pressable>
                
            </View>
            <Pressable style={styles.vendor} onPress={() => navigation.navigate('ItemScreen')}>
                <Image style={{width: "100%", height: "70%"}} source={require("/Users/catherinelu/my-app/assets/dumplings.jpeg")}/>
                <View style={{height: "30%", backgroundColor: "white", flexDirection: "row", marginTop: 5}}>
                    <View style={{marginLeft: 5, flex: 1}}>
                        <Text style={{fontSize: 15, fontWeight: "bold"}}>[Vendor Name]</Text>
                        <Text>[Cuisine Type]</Text>
                    </View>
                    <View style={{alignItems: "flex-end", marginRight: 5, flex: 1}}>
                        <Text>[Location]</Text>
                        <Text>[Pickup Time]</Text>
                    </View>
                </View>
            </Pressable>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 75,
        backgroundColor: "#FFF9A6",
        alignItems: 'center',
        flexDirection: "row",
    },
    layout: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    vendor: {
        width: 350,
        height: 250,
        backgroundColor: 'white',
        margin: 16,
        borderRadius: 2,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 1,
        shadowOffset: { height: 1, width: 0.3 }

    }
  })

