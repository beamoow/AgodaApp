import { useNavigation } from "@react-navigation/native";
import React, { useState, useContext } from "react";
import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import { AuthContext } from "../hooks/AuthContextProvider";
// import AuthLaravel from "../../services/AuthLaravel";
import UserTokenStorage from "../storages/UserTokenStorage";
import AuthService from "../services/AuthService";
// import { AuthContextProvider } from "../hooks/AuthContextProvider";
// import { Dimensions } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Divider } from 'react-native-paper';



export default function Login() {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const { userToken, setUserToken } = useContext(AuthContext);

    const onLogin = async () => {
        let item = {
            email: email,
            password: password,
            device_name: "test", //ควรดึงข้อมูลจากอุปกรณ์
        };
        let token = await AuthService.login(item);
        if (token) {
            console.log(token);
            setUserToken(token);
            UserTokenStorage.writeItem(token);
        } else {
            console.log("username / password are not correct!!!");
        }

    };

    return (
        <View style={{ flex: 1, justifyContent: "center", backgroundColor: "#ECECEC" }}>
            <View style={{ height: 650, backgroundColor: "white", borderRadius: 10, marginHorizontal: 15, elevation: 1.5, padding: 15 , marginTop:20}}>

                <Text style={{ color: "#3A9DF0", fontSize: 17, marginTop: 5, alignSelf: "center" }}>EMAIL</Text>
                <Divider style={{ width: 390, height: 1, marginTop: 15 }} />

                {/* <Text style={{ color: "red" }}>{message}</Text> */}

                <Text style={{ color: "black", fontSize: 15, marginTop: 20 }}>Email</Text>
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
                    <Button title="Sign in" style={{ padding: 10, marginTop: 20 }} onPress={onLogin} />
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                        <Text style={{ paddingVertical: 10, color: "#3A9DF0" }}>Create account</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: "row" }}>
                        <FontAwesome name="lock" size={15} color="#3A9DF0" style={{ marginTop: 12 }} />
                        <Text style={{ paddingVertical: 10, color: "#3A9DF0", marginLeft: 10 }}>Forgot password?</Text>
                    </View>
                </View>

                <View style={{ flexDirection: "row" }}>
                    <Divider style={{ width: 140, height: 0.5, marginTop: 35 }} />
                    <Text style={{ color: "black", fontSize: 14, marginTop: 24, marginHorizontal: 10 }}>or sign in with</Text>
                    <Divider style={{ width: 140, height: 0.5, marginTop: 35 }} />

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
                    <Text style={{ color: "black", fontSize: 17, marginLeft: 10 }}>Sign in with Apple</Text>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 25 }}>
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