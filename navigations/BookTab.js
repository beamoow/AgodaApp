import React from 'react';
import { View, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// const Tab = createBottomTabNavigator();

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Carts from '../screens/Carts';
import Book from '../screens/Book';
import Cancelled from '../components/MyTrips/Cancelled';
import Booking from '../components/Trips/Booking';

const Tab = createMaterialTopTabNavigator();


export default function BookTab() {

    return (
        <Tab.Navigator screenOptions={{ tabBarActiveTintColor: "#3671CF", tabBarInactiveTintColor: "gray", }} >
            <Tab.Screen
                name="Upcoming"
                component={Book}
                options={{
                    tabBarLabel: "Upcoming",
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Completed"
                component={Booking}
                options={{
                    tabBarLabel: "Completed",
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Cancelled"
                component={Cancelled}
                options={{
                    tabBarLabel: "Cancelled",
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    );
}


