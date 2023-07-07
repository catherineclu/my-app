// Import the functions you need from the SDKs you need

// import * as firebase from "firebase";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// import { initializeApp } from "firebase/app"
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfgT6ImCaE4YThmIWb5SPJDmzaP--nFm8",
  authDomain: "my-app-fe62e.firebaseapp.com",
  projectId: "my-app-fe62e",
  storageBucket: "my-app-fe62e.appspot.com",
  messagingSenderId: "852586275930",
  appId: "1:852586275930:web:1f7ec704cc2fd4bb73e463",
  measurementId: "G-Q5BCKX2DL9"
};

// Initialize Firebase

let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}
// const analytics = getAnalytics(app);
//const auth = getAuth(app);

const auth = firebase.auth()

export {auth}