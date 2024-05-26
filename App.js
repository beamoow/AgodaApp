import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
//import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './navigations/RootStack';
import { AuthContextProvider } from './hooks/AuthContextProvider';




export default function App() {
  return (
    //<Home />
    <AuthContextProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </AuthContextProvider>

  );
}
