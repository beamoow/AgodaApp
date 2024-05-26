import React from 'react';
import { Dimensions, Image, ScrollView, Text, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";


export default function Booking2() {
    return (
        <View style={{ width: 1000, backgroundColor: "#F6F8FC" }}>
            <View style={{ flexDirection: "row", marginTop: 15, marginLeft: 25}}>

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
            <Image style={{ height: 110, width: 140, marginLeft: 160, marginTop: 35, alignItems: "center" }} source={require("../../assets/earth.jpg")} />
            <View style={{ flexDirection: "row" }}>
                <View style={{ flexDirection: "column", alignItems: "center", marginLeft: 80, marginTop: 30 }}>
                    <Text style={{ fontSize: 17, color: "black" }}>beam.praewa@gmail.com, you have no</Text>
                    <Text style={{ fontSize: 17, color: "black" }}>upcoming trips</Text>
                    <Text style={{ fontSize: 14, color: "grey", marginTop: 10 }}>Start planning your next trip!</Text>
                </View>
            </View>
        </View>
    );
}



