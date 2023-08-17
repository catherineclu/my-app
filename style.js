import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 75,
        backgroundColor: "#1D7151",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
    },
    headerText: {
        fontSize: 30, 
        fontWeight: "bold", 
        fontFamily: 'Fredoka',
        color: "#f6f1d1",
    },
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
    // header:{
    //     width: "100%",
    //     height: 75,
    //     backgroundColor: "#FFF9A6",
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     flexDirection: "row",
    // },
    layout: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        //backgroundColor: "#cbf6d0" //the green and eggshell looks bad
    },
    button: {
        backgroundColor: "blue",
        width: "100%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center"
    },
    buttonText:{
        color: "black",
        fontWeight: "700",
        fontSize: 16
    },
});

export default styles;