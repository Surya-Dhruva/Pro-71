import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBcnGFh5BBVoYsbNxmGqiLvLgzLuewHzTc",
    authDomain: "e-ride-stage-4-54ad1.firebaseapp.com",
    projectId: "e-ride-stage-4-54ad1",
    storageBucket: "e-ride-stage-4-54ad1.appspot.com",
    messagingSenderId: "629023779981",
    appId: "1:629023779981:web:a799db6a08b67c3ed306c4"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
