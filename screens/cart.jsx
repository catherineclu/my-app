import React, {useState} from 'react';
import { db } from '../firebaseConfig';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView, Text, View, Image, Button} from "react-native";
import { useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore'; // or get doc
import { isReactNative } from '@firebase/util';

export const CartScreen = ({navigation}) => {

    //have a use state variable for the collection
    const [user, setUser] = useState([]);
    //accesses collection
    const userCollectionRef = collection(db, "user")
    
    useEffect(() => {
        //function to access data through use effect async function
        const getUser = async () => {
            try {
            const data = await getDocs(userCollectionRef);
            //sets use state variable to [{attribute: "data", collection_id: "id", etc. }]
            setUser(data.docs.map((doc)=> ({...doc.data(), id: doc.id})));
            }
            catch(e) {
                console.error(e)
            }
            //prints collection use state variable to console
            console.log("user", user); 
        }
        //calls function
        getUser();
    }, [])
    
    
    return (
        <View>
            <Text>Cart</Text>
            <View>
                {/* Following code executes for every document in collection */}
                {user.map((oneuser) => { 
                    return (
                    <View>
                        {/* below code accesses data from a single document for a certain attribute */}
                        <Text>Item 1: {oneuser.cart[0]}</Text>
                    </View>
                    );

                })}
            </View>
            {/* <Button>"Create User"</Button> */}
        </View>
    );
}
