import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Counter = () => {
    const [quantity, setQuantity] = useState(0);

    const increment = () => {
        setQuantity(quantity + 1);
    };
  
    const decrement = () => {
        if (quantity > 0) {
        setQuantity(quantity - 1);
        }
    };

  return (
    <View style={counterStyles.countercontainer}>
        <Button title="-" style={counterStyles.button} onPress={decrement} />
        <View>
        <Text>{quantity}</Text>
        </View>
        <Button title="+" style={counterStyles.button} onPress={increment} />
  </View>
  );
};

const counterStyles = StyleSheet.create({
    countercontainer:{
        flexDirection: "row",
        backgroundColor: "#FFF9A6",
        width: "40%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    button:{
        flexDirection: 'row',
    }
})

export default Counter;