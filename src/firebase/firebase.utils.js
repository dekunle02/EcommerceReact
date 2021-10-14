import * as firebase from "firebase/app";
import {initializeApp} from 'firebase/app'
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA0E9LtEwOIxuJkbDVbbijnLrc_2z1-05w",
    authDomain: "ecommerce-1579c.firebaseapp.com",
    projectId: "ecommerce-1579c",
    storageBucket: "ecommerce-1579c.appspot.com",
    messagingSenderId: "467512756438",
    appId: "1:467512756438:web:ca487abe5e8f597a776177",
    measurementId: "G-59PL5M90EW"
  };

initializeApp(firebaseConfig)
const auth = getAuth()

const provider = new GoogleAuthProvider();
// provider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
}

export {auth};
export default firebase;