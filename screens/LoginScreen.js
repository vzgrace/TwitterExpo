import React, {useEffect, useState} from 'react'
import {
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    TouchableOpacity,
    TextInput
} from 'react-native'
// import { auth } from '../firebase'
import {initializeApp} from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import { useNavigation } from '@react-navigation/native';

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


const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation()
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                navigation.replace("Home") 
            }
        })

        return unsubscribe
    }, [])

    const handleSignUp = () =>{
        // auth()
        //     .createUserWithEmailAndPassword(email,password)
        //     .then(userCredentials => {
        //         const user = userCredentials.user;
        //         console.log(user.email);
        //     })
        //     .catch(error => alert(error.message))

        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Registered with:', user.email);
        })
        .catch(error => alert(error.message))
    }

    const handleSignIn = () =>{
        // auth()
        //     .createUserWithEmailAndPassword(email,password)
        //     .then(userCredentials => {
        //         const user = userCredentials.user;
        //         console.log(user.email);
        //     })
        //     .catch(error => alert(error.message))

        signInWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged in with:', user.email);
        })
        .catch(error => alert(error.message))
    }



    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <View style ={styles.inputCont}>
                <TextInput
                    placeholder='Email'
                    value = {email}
                    onChangeText= {text => setEmail(text)}
                    style={styles.input}
                ></TextInput>
            </View>
            <View style = {styles.inputCont}>
                <TextInput
                    placeholder='Password'
                    value = {password}
                    onChangeText= {text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                ></TextInput>
            </View>
            <View style={styles.buttonCont}>
                <TouchableOpacity
                    onPress={handleSignIn}
                    style = {styles.button}
                >
                    <Text style={styles.button}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleSignUp}
                    style = {[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems:'center',
        flex: 1
    },
    inputCont: {
        width: 230,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    },
    buttonCont: {
        padding: 5
    }
})