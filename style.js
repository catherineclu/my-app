import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'white',
        backgroundColor: 'blue',
        flex: 1,
        fontFamily: 'AvenirNext',
        padding: 10,
    },
    bodytext: {
        flex: 1,
        backgroundColor: 'red',
        fontFamily: 'AvenirNext',
        //#bold for now because regular was very thin
        fontWeight: "bold",
        padding: 10
    },
    subheading: {
        fontWeight: 'bold',
        backgroundColor: 'green',
        padding: 10
    },
    header:{
        flex: 0.2,
        backgroundColor: 'magenta',
        //alignItems: 'left',
        justifyContent: 'center',
        padding: 5,
      }
});

export default styles;