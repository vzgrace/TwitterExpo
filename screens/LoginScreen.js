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
import Logo from '../components/Logo'


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

        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Registered with:', user.email);
        })
        .catch(error => alert(error.message))
    }

    const handleSignIn = () =>{

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
           
        >
         
            <View style={styles.top}>
                <Text style={styles.TwitterText}>
                    Twitter Analysis
                </Text>
            </View>
            <View style={styles.otherstuff}>
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
                <View style={styles.buttonview}>
                <TouchableOpacity
                    onPress={handleSignIn}
                    style = {styles.loginButton}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.buttonview}>
                <TouchableOpacity
                    onPress={handleSignUp}
                    style = {[styles.registerButton]}
                >
                    <Text style={styles.registerbuttonText}>Register</Text>
                </TouchableOpacity>
                </View>
            </View>
            </View>
 
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        // justifyContent: 'center',
        alignItems:'center',
        flex: 1
    },
    otherstuff:{
        marginTop: 200,
        
        flex: 1
    },
    inputCont: {
        width: 230,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#1DA1F2'
    },
    buttonCont: {
        padding: 10,
        flexDirection: 'row'
    },
    buttonsCont:{
        justifyContent: 'center',
        flexDirection: 'row'
    },
    loginButton: {
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#1DA1F2',
        width: 65,
        height: 25,
        alignItems: 'center',
    },
    registerButton: {
        borderRadius: 15,
        // borderWidth: 1,
        // borderColor: 'gray',
        width: 80,
        height: 25,
        alignItems: 'center',
        backgroundColor: '#1DA1F2',
    },
    buttonview:{
        padding: 5
    },
    buttonText: {
        alignSelf: 'center', 
        paddingTop: 5,
        paddingBottom: 5,
        color: "#1DA1F2",
        fontSize: '12'
    },
    registerbuttonText:{
        alignSelf: 'center', 
        paddingTop: 5,
        paddingBottom: 5,
        color: 'white',
        fontSize: '12'
    },
    top: {
        alignSelf: 'stretch',
        height: 120,
        flexDirection: 'row',
        backgroundColor: '#1DA1F2',
        alignItems: 'center',
        // centers items vertically
        justifyContent: 'center',
        // centers items horizontally
        
    },
    TwitterText: {
        fontFamily: 'Gill Sans',
        color: "white",
        fontSize: 30

    }
})