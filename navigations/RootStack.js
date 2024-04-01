import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./BottomTab";
import TodoList from "../screens/TodoList";
import CartDetail from "../screens/CartDetail";
import CartForm from "../screens/CartForm";
import Carts from "../screens/Carts";

const Stack = createStackNavigator();

export default function RootStack() {
    return (
        <Stack.Navigator initialRouteName="BottomTab">
            <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
            <Stack.Screen name="Carts" component={Carts} options={{ title: "Cart" }} />
            <Stack.Screen name="CartDetail" component={CartDetail} options={{ title: "Cart Detail" }} />
            <Stack.Screen name="CartForm" component={CartForm} />
            <Stack.Screen name="TodoList" component={TodoList}   />

        </Stack.Navigator>
    );
}