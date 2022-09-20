import React, {useEffect, useState} from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Keyboard
} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {initializeApp} from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCM-7c0x6bUmTgy5qeA2RW8guzhnzSshEI",
    authDomain: "twitter-app-6e4ba.firebaseapp.com",
    projectId: "twitter-app-6e4ba",
    storageBucket: "twitter-app-6e4ba.appspot.com",
    messagingSenderId: "859807224579",
    appId: "1:859807224579:web:dfb4e82a721d0ab73b4f36"
  };

const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth();



const HomeScreen = () => {
  //database stuff
  const todoRef = firebase.firestore().collection('searchUserData');

  //whatever the user inputs is stored in "searchUser"
  const [searchUser, setsearchUser] = useState('')
    const navigation = useNavigation()
    //sign out button functionality
    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            navigation.replace("Login")
        })
        .catch(error => alert(error.message))
    }

    //This function is triggered when search button is pressed
    const handleSearch = () => {
   
      //check if we have new field data
      if (searchUser && searchUser.length > 0){
        //timestamp
        const timestamp = firebase.firestore.FieldValue.serverTimestamp();
        const data = {
          username: searchUser, //adding the username the user inputs
          createdAt: timestamp //timestamp just because
        };

        todoRef
          .add(data)
          .then(() => {
            console.log('added user: ' + data.username)
            setsearchUser(' ');
          })
          .catch((error) => {
            console.error("error")
          })
      }
    }

    return (
      
        <View style={styles.container}>
            <Text>User Email: {auth.currentUser?.email}</Text>


        {/* Sign out buttton */}
        <TouchableOpacity
          onPress={handleSignOut}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>


        {/* Search button */}
        <View style = {styles.searchCont}>
          <View style = {styles.inputCont}>
            <TextInput
            style={styles.input}
            onChangeText={text => setsearchUser(text)}
            value={searchUser}
            placeholder="username"
            />
          </View>
        <TouchableOpacity
          onPress={handleSearch} 
          style={styles.button}
        >
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
        </View>

      
      </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    padding: 10
  },
  inputCont: {
    width: 200,
    marginRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  searchCont:{
    marginTop: 50,
    padding: 10,
    flexDirection: 'row'
  },
  button: {
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: 'gray',
    width: 70,
    height: 25,
    alignItems: 'center'
  },
  buttonText: {
    alignSelf: 'center', 
    paddingTop: 5,
    paddingBottom: 5
  }
})