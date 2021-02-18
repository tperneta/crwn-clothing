import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB2LEYO3SY_xYXa9HmrNSYI5TwfWRpgA2I",
    authDomain: "crwn-db-9fed2.firebaseapp.com",
    projectId: "crwn-db-9fed2",
    storageBucket: "crwn-db-9fed2.appspot.com",
    messagingSenderId: "614413117196",
    appId: "1:614413117196:web:d67a463091f041fb904b29",
    measurementId: "G-2ZC5218RZM"
 };

 firebase.initializeApp(config);

 export const auth = firebase.auth();
 export const firestore = firebase.firestore();

 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({ prompt: 'select_account' });
 export const signInWithGoogle = () => auth.signInWithPopup(provider);

 export default firebase;