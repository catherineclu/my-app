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
        color: 'red',
        backgroundColor: 'blue',
        flex: 1,
        fontFamily: 'Arial',
        padding: 10,
    },
    bodytext: {
        flex: 1,
        backgroundColor: 'red',
        fontFamily: 'Arial',
        padding: 10
    }
});

export default styles;