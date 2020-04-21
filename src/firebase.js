import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBzbuftaYsI5FmyE91IvRmo1vd3JJLVQms",
    authDomain: "react-slack-clone-ee256.firebaseapp.com",
    databaseURL: "https://react-slack-clone-ee256.firebaseio.com",
    projectId: "react-slack-clone-ee256",
    storageBucket: "react-slack-clone-ee256.appspot.com",
    messagingSenderId: "680317364032",
    appId: "1:680317364032:web:2989b6cc59cc5b25433ca5",
    measurementId: "G-S8VR2PJL0D"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;