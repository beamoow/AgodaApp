import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Setmore from "../components/More/Setmore";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Profile from "../screens/Profile";
import { AuthContext } from "../hooks/AuthContextProvider";

const Stack = createStackNavigator();

export default function AuthStack() {
    const {userToken, setUserToken} = useContext(AuthContext);
    // const userToken = "4QetCIdMRTYeKC0hF5L8EFtAcIQyUPeyE8rOrk8x";

    if (userToken) {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Profile" component={Profile} options={{ title: "Profile" ,  headerShown: false}} />
            </Stack.Navigator>
        );
    } else {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Setmore" component={Setmore} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ title: "Sign in", headerTitleAlign: "center" }} />
                <Stack.Screen name="Register" component={Register} options={{ title: "Sign up", headerTitleAlign: "center" }} />
            </Stack.Navigator>
        );
    }
}