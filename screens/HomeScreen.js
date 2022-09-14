import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {initializeApp} from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyCM-7c0x6bUmTgy5qeA2RW8guzhnzSshEI",
    authDomain: "twitter-app-6e4ba.firebaseapp.com",
    projectId: "twitter-app-6e4ba",
    storageBucket: "twitter-app-6e4ba.appspot.com",
    messagingSenderId: "859807224579",
    appId: "1:859807224579:web:dfb4e82a721d0ab73b4f36"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth();



const HomeScreen = () => {
    const navigation = useNavigation()
    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            navigation.replace("Login")
        })
        .catch(error => alert(error.message))
    }
    return (
        <View style={styles.container}>
        <Text>Email: {auth.currentUser?.email}</Text>
        <TouchableOpacity
          onPress={handleSignOut}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})