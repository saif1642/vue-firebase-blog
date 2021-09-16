import * as firebase from "firebase/app";
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAZiGdXYUKF91xJLPIg7umVxPZOzs32eFU",
    authDomain: "vuefireblog.firebaseapp.com",
    projectId: "vuefireblog",
    storageBucket: "vuefireblog.appspot.com",
    messagingSenderId: "428224529518",
    appId: "1:428224529518:web:274c992c09439eabecd27f",
    measurementId: "G-QLB4KRPFFY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FindValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();