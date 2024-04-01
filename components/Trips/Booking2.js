import React from 'react';
import { Dimensions, Image, ScrollView, Text, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";


export default function Booking2() {
    return (
        <View style={{ marginTop: 15, height: Dimensions.get("screen").height / 2.0, width: 1000, backgroundColor: "#F6F8FC", justifyContent: "center" }}>
            <Image style={{ height: 100, width: 130, marginLeft: 160 }} source={require("../../assets/earth.jpg")} />
            <View style={{ flexDirection: "row" }}>
                <View style={{ flexDirection: "column", alignItems: "center", marginLeft: 70, marginTop: 15 }}>
                    <Text style={{ fontSize: 17, color: "black" }}>beam.praewa@gmail.com, you have no</Text>
                    <Text style={{ fontSize: 17, color: "black" }}>upcoming trips</Text>
                    <View style={{ marginTop: 10, borderRadius: 15,  borderColor: "lightgray", borderWidth: 0.8 }}>
                        <View style={{ flexDirection: "row", margin: 10 }}>
                            <View style={{ flexDirection: "column", alignItems: "center" }}>
                                <FontAwesome name="info" size={15} color="black" style={{ marginLeft: 10, marginTop: 3 }} />
                            </View>
                            <View style={{ flexDirection: "column", alignItems: "flex-start", marginLeft: 15 }}>
                                <Text style={{ fontSize: 12, color: "black" }}>looking for other bookings?</Text>
                                <Text style={{ fontSize: 12, color: "black" }}>View all your upcoming, processing, completed, and</Text>
                                <Text style={{ fontSize: 12, color: "black" }}>cancelled bookings in Allbookings</Text> 

                            </View>

                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}



