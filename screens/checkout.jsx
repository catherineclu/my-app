import React, {useState} from "react"
import { SafeAreaView, View, Text, TouchableOpacity, Image } from "react-native";
import { CardField, useStripe, useConfirmPayment } from '@stripe/stripe-react-native';
import styles from '../style';
import Icon from 'react-native-vector-icons/AntDesign';
import { db } from '../firebaseConfig';
import { doc, setDoc, collection, addDoc} from 'firebase/firestore';
import { auth } from '../firebaseConfig.js';



export const CheckoutScreen = ({navigation}) => {
    const [errorMessage, setErrorMessage] = useState("")
    const {confirmPayment, loading} = useConfirmPayment();
    // ...

        
    const API_URL = 'server.js'
    const fetchPaymentIntentClientSecret = async () => {
        const response = await fetch(`${API_URL}/create-payment-intent`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            currency: 'usd',
          }),
        });
        const {clientSecret} = await response.json();
    
        return clientSecret;
      };
    
      const submitOrder = async () => {
        await addDoc(collection(db, "orders"), {
            email: auth.currentUser.email,
          });

        console.log("added order")
    }
      const handlePayPress = async () => {
        // Gather the customer's billing information (for example, email)
        const billingDetails = {
          email: 'jenny.rosen@example.com',
        };
    
        // Fetch the intent client secret from the backend
        const clientSecret = await fetchPaymentIntentClientSecret();
    
        // Confirm the payment with the card details
        const {paymentIntent, error} = await confirmPayment(clientSecret, {
          paymentMethodType: 'Card',
          paymentMethodData: {
            billingDetails,
          },
        });

        
    
        if (error) {
          console.log('Payment confirmation error', error);
          showError(error)

        } else if (paymentIntent) {
          console.log('Success from promise', paymentIntent);
        }

        const showError = (re) => {
            setErrorMessage(re)
            .then((error)=>{ //raises a type error, I don't know why.
                navigation.replace('NewLoginScreen');
                console.log(errorMessage);
            })
            .catch ((error)=>{
                console.log(error)
            })
        };
        
      };

  return (
    <SafeAreaView style={styles.layout}>
        <View style={[styles.header, {justifyContent: 'space-between'}]}>
            <Icon marginLeft={10} name="left" size={25} color="#fffdf0" onPress={() => navigation.navigate('Main', { screen: 'CartScreen' })} />
            <View style={{flexDirection: "row"}}>
                    <Text onPress={() => navigation.navigate('Main')} style={styles.headerText}>JipBap</Text>
                    <Image style={styles.logo} source={require('../assets/logo.png')} />
            </View>
            <Icon marginRight={10} name="left" size={25} color="#1D7151" />

        </View>
        <Text style={styles.bodytext}>Card Information</Text>
      <CardField
        postalCodeEnabled={true}
        placeholders={{
          number: '4242 4242 4242 4242',
        }}
        cardStyle={{
          backgroundColor: '#FFFFFF',
          textColor: '#000000',
        }}
        style={{
          width: '100%',
          height: 50,
          marginBottom: 15,
        }}
        onCardChange={(cardDetails) => {
          console.log('cardDetails', cardDetails);
        }}
        onFocus={(focusedField) => {
          console.log('focusField', focusedField);
        }}
      />
      <Text style={styles.errortext}>{errorMessage}</Text>
        <TouchableOpacity
                        onPress={submitOrder} 
                        style={[styles.button, {width: '99%'}]}>
                        <Text style={styles.buttonText} >Pay</Text>
            </TouchableOpacity>
    </SafeAreaView>
  );
}