import React, { useContext, useEffect, useState } from "react";
import { Button, Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
import { AuthContext } from "../hooks/AuthContextProvider";
// import AuthLaravel from "../../services/AuthLaravel";
import UserTokenStorage from "../storages/UserTokenStorage";

import { FontAwesome } from "@expo/vector-icons";
import AuthService from "../services/AuthService";
import { Divider } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";




export default function Profile() {

    const navigation = useNavigation();

    const onPressHandler = () => {
        navigation.navigate("Login");
      };

    const { userToken, setUserToken } = useContext(AuthContext);
    const [user, setUser] = useState(null);

    const onLoad = async ()=> {
        // let u = await AuthLaravel.getUser(userToken);
        let u = await AuthService.getUser("OGY4pxH57au02z75q8v4Douz7Eq1BvHStweL3pjj");
        setUser(u);
    };  

    useEffect(() => { onLoad(); }, [userToken]);

    const onLogout = async () => {
        setUserToken("");
        UserTokenStorage.writeItem("");
    };

    if (!user) return (<View></View>)

    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: "white" }}>
                <View style={{ backgroundColor: "#3C4156", height: 110 }}>
                    <View style={{ flexDirection: "column", marginTop: 30 }}>
                        <View style={{ flexDirection: "row" , justifyContent:"space-between", marginHorizontal:20}}>
                            <Text style={{ color: "white", fontSize: 17 }}>Welcome, {user.name}</Text>
                            <TouchableOpacity onPress={onLogout}>
                                <Text style={{ color: "tomato", fontSize: 17, marginTop: 3 }}>Sign out</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Image style={{ height: 20, width: 120, marginLeft: 20, borderRadius: 5, marginTop: 10 }} source={require("../assets/tcpcap.jpg")} />
                        </View>
                    </View>

                </View>


                <View style={{ backgroundColor: "#2AA864", height: 70 }}>
                    <View style={{ flexDirection: "column", marginTop: 10 }}>

                        <View style={{ flexDirection: "row" }}>
                            <View style={{ borderRadius: 30, borderWidth: 2.5, borderColor: "#064D28", alignItems: "center", marginLeft: 20, height: 50, width: 50 }}>
                                <FontAwesome name="home" size={35} color="white" style={{ marginTop: 5 }} />
                            </View>
                            <Text style={{ color: "white", fontSize: 17, marginLeft: 20 }}>Host On</Text>
                            <FontAwesome name="angle-right" size={25} color="white" style={{ marginLeft: 270, marginTop: 10 }} />
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ color: "white", marginLeft: 90, fontSize: 16, marginTop: -25 }}>agodaHomes</Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginTop: 20, flexDirection: "column" }}>
                    <Text style={{ color: "grey", fontSize: 15, marginLeft: 20 }}>My account : {user.email}</Text>
                    <Divider style={{ marginLeft: 20, marginTop: 10, height: 1 }} />
                    <View style={{ flexDirection: "row" }}>
                        <FontAwesome name="heart" size={15} color="black" style={{ marginLeft: 20, marginTop: 15 }} />
                        <Text style={{ color: "grey", fontSize: 16, marginLeft: 15, marginTop: 10 }}>Saved</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <FontAwesome name="star" size={15} color="black" style={{ marginLeft: 20, marginTop: 15 }} />
                        <Text style={{ color: "grey", fontSize: 16, marginLeft: 15, marginTop: 10 }}>AgodaVIP</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <FontAwesome name="credit-card" size={15} color="black" style={{ marginLeft: 20, marginTop: 15 }} />
                        <Text style={{ color: "grey", fontSize: 16, marginLeft: 15, marginTop: 10 }}>My saved cards</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <FontAwesome name="money" size={15} color="black" style={{ marginLeft: 20, marginTop: 15 }} />
                        <Text style={{ color: "grey", fontSize: 16, marginLeft: 15, marginTop: 10 }}>AgodaCash</Text>
                        <Text style={{ color: "grey", fontSize: 17, marginLeft: 240, marginTop: 10 }}>฿ 0.00</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <FontAwesome name="dollar" size={15} color="black" style={{ marginLeft: 20, marginTop: 15 }} />
                        <Text style={{ color: "grey", fontSize: 16, marginLeft: 22, marginTop: 10 }}>Cashback Rewards</Text>
                        <Text style={{ color: "grey", fontSize: 17, marginLeft: 186, marginTop: 10 }}>฿ 0.00</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <FontAwesome name="trophy" size={15} color="black" style={{ marginLeft: 20, marginTop: 15 }} />
                        <Text style={{ color: "grey", fontSize: 16, marginLeft: 17, marginTop: 10 }}>PointsMAX</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <FontAwesome name="ticket" size={15} color="black" style={{ marginLeft: 20, marginTop: 15 }} />
                        <Text style={{ color: "grey", fontSize: 16, marginLeft: 15, marginTop: 10 }}>Coupons</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <FontAwesome name="comment" size={15} color="black" style={{ marginLeft: 20, marginTop: 13 }} />
                        <Text style={{ color: "grey", fontSize: 16, marginLeft: 15, marginTop: 10 }}>Messages</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <FontAwesome name="bookmark" size={15} color="black" style={{ marginLeft: 20, marginTop: 16 }} />
                        <Text style={{ color: "grey", fontSize: 16, marginLeft: 19, marginTop: 12 }}>My reviews</Text>
                    </View>

                    <Text style={{ color: "grey", fontSize: 15, marginLeft: 20, marginTop: 30 }}>Settings</Text>
                    <Divider style={{ marginLeft: 20, marginTop: 10, height: 1 }} />

                    <View style={{ flexDirection: "row" }}>
                        <FontAwesome name="globe" size={15} color="black" style={{ marginLeft: 20, marginTop: 15 }} />
                        <Text style={{ color: "grey", fontSize: 16, marginLeft: 15, marginTop: 10 }}>Language</Text>
                        <Text style={{ color: "grey", fontSize: 16, marginLeft: 210, marginTop: 10 }}>English</Text>
                        <Image style={{ height: 15, width: 25, marginTop: 13, marginLeft: 10 }} source={require("../assets/flag.png")} />
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <FontAwesome name="tag" size={15} color="black" style={{ marginLeft: 20, marginTop: 15 }} />
                        <Text style={{ color: "grey", fontSize: 16, marginLeft: 15, marginTop: 10 }}>Price display</Text>
                        <Text style={{ color: "grey", fontSize: 11, marginLeft: 205, marginTop: 10 }}>Base per night</Text>
                        <Text style={{ color: "grey", fontSize: 14, marginLeft: -45, marginTop: 25 }}>฿ | THB</Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <FontAwesome name="compass" size={15} color="black" style={{ marginLeft: 20, marginTop: 14 }} />
                        <Text style={{ color: "grey", fontSize: 16, marginLeft: 15, marginTop: 10 }}>Km or mile?</Text>
                        <Text style={{ color: "grey", fontSize: 16, marginLeft: 260, marginTop: 10 }}>km</Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <FontAwesome name="bell" size={15} color="black" style={{ marginLeft: 20, marginTop: 15 }} />
                        <Text style={{ color: "grey", fontSize: 16, marginLeft: 13, marginTop: 13 }}>Notifications</Text>
                    </View>

                    <Text style={{ color: "grey", fontSize: 15, marginLeft: 20, marginTop: 30 }}>Information</Text>
                    <Divider style={{ marginLeft: 20, marginTop: 10, height: 1 }} />

                    <View style={{ flexDirection: "row" }}>
                        <FontAwesome name="headphones" size={15} color="black" style={{ marginLeft: 20, marginTop: 15 }} />
                        <Text style={{ color: "grey", fontSize: 16, marginLeft: 15, marginTop: 10 }}>Help Center</Text>
                    </View>

                    <View style={{ flexDirection: "row", height: 50 }}>
                        <FontAwesome name="font" size={15} color="black" style={{ marginLeft: 20, marginTop: 15 }} />
                        <Text style={{ color: "grey", fontSize: 16, marginLeft: 15, marginTop: 12 }}>About us</Text>
                    </View>

                </View>

            </View>
        </ScrollView>
    );
}


