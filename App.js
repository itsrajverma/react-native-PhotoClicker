import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/Home";
import CameraScreen from "./screens/CameraScreen";

const Stack = createStackNavigator();

const App = () =>{
  return(
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitleAlign : 'center', headerTintColor : '#fff' ,  headerStyle : { backgroundColor : '#74B9FF' } } } >
            <Stack.Screen name="Home" component={ Home } />
            <Stack.Screen name="Camera" component={ CameraScreen } />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App;