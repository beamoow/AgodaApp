import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";


export default function HomePage3() {
    return (
        <View style={{ marginTop: 25, borderRadius: 20, height: 100 , elevation:1.5}}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" , margin:10}}>
                <View style={{ flexDirection: "column", alignItems: "center", marginLeft:5}}>
                    <Image style={{ height: 40, width: 40 }} source={require("../../assets/calendar.jpg")} />
                    <Text style={{ fontSize: 13, color: "black" }}>Long Stays</Text>
                    <Text style={{ fontSize: 13, color: "black" }}>Deals</Text>
                </View>
                <View style={{ flexDirection: "column", alignItems: "center" }}>
                    <Image style={{ height: 40, width: 40 }} source={require("../../assets/dayuse.jpg")} />
                    <Text style={{ fontSize: 13, color: "black" }}>Day Use</Text>
                </View>
                <View style={{ flexDirection: "column", alignItems: "center" }}>
                    <Image style={{ height: 40, width: 40 }} source={require("../../assets/offer.jpg")} />
                    <Text style={{ fontSize: 13, color: "black" }}>Special</Text>
                    <Text style={{ fontSize: 13, color: "black" }}>Offers</Text>
                </View>
                <View style={{ flexDirection: "column", alignItems: "center" }}>
                    <Image style={{ height: 40, width: 40 }} source={require("../../assets/airtrans.jpg")} />
                    <Text style={{ fontSize: 13, color: "black" }}>Airport</Text>
                    <Text style={{ fontSize: 13, color: "black" }}>transport</Text>
                </View>
                <View style={{ flexDirection: "column", alignItems: "center", marginRight: 10 }}>
                    <Image style={{ height: 40, width: 40 }} source={require("../../assets/carrent.jpg")} />
                    <Text style={{ fontSize: 13, color: "black" }}>Car</Text>
                    <Text style={{ fontSize: 13, color: "black" }}>rentals</Text>
                </View>
            </View>
        </View>


    );
}
