// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM-7c0x6bUmTgy5qeA2RW8guzhnzSshEI",
  authDomain: "twitter-app-6e4ba.firebaseapp.com",
  projectId: "twitter-app-6e4ba",
  storageBucket: "twitter-app-6e4ba.appspot.com",
  messagingSenderId: "859807224579",
  appId: "1:859807224579:web:dfb4e82a721d0ab73b4f36"
};

// Initialize Firebase
let app = initializeApp(firebaseConfig);
export const auth = getAuth(app)