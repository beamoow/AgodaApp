import React from 'react';
import { Button, Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import { Divider } from "react-native-paper";



export default function Booking() {
    return (
        <ScrollView>

            <View style={{ width: 1000, backgroundColor: "#F6F8FC", height: 1050 }}>
                <View style={{ flexDirection: "row", marginTop: 15, marginLeft: 28 }}>

                    <View style={{ marginRight: 15 }}>
                        <View style={{ borderRadius: 20, marginLeft: 15, height: 30, width: 60, borderColor: "#3671CF", borderWidth: 2, flexDirection: "row", backgroundColor: "#E4EDFA" }}>
                            <View style={{ flexDirection: "column" }}>
                                <FontAwesome name="check" size={15} color="#3671CF" style={{ marginLeft: 8, marginTop: 5 }} />
                            </View>
                            <View style={{ flexDirection: "column" }}>
                                <Text style={{ fontSize: 15, color: "#437CE9", marginLeft: 5, marginTop: 2 }}>All</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ marginRight: 15 }}>
                        <View style={{ borderRadius: 20, height: 30, width: 85, borderColor: "lightgrey", borderWidth: 1, flexDirection: "row", backgroundColor: "white" }}>
                            <View style={{ flexDirection: "column" }}>
                                <FontAwesome name="building" size={15} color="black" style={{ marginLeft: 10, marginTop: 6 }} />
                            </View>
                            <View style={{ flexDirection: "column" }}>
                                <Text style={{ fontSize: 15, color: "black", marginLeft: 5, marginTop: 3 }}>Hotels</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ marginRight: 15 }}>
                        <View style={{ borderRadius: 20, height: 30, width: 85, borderColor: "lightgrey", borderWidth: 1, flexDirection: "row", backgroundColor: "white" }}>
                            <View style={{ flexDirection: "column" }}>
                                <FontAwesome name="plane" size={15} color="black" style={{ marginLeft: 9, marginTop: 6 }} />
                            </View>
                            <View style={{ flexDirection: "column" }}>
                                <Text style={{ fontSize: 15, color: "black", marginLeft: 5, marginTop: 3 }}>Flights</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ marginRight: 15 }}>
                        <View style={{ borderRadius: 20, height: 30, width: 95, borderColor: "lightgrey", borderWidth: 1, flexDirection: "row", backgroundColor: "white" }}>
                            <View style={{ flexDirection: "column" }}>
                                <FontAwesome name="train" size={14} color="black" style={{ marginLeft: 9, marginTop: 6 }} />
                            </View>
                            <View style={{ flexDirection: "column" }}>
                                <Text style={{ fontSize: 14, color: "black", marginLeft: 5, marginTop: 3 }}>Activities</Text>
                            </View>
                        </View>
                    </View>

                </View>
                <View style={{ marginTop: 25, flexDirection: "column", marginLeft: 30 }}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontSize: 18 }}>Bangkok</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                        <Text style={{ color: "grey" }}>Sun, Apr 07</Text>
                    </View>

                    <View style={{ width: 390, height: 40, borderTopRightRadius: 15, borderTopLeftRadius: 15, marginTop: 5, borderWidth: 1, flexDirection: "column", backgroundColor: "#E4EDFA", borderBottomColor: "#E4EDFA", borderTopColor: "lightgrey", borderRightColor: "lightgrey", borderLeftColor: "lightgrey" }}>
                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <FontAwesome name="comment" size={14} color="#3671CF" style={{ marginLeft: 17, marginTop: 3 }} />
                            <Text style={{ color: "#437CE9", marginLeft: 12 }}>Contact Agoda Customer Service</Text>
                        </View>
                    </View>

                    <View style={{ width: 390, height: 50, borderWidth: 1, flexDirection: "column", backgroundColor: "white", borderRightColor: "lightgrey", borderLeftColor: "lightgrey", borderBottomColor: "white", borderTopColor: "#E4EDFA" }}>
                        <View style={{ flexDirection: "row", marginTop: 15, marginLeft: 17 }}>
                            <Text style={{ color: "black", fontSize: 13 }}>ID: 123456789</Text>
                            <View style={{ backgroundColor: "#DAF5D5", height: 20, width: 70, alignItems: "center", marginLeft: 195 }}>
                                <Text style={{ fontSize: 11, color: "green" }}>Completed</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ width: 390, height: 80, borderWidth: 1, flexDirection: "column", backgroundColor: "white", borderRightColor: "lightgrey", borderLeftColor: "lightgrey", borderBottomColor: "lightgrey", borderTopColor: "lightgrey" }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ flexDirection: "column" }}>
                                <Image style={{ height: 80, width: 60 }} source={require("../../assets/granhotel.jpg")} />
                            </View>
                            <View style={{ flexDirection: "column", marginLeft: 20, marginTop: 10 }}>
                                <Text style={{ color: "black", fontSize: 15 }}>Grande Sukhumvit Hotel</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={{ flexDirection: "column" }}>
                                        <Text style={{ color: "grey", fontSize: 11 }}>Check in</Text>
                                        <Text style={{ color: "black", fontSize: 11 }}>Sun,  Apr 07</Text>

                                    </View>
                                    <View style={{ flexDirection: "column", marginLeft: 20 }}>
                                        <Text style={{ color: "grey", fontSize: 11 }}>Check out</Text>
                                        <Text style={{ color: "black", fontSize: 11 }}>Mon,  Apr 07</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ width: 390, height: 100, borderBottomRightRadius: 15, borderBottomLeftRadius: 15, borderWidth: 1, flexDirection: "column", backgroundColor: "white", borderBottomColor: "lightgrey", borderTopColor: "white", borderRightColor: "lightgrey", borderLeftColor: "lightgrey" }}>
                        <View style={{ flexDirection: "row", marginTop: 10, borderRadius: 20, marginLeft: 17 }}>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: "#3270E7",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: 355,
                                    height: 35,
                                    borderRadius: 20
                                }}
                            >
                                <Text style={{ color: "white" }}>Manage booking</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 7, borderRadius: 20, marginLeft: 17 }}>
                            <View
                                style={{
                                    backgroundColor: "white",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: 355,
                                    height: 35,
                                    borderRadius: 20,
                                    borderColor: "grey",
                                    borderWidth: 0.5
                                }}
                            >
                                <Text style={{ color: "#437CE9" }}>Submit your review</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", marginTop: 15 }}>
                        <Text style={{ color: "grey" }}>Mon, Feb 12</Text>
                    </View>

                    <View style={{ width: 390, height: 40, borderTopRightRadius: 15, borderTopLeftRadius: 15, marginTop: 5, borderWidth: 1, flexDirection: "column", backgroundColor: "#E4EDFA", borderBottomColor: "#E4EDFA", borderTopColor: "lightgrey", borderRightColor: "lightgrey", borderLeftColor: "lightgrey" }}>
                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <FontAwesome name="comment" size={14} color="#3671CF" style={{ marginLeft: 17, marginTop: 3 }} />
                            <Text style={{ color: "#437CE9", marginLeft: 12 }}>Contact Agoda Customer Service</Text>
                        </View>
                    </View>

                    <View style={{ width: 390, height: 50, borderWidth: 1, flexDirection: "column", backgroundColor: "white", borderRightColor: "lightgrey", borderLeftColor: "lightgrey", borderBottomColor: "white", borderTopColor: "#E4EDFA" }}>
                        <View style={{ flexDirection: "row", marginTop: 15, marginLeft: 17 }}>
                            <Text style={{ color: "black", fontSize: 13 }}>ID: 987654321</Text>
                            <View style={{ backgroundColor: "#DAF5D5", height: 20, width: 70, alignItems: "center", marginLeft: 195 }}>
                                <Text style={{ fontSize: 11, color: "green" }}>Completed</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ width: 390, height: 80, borderWidth: 1, flexDirection: "column", backgroundColor: "white", borderRightColor: "lightgrey", borderLeftColor: "lightgrey", borderBottomColor: "lightgrey", borderTopColor: "lightgrey" }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ flexDirection: "column" }}>
                                <Image style={{ height: 80, width: 60 }} source={require("../../assets/Novo.jpg")} />
                            </View>
                            <View style={{ flexDirection: "column", marginLeft: 20, marginTop: 10 }}>
                                <Text style={{ color: "black", fontSize: 15 }}>Novotel Bangkok Future Park Rangsit</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={{ flexDirection: "column" }}>
                                        <Text style={{ color: "grey", fontSize: 11 }}>Check in</Text>
                                        <Text style={{ color: "black", fontSize: 11 }}>Mon,  Feb 12</Text>

                                    </View>
                                    <View style={{ flexDirection: "column", marginLeft: 20 }}>
                                        <Text style={{ color: "grey", fontSize: 11 }}>Check out</Text>
                                        <Text style={{ color: "black", fontSize: 11 }}>Wed,  Feb 14</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ width: 390, height: 100, borderBottomRightRadius: 15, borderBottomLeftRadius: 15, borderWidth: 1, flexDirection: "column", backgroundColor: "white", borderBottomColor: "lightgrey", borderTopColor: "white", borderRightColor: "lightgrey", borderLeftColor: "lightgrey" }}>
                        <View style={{ flexDirection: "row", marginTop: 10, borderRadius: 20, marginLeft: 17 }}>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: "#3270E7",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: 355,
                                    height: 35,
                                    borderRadius: 20
                                }}
                            >
                                <Text style={{ color: "white" }}>Manage booking</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 7, borderRadius: 20, marginLeft: 17 }}>
                            <View
                                style={{
                                    backgroundColor: "white",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: 355,
                                    height: 35,
                                    borderRadius: 20,
                                    borderColor: "grey",
                                    borderWidth: 0.5
                                }}
                            >
                                <Text style={{ color: "#437CE9" }}>Submit your review</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", marginTop: 15 }}>
                        <Text style={{ color: "grey" }}>Tue, Dec 26</Text>
                    </View>

                    <View style={{ width: 390, height: 40, borderTopRightRadius: 15, borderTopLeftRadius: 15, marginTop: 5, borderWidth: 1, flexDirection: "column", backgroundColor: "#E4EDFA", borderBottomColor: "#E4EDFA", borderTopColor: "lightgrey", borderRightColor: "lightgrey", borderLeftColor: "lightgrey" }}>
                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <FontAwesome name="comment" size={14} color="#3671CF" style={{ marginLeft: 17, marginTop: 3 }} />
                            <Text style={{ color: "#437CE9", marginLeft: 12 }}>Contact Agoda Customer Service</Text>
                        </View>
                    </View>

                    <View style={{ width: 390, height: 50, borderWidth: 1, flexDirection: "column", backgroundColor: "white", borderRightColor: "lightgrey", borderLeftColor: "lightgrey", borderBottomColor: "white", borderTopColor: "#E4EDFA" }}>
                        <View style={{ flexDirection: "row", marginTop: 15, marginLeft: 17 }}>
                            <Text style={{ color: "black", fontSize: 13 }}>ID: 388742786</Text>
                            <View style={{ backgroundColor: "#DAF5D5", height: 20, width: 70, alignItems: "center", marginLeft: 195 }}>
                                <Text style={{ fontSize: 11, color: "green" }}>Completed</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ width: 390, height: 80, borderWidth: 1, flexDirection: "column", backgroundColor: "white", borderRightColor: "lightgrey", borderLeftColor: "lightgrey", borderBottomColor: "lightgrey", borderTopColor: "lightgrey" }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ flexDirection: "column" }}>
                                <Image style={{ height: 80, width: 60 }} source={require("../../assets/Teshotel.jpg")} />
                            </View>
                            <View style={{ flexDirection: "column", marginLeft: 20, marginTop: 10 }}>
                                <Text style={{ color: "black", fontSize: 15 }}>Tastoria Collection Hotel Sukhumvit</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={{ flexDirection: "column" }}>
                                        <Text style={{ color: "grey", fontSize: 11 }}>Check in</Text>
                                        <Text style={{ color: "black", fontSize: 11 }}>Tue,  Dec 26</Text>

                                    </View>
                                    <View style={{ flexDirection: "column", marginLeft: 20 }}>
                                        <Text style={{ color: "grey", fontSize: 11 }}>Check out</Text>
                                        <Text style={{ color: "black", fontSize: 11 }}>Thu,  Jan 4</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ width: 390, height: 100, borderBottomRightRadius: 15, borderBottomLeftRadius: 15, borderWidth: 1, flexDirection: "column", backgroundColor: "white", borderBottomColor: "lightgrey", borderTopColor: "white", borderRightColor: "lightgrey", borderLeftColor: "lightgrey" }}>
                        <View style={{ flexDirection: "row", marginTop: 10, borderRadius: 20, marginLeft: 17 }}>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: "#3270E7",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: 355,
                                    height: 35,
                                    borderRadius: 20
                                }}
                            >
                                <Text style={{ color: "white" }}>Manage booking</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 7, borderRadius: 20, marginLeft: 17 }}>
                            <View
                                style={{
                                    backgroundColor: "white",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: 355,
                                    height: 35,
                                    borderRadius: 20,
                                    borderColor: "grey",
                                    borderWidth: 0.5
                                }}
                            >
                                <Text style={{ color: "#437CE9" }}>Submit your review</Text>
                            </View>
                        </View>
                    </View>

                </View>

            </View>
        </ScrollView>
    );
}



