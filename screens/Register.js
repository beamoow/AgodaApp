import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Divider } from 'react-native-paper';

export default function Register() {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const onRegister = () => {

    };

    return (
        <View style={{ flex: 1, justifyContent: "center", backgroundColor: "#ECECEC" }}>
            <View style={{ height: 600, backgroundColor: "white", borderRadius: 10, marginHorizontal: 15, elevation: 1.5, padding: 15 , marginTop:-25}}>

                <Text style={{ color: "black", fontSize: 15, marginTop: 10 }}>Email</Text>
                <View style={{ padding: 10, backgroundColor: "white", borderRadius: 5, height: 45, marginTop: 5, borderWidth: 0.9, borderColor: "lightgrey", width: 390 }}>
                    <TextInput
                        style={{ width: "90%" }}
                        autoCapitalize="none"
                        placeholder="Email"
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                    />
                </View>

                <Text style={{ color: "black", fontSize: 15, marginTop: 15 }}>Password</Text>
                <View style={{ padding: 10, backgroundColor: "white", borderRadius: 5, height: 45, marginTop: 5, borderWidth: 0.9, borderColor: "lightgrey", width: 390, flexDirection: "row", justifyContent: "space-between" }}>
                    <TextInput
                        style={{ width: "90%" }}
                        secureTextEntry
                        autoCapitalize="none"
                        placeholder="Password"
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                    />
                    <FontAwesome name="eye-slash" size={15} color="grey" style={{ marginTop: 5 }} />
                </View>

                <View style={{ marginTop: 30 }}>
                    <Button title="Register" style={{ padding: 10, marginTop: 20 }} onPress={onRegister} />
                </View>

                <View style={{ alignItems: "center", marginTop: 20 }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={{ paddingVertical: 10, color: "#3A9DF0" }}>Already have an account? Login</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: "row" }}>
                    <Divider style={{ width: 140, height: 0.5, marginTop: 25 }} />
                    <Text style={{ color: "black", fontSize: 14, marginTop: 14, marginHorizontal: 10 }}>or sign up with</Text>
                    <Divider style={{ width: 140, height: 0.5, marginTop: 25 }} />

                </View>

                <View style={{ padding: 10, backgroundColor: "white", borderRadius: 5, height: 50, marginTop: 20, borderWidth: 0.8, borderColor: "#D81717", width: 390, flexDirection: "row", justifyContent: "center" }}>
                    <FontAwesome name="google" size={25} color="#D81717" />
                    <Text style={{ color: "#D81717", fontSize: 17, marginLeft: 10 }}>Google</Text>
                </View>

                <View style={{ padding: 10, backgroundColor: "white", borderRadius: 5, height: 50, marginTop: 10, borderWidth: 0.8, borderColor: "#3E70C2", width: 390, flexDirection: "row", justifyContent: "center" }}>
                    <FontAwesome name="facebook" size={25} color="#3E70C2" />
                    <Text style={{ color: "#3E70C2", fontSize: 17, marginLeft: 10 }}>Facebook</Text>
                </View>

                <View style={{ padding: 10, backgroundColor: "white", borderRadius: 5, height: 50, marginTop: 10, borderWidth: 0.8, borderColor: "black", width: 390, flexDirection: "row", justifyContent: "center" }}>
                    <FontAwesome name="apple" size={25} color="black" />
                    <Text style={{ color: "black", fontSize: 17, marginLeft: 10 }}>Sign up with Apple</Text>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 35 }}>
                    <Text style={{ color: "black", fontSize: 13 }}>By signing in, I agree to Agoda's</Text>
                    <Text style={{ color: "#3A9DF0", fontSize: 13, marginLeft: 5 }}>Terms of Use</Text>
                    <Text style={{ color: "black", fontSize: 13, marginLeft: 5 }}>and</Text>
                    <Text style={{ color: "#3A9DF0", fontSize: 13, marginLeft: 5 }}>Privacy Policy.</Text>


                </View>

            </View>
            <Text style={{ color: "red" }}>{message}</Text>

        </View>
    );
}