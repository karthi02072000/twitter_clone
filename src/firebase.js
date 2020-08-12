import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDcsqTL2syskr8eFNr39xvMIsC_95oJt7Y",
    authDomain: "twitter-b3865.firebaseapp.com",
    databaseURL: "https://twitter-b3865.firebaseio.com",
    projectId: "twitter-b3865",
    storageBucket: "twitter-b3865.appspot.com",
    messagingSenderId: "815905410060",
    appId: "1:815905410060:web:4553940f4574b54f1df229",
    measurementId: "G-VFWTWMZYC3"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  export default db;