import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    //GENERAL CONTAINERS

    layout: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    container: {
        flex: 1,
        //backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },

    header: {
        width: "100%",
        height: 75,
        backgroundColor: "#1D7151",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
    },

    //TEXT

    headerText: {
        fontSize: 30, 
        fontWeight: "bold", 
        fontFamily: 'Fredoka',
        color: "#fffdf0",
    },
    headerTwoText: {
        fontSize: 30, 
        fontWeight: "bold", 
        fontFamily: 'Fredoka',
        color: "black",
    },

    //old heading text - get rid of this
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'black',
        backgroundColor: 'red',
        flex: 1,
        fontFamily: 'AvenirNext-Regular',
        padding: "2%",
        
    },

    subheading: {
        fontWeight: 'bold',
        //backgroundColor: 'green',
        fontFamily: 'Fredoka',
        fontSize: 25,
        padding: 10
    },
    subheadingTwo: {
        fontWeight: 'bold',
        //backgroundColor: 'green',
        fontFamily: 'Varela',
        fontSize: 20,
        padding: 10
    },

    bodytext: {
        fontFamily: 'Varela',
        padding: 5,
        fontSize: 18,
        margin: 10
    },


    // TEXT INPUT

    inputContainer: {
        width: '80%', 
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius:10,
        marginTop: 5,
        fontFamily: 'Varela',
    },

    //BUTTONS

    //OLD STUFF - I HOPE WE DONT NEED THIS

    // button: {
    //     backgroundColor: "blue",
    //     width: "100%",
    //     padding: 15,
    //     borderRadius: 10,
    //     alignItems: "center"
    // },
    // buttonText:{
    //     color: "black",
    //     fontWeight: "700",
    //     fontSize: 16
    // },

    buttonContainer: {
        width: '40%', //probably need to adjust this
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },

    //Green button
    button: {
        backgroundColor: "#1D7151",
        width: "100%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    buttonText:{
        color: "#fffdf0",
        fontWeight: "700",
        fontSize: 16,
        fontFamily: "Fredoka",
    },

    //Eggshell button
    buttonOutline: {
        backgroundColor: "#fffdf0",
        marginTop: 5,
        borderColor: "#1D7151",
        borderWidth: 1, 
    },
    buttonOutlineText: {
        color: "#1D7151",
        fontWeight: "700",
        fontSize: 16,
        fontFamily: "Fredoka",
    },

    //VENDOR CARDS 
    vendor: {
        width: 350,
        height: 200,
        backgroundColor: '#fffdf0',
        margin: 16,
        borderRadius: 15,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 1,
        shadowOffset: { height: 1, width: 0.3 },
    },
    vendorImage:{
        width: "100%", 
        height: "70%",
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },

    vendorTextContainer: {
        height: "20%", 
        backgroundColor: "#fffdf0", 
        flexDirection: "row", 
        marginTop: 10,
        borderRadius: 15 //fix later
    },
    vendorName:{
        fontSize: 20, 
        fontWeight: "bold",
        fontFamily: "Fredoka"
    },

    //Pressables for a simpler card (like items)
    pressable: {
        width: '80%', 
        backgroundColor: "#fffdf0",
        borderColor: "#1D7151",
        borderWidth: 1, 
        shadow: 2,
        // pt: 0.3,
        // my: 3,
        // pb: 2,
        overflow: "hidden",
        padding: 10,
        margin: 10,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
        justifyContent: 'center',
    },
    incr: {
        
    },

    //COMING SOON - general image styling

});

export default styles;