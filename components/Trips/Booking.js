import React from 'react';
import { Dimensions, Image, ScrollView, Text, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";


export default function Booking() {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ marginTop: 15, borderRadius: 18, height: 40, width: 410, borderColor: "lightgray", borderWidth: 1, alignItems: "center", flexDirection: "row", justifyContent: "center", marginLeft: 20 }}>
                <Text style={{ fontSize: 15, color: "grey", marginRight: 25 }}>Looking for other bookings?</Text>
                <Text style={{ fontSize: 15, color: "grey" }}>Go to </Text>
                <Text style={{ fontSize: 15, color: "#437CE9" }}>Cancelled Bookings</Text>
            </View>
        </View >
    );
}



