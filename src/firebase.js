import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDD21m3ofSd64h9sM7-Nrj_G4NC7czEX3g",
    authDomain: "react-my-burger-5c717.firebaseapp.com",
    databaseURL: "https://react-my-burger-5c717.firebaseio.com",
    projectId: "react-my-burger-5c717",
    storageBucket: "react-my-burger-5c717.appspot.com",
    messagingSenderId: "696562471917",
    appId: "1:696562471917:web:f78a4652ac5b708dbe4de4",
    measurementId: "G-XWBPX27KG8"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase;