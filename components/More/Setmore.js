import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";


export default function Setmore() {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ marginTop: 15, borderRadius: 20, height: 25, width: 350, borderColor: "lightgray", borderWidth: 1, alignItems: "center", flexDirection: "row" }}>
                <Text style={{ fontSize: 15, color: "#437CE9" }}>Looking for other bookings?</Text>
                <Text style={{ fontSize: 15, color: "#437CE9" }}>Go to Cancelled Bookings</Text>
            </View>
        </View>
    );
}


