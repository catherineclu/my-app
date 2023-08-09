import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'black',
        //backgroundColor: 'blue',
        flex: 1,
        fontFamily: 'AvenirNext-Regular',
        padding: "2%",
        
    },
    bodytext: {
        flex: 1,
        //backgroundColor: 'red',
        fontFamily: 'AvenirNext-Regular',
        //#bold for now because regular was very thin
        fontWeight: "bold",
        padding: 10
    },
    subheading: {
        fontWeight: 'bold',
        //backgroundColor: 'green',
        padding: 10
    },
    header:{
        //flex: 0.2,
        // justifyContent: 'center',
        // padding: 5,
        width: "100%",
        height: 75,
        backgroundColor: "#FFF9A6",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
    },
    layout: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
});

export default styles;