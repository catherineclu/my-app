import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Counter = () => {
  const [quantity, setQuantity] = useState(0);

  // ...component logic

    const increment = () => {
        setQuantity(quantity + 1);
    };
  
    const decrement = () => {
        if (quantity > 0) {
        setQuantity(quantity - 1);
        }
    };

  return (
    <View>
    <Text>Quantity: {quantity}</Text>
    <Button title="+" onPress={increment} />
    <Button title="-" onPress={decrement} />
  </View>
  );
};


export default Counter;