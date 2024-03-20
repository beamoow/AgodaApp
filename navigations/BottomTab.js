import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';

import { FontAwesome } from "@expo/vector-icons";
import CouponDeal from '../components/Coupons/CouponDeal';
import AddCart from '../components/Cart/AddCart';
import Setmore from '../components/More/Setmore';
import Book from '../screens/Book';


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
                name="Bookings"
                component={Book}
                options={{
                    tabBarLabel: "My Trips",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="heart" color={color} size={size} />),
                    headerShown: true,
                }}
            />
             <Tab.Screen
                name="Coupons"
                component={CouponDeal}
                options={{
                    tabBarLabel: "Coupons",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="paw" color={color} size={size} />),
                    headerShown: true,
                }}
            />
            <Tab.Screen
                name="Carts"
                component={AddCart}
                options={{
                    tabBarLabel: "Cart",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="plane" color={color} size={size} />),
                    headerShown: true,
                }}
            />
            <Tab.Screen
                name="Set"
                component={Setmore}
                options={{
                    tabBarLabel: "More",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="bed" color={color} size={size} />),
                    headerShown: true,
                }}
            />  
        </Tab.Navigator>
    );


}
