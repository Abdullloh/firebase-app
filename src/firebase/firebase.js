// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBhQMiaBfse1-wWaeT5m-1nUflX6yXpM8c",
    authDomain: "booklover-b27d4.firebaseapp.com",
    projectId: "booklover-b27d4",
    storageBucket: "booklover-b27d4.appspot.com",
    messagingSenderId: "147769135134",
    appId: "1:147769135134:web:4a390e949bf1d4450e9e0f",
    measurementId: "G-CM9MRX3JSS"
  };
  const app = firebase.initializeApp(firebaseConfig)
  const db = app.firestore()
  export {app as default,db} 