// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import firebase from 'firebase';
import { getDatabase } from "firebase/database";

// import firebase from 'firebase/app';
// import 'firebase/firestore'; // 


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {

    databaseURL:"https://fb-crud-11ea8-default-rtdb.firebaseio.com/",
    apiKey: "AIzaSyACHZAQpnwSNUH4qBo2Xdgymtqugn5wqz4",
    authDomain: "fb-crud-11ea8.firebaseapp.com",
    projectId: "fb-crud-11ea8",
    storageBucket: "fb-crud-11ea8.appspot.com",
    messagingSenderId: "318984520283",
    appId: "1:318984520283:web:b990338968b96da2c5757e"
  };
  


// const firebase1 = initializeApp(firebaseConfig);
// // const database = getAnalytics(firebase1);
// const database = firebase1.database();

// firebase.initializeApp(firebaseConfig);
// var database = firebase.database();
 
// // export default database;
//  const app1 = initializeApp(firebaseConfig);
//  export default app1;



// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// // Export Firestore instance
// export const firestore = firebase.firestore();
// Initialize Firebase
export  const app1 = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app1);
