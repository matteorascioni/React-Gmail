import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBmXSRnVJMxit9hkYFHuyqnw8xafmyyamg",
    authDomain: "app-27768.firebaseapp.com",
    projectId: "app-27768",
    storageBucket: "app-27768.appspot.com",
    messagingSenderId: "97806541430",
    appId: "1:97806541430:web:6b2a912343b9937253b557"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };