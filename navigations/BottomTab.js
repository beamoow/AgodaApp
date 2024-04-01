import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';

import { FontAwesome } from "@expo/vector-icons";
import CouponDeal from '../components/Coupons/CouponDeal';
import Setmore from '../components/More/Setmore';
import Book from '../screens/Book';
import Carts from '../screens/Carts';
import BookTab from './BookTab';
import { Text, View } from 'react-native';

const Tab = createBottomTabNavigator();

export default function BottomTab() {

    return (
        <Tab.Navigator screenOptions={{ tabBarActiveTintColor: "#437CE9", tabBarInactiveTintColor: 'gray' }} >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="home" color={color} size={size} />),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Booking"
                component={BookTab}
                options={{
                    tabBarLabel: "My Trips",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="suitcase" color={color} size={size} />),
                    headerShown: true,
                }}
            />
            <Tab.Screen
                name="Coupons"
                component={CouponDeal}
                options={{
                    tabBarLabel: "Coupons",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="tag" color={color} size={size} />),
                    headerShown: true,
                }}
            />
            <Tab.Screen
                name="Cart"
                component={Carts}
                options={{
                    tabBarLabel: "Cart",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="shopping-cart" color={color} size={size} />),
                    headerShown: true,
                }}
            />
            <Tab.Screen
                name="Set"
                component={Setmore}
                options={{
                    tabBarLabel: "More",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="user" color={color} size={size} />),
                    headerShown: true,
                }}
            />
        </Tab.Navigator>
    );


}
