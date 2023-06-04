// Import the functions you need from the SDKs you need
import { initializeApp   } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPdbUuuIdO9F_ObQgkltW9ayrG8gJG8nk",
  authDomain: "articles-41ca1.firebaseapp.com",
  projectId: "articles-41ca1",
  storageBucket: "articles-41ca1.appspot.com",
  messagingSenderId: "73527839269",
  appId: "1:73527839269:web:d93b7cd7334ce90885cdcc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {app ,auth ,db } 
