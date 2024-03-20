import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
//import Home from './screens/Home';
import BottomTab from './navigations/BottomTab';
import { NavigationContainer } from '@react-navigation/native';




export default function App() {
  return (
    //<Home />
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>

  );
}
