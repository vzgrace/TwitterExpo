import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
//import TwitterAPI from './ios/TwitterAPI'

/*
 These are the test files that I am currently working with. First I am makign a test Button which will interact with the Twitter API.
 I am not currently sure what the point of the ListComponents file is but they use it in the video im watching.
 */
import { Button } from './ios/Button.js'
import { ListComponent } from './ios/ListComponents.js'



const Stack = createNativeStackNavigator();

export default function App() {
    function addComponent() {
        
    }
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  // <Text>Hello</Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
