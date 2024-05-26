import React from 'react';
import { Image, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import { Divider } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";



export default function Setmore() {
    const navigation = useNavigation();

    const onPressHandler = () => {
        navigation.navigate("Login");
    };

    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: "white" }}>
                <View style={{ backgroundColor: "#488AF8", height: 110 }}>

                    <View style={{ flexDirection: "column", marginTop: 45, marginHorizontal: 20 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={{ flexDirection: "column" }}>
                                <Text style={{ color: "white", fontSize: 17 }}>Join Agoda now</Text>
                                <Text style={{ color: "white", fontSize: 15, marginTop: 2 }}>Access our member-only deals</Text>
                            </View>
                            <TouchableOpacity onPress={onPressHandler}>
                                <View style={{ backgroundColor: "white", borderRadius: 5, elevation: 1, width: 130, alignItems: "center", flexDirection: "row", height: 35, marginTop: 9 }}>
                                    <FontAwesome name="user" color={"#488AF8"} size={15} style={{ marginLeft: 7 }} />
                                    <Text style={{ color: "#488AF8", fontSize: 15, marginLeft: 10 }}>Login/Sign up</Text>
                                </View>
                            </TouchableOpacity>
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
                    <Text style={{ color: "grey", fontSize: 15, marginLeft: 20 }}>My account</Text>
                    <Divider style={{ marginLeft: 20, marginTop: 10, height: 1 }} />

                    <TouchableOpacity onPress={onPressHandler}>
                        <View style={{ flexDirection: "row" }}>
                            <FontAwesome name="user" size={15} color="black" style={{ marginLeft: 22, marginTop: 15 }} />
                            <Text style={{ color: "grey", fontSize: 16, marginLeft: 18, marginTop: 10 }}>Sign in/Create account</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ flexDirection: "row" }}>
                        <FontAwesome name="heart" size={15} color="black" style={{ marginLeft: 20, marginTop: 15 }} />
                        <Text style={{ color: "grey", fontSize: 16, marginLeft: 15, marginTop: 10 }}>Saved</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <FontAwesome name="star" size={15} color="black" style={{ marginLeft: 20, marginTop: 15 }} />
                        <Text style={{ color: "grey", fontSize: 16, marginLeft: 15, marginTop: 10 }}>AgodaVIP</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <FontAwesome name="trophy" size={15} color="black" style={{ marginLeft: 20, marginTop: 15 }} />
                        <Text style={{ color: "grey", fontSize: 16, marginLeft: 17, marginTop: 10 }}>PointsMAX</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <FontAwesome name="ticket" size={15} color="black" style={{ marginLeft: 20, marginTop: 15 }} />
                        <Text style={{ color: "grey", fontSize: 16, marginLeft: 15, marginTop: 10 }}>Promotions</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <FontAwesome name="comment" size={15} color="black" style={{ marginLeft: 20, marginTop: 13 }} />
                        <Text style={{ color: "grey", fontSize: 16, marginLeft: 15, marginTop: 10 }}>Messages</Text>
                    </View>


                    <Text style={{ color: "grey", fontSize: 15, marginLeft: 20, marginTop: 30 }}>Settings</Text>
                    <Divider style={{ marginLeft: 20, marginTop: 10, height: 1 }} />

                    <View style={{ flexDirection: "row" }}>
                        <FontAwesome name="globe" size={15} color="black" style={{ marginLeft: 20, marginTop: 15 }} />
                        <Text style={{ color: "grey", fontSize: 16, marginLeft: 15, marginTop: 10 }}>Language</Text>
                        <Text style={{ color: "grey", fontSize: 16, marginLeft: 210, marginTop: 10 }}>English</Text>
                        <Image style={{ height: 15, width: 25, marginTop: 13, marginLeft: 10 }} source={require("../../assets/flag.png")} />
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


